import {Box, Button, IconButton, ListItem, makeStyles, Typography} from "@material-ui/core";
import Avatar from "../components/Avatar";
import {
  addToLocalStorage,
  getFromLocalStorage,
  localStorageConstants,
  removeFromLocalStorage
} from "../constants/localStorage";
import doctor1 from "../assets/Dr. Yair Zyman.png";
import doctor2 from "../assets/Dra. Nayeli Ugalde.png";
import doctor3 from "../assets/Dra. Gloria Saravia.png";
import doctor4 from "../assets/Dr. Christian García.png";
import doctor5 from "../assets/Dra. Daniela Gutierrez.png";
import userPhoto from "../assets/user.png";
import {roles} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {setUser} from "../redux/global";

const photosArray = [doctor1, doctor2, doctor3, doctor4, doctor5]


const Configurations = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(({global}) => global.contacts)
  const classes = useStyle()
  const history = useHistory()
  const findPhoto = () => {
    const username = getFromLocalStorage(localStorageConstants.user)
    const role = getFromLocalStorage(localStorageConstants.role)
    let photo
    if (role === roles.doctor)
      photo = photosArray[contacts.findIndex(el => el.name === username)]
    else photo = userPhoto

    return photo
  }

  function logOut() {
    removeFromLocalStorage(localStorageConstants.user)
    removeFromLocalStorage(localStorageConstants.role)
    setUser({dispatch, user: {}})
    history.push('/')
  }

  return <Box className={classes.rootContainer}>
    <Avatar photo={findPhoto()} size={{width: '8rem', height: '8rem'}}/>
    <Typography variant={'h4'} className={classes.title}>
      {
        getFromLocalStorage(localStorageConstants.user)
      }
    </Typography>

    <IconButton onClick={logOut}>
      Log Out
    </IconButton>
  </Box>
}
const useStyle = makeStyles((theme) => {
  return {
    rootContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.neutral,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: theme.palette.text.primary
    }
  }
})
export default Configurations
