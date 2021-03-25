import {Box, IconButton, ListItem, makeStyles, Typography} from "@material-ui/core"
import doctor1 from "../../assets/Dr. Yair Zyman.png"
import doctor2 from "../../assets/Dra. Nayeli Ugalde.png"
import doctor3 from "../../assets/Dra. Gloria Saravia.png"
import doctor4 from "../../assets/Dr. Christian García.png"
import doctor5 from "../../assets/Dra. Daniela Gutierrez.png"
import Avatar from "../../components/Avatar";
import useChat from "../../hooks/socket";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {v4 as idV4} from "uuid";
import {addToLocalStorage, localStorageConstants} from "../../constants/localStorage";
import {roles} from "../../constants";

const photosArray = [doctor1, doctor2, doctor3, doctor4, doctor5]
const contactsDummy = [
  {name: 'Dr. Yair Zyman', color: '#D0F7E7', photo: photosArray[0]},
  {name: 'Dra. Nayeli Ugalde', color: '#D2DDFF', photo: photosArray[1]},
  {name: 'Dra. Gloria Saravia', color: '#FCEED2', photo: photosArray[2]},
  {name: 'Dr. Christian García', color: '#F6EDFD', photo: photosArray[3]},
  {name: 'Dra. Daniela Gutierrez', color: '#D0F7E7', photo: photosArray[4]},
]


const DoctorsList = () => {
  const classes = useStyle()
  const history = useHistory()
  const {handleLoginRequest} = useChat()
  const [name, setName] = useState();

  const handleProfileClick = (contact) => {
    setName(contact.name)
  }

  const handleNextClick = () => {

    if (name) {
      handleLoginRequest({username: name, role: roles.doctor})
      addToLocalStorage(localStorageConstants.user, name)
      addToLocalStorage(localStorageConstants.role, roles.doctor)
      history.push('/conversations')
    } else alert(`Oh wow it's look you need to provide some username`)
  }


  return <Box className={classes.rootContainer}>
    <Typography variant={'h4'} className={classes.descriptionLabel}>
      Welcome Dr. Who are you?
    </Typography>
    <Box className={classes.listContainer}>

      {contactsDummy.map((contact, index) =>
        <Box className={`${classes.avatarContainer} ${name === contact.name && classes.selectedProfile}`}
             onClick={() => handleProfileClick(contact)} key={idV4()}>
          <Avatar photo={contact.photo} color={contact.color} size={{width: '8rem', height: '8rem'}}/>
        </Box>
      )}
    </Box>
    <Box style={{width: 64, height: 64, alignSelf: 'flex-end'}} onClick={() => handleNextClick()}>
      <IconButton>
        <li className='bx bx-right-arrow-alt'/>
      </IconButton>
    </Box>
  </Box>
}
const useStyle = makeStyles((theme) => {
  return {
    rootContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'flex-start',
      }
    },
    avatarContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all .25s ease',
      "&:hover": {
        cursor: 'pointer',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50%'
      }
    },
    selectedProfile: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '50%'
    },
    listContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridGap: '.5rem',
      boxSizing: 'border-box',
      overflowY: 'auto',
      width: '100 %',
      padding: '10px',
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(2,1fr)',
      }
    },
    descriptionLabel: {
      color: theme.palette.text.secondary,
    }
  }
})
export default DoctorsList
