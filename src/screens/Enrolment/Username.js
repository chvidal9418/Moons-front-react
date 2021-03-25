import {Box, IconButton, makeStyles, TextField, Typography} from "@material-ui/core"
import userAvatar from '../../assets/user.png'
import Avatar from "../../components/Avatar"
import useChat from "../../hooks/socket"
import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux";
import {addToLocalStorage, localStorageConstants} from "../../constants/localStorage";
import {roles} from "../../constants";

const Username = () => {
  const history = useHistory()
  const classes = useStyles()
  const [name, setName] = useState()

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const {handleLoginRequest} = useChat()

  const user = useSelector(({global}) => global.user)
  const conversations = useSelector(({global}) => global.conversations)

  useEffect(() => {

    if (user.username) {
      console.log(user)
      history.push('/conversations')
    }
  }, [conversations])

  const handleNextClick = () => {
    if (name) {
      addToLocalStorage(localStorageConstants.user, name)
      addToLocalStorage(localStorageConstants.role, roles.patient)
      handleLoginRequest({username: name, role: roles.patient})

    } else alert(`Oh wow it's look you need to provide some username`)
  }

  return (
    <Box>
      <Box style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-10rem'}}>
        <Box style={{margin: '1rem'}}>
          <Avatar photo={userAvatar} size={{width: 124, height: 124}}/>
        </Box>
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <TextField style={{width: '100%'}} id="outlined-basic" label="userName" variant="outlined"
                     onChange={handleChange}/>
        </Box>

        <Typography variant={'caption'} className={classes.descriptionLabel} style={{marginTop: '1rem'}}>
          Oh it seems that you are new around here, tell us your name!
        </Typography>

        <Box style={{width: 64, height: 64,}} onClick={handleNextClick}>
          <IconButton>
            <li className='bx bx-right-arrow-alt'/>
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}


const useStyles = makeStyles((theme) => {
    return {

      descriptionLabel: {
        color: theme.palette.text.disabled
      }
    }
  }
)
export default Username
