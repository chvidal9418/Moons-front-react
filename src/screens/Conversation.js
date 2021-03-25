import {Box, Divider, Hidden, IconButton, makeStyles, TextField, Typography} from "@material-ui/core";
import Avatar from "../components/Avatar";
import {useSelector} from "react-redux";
import apple from '../assets/apple.svg'
import {useEffect, useRef, useState} from "react";
import {v4 as idV4} from "uuid";
import {getFromLocalStorage, localStorageConstants} from "../constants/localStorage";
import useChat from "../hooks/socket";
import {useHistory, useParams} from "react-router-dom";
import doctor1 from "../assets/Dr. Yair Zyman.png";
import doctor2 from "../assets/Dra. Nayeli Ugalde.png";
import doctor3 from "../assets/Dra. Gloria Saravia.png";
import doctor4 from "../assets/Dr. Christian García.png";
import doctor5 from "../assets/Dra. Daniela Gutierrez.png";
import userPhoto from "../assets/user.png";
import EmptyScreen from "./EmptyScreen";

const photosArray = [doctor1, doctor2, doctor3, doctor4, doctor5]

const Conversation = () => {

  const {id} = useParams()
  const conversations = useSelector(({global}) => global.conversations)
  const contacts = useSelector(({global}) => global.contacts)
  const [conversation, setConversation] = useState()
  const [message, setMessage] = useState('')
  const username = getFromLocalStorage(localStorageConstants.user)
  const {handleSendMessage} = useChat()
  const {conversationContainer} = useRef(null)
  const history = useHistory()

  useEffect(() => {
    if (conversationContainer)
      conversationContainer.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }, [conversationContainer])

  useEffect(() => {
    findConversation()
  }, [id, conversations])


  const findColor = (conversation) => {
    if (contacts){
      console.log(contacts)
      let c = contacts.find(el => el.name === conversation.receiver)
      return c.color || '#D0F7E7'
    }
    else return '#D0F7E7'

  }

  const findAlignment = (sender) => {

    return sender === username ? 'flex-end' : 'flex-start'
  }

  const findPhoto = (conversation) => {
    let photo
    if (conversation.sender === username)
      photo = photosArray[contacts.findIndex(el => el.name === conversation.receiver)]
    else photo = userPhoto
    return photo
  }

  const findName = (contact) => {
    return contact.sender === username ? contact.receiver : contact.sender
  }

  const findConversation = () => {
    if (conversations && conversations.length > 0) {
      console.log(conversations,id,'ultimo fallo')
      let conversationAux = conversations.find(conv => conv.id === id)
      if (conversationAux)
        setConversation({
          ...conversationAux,
          color: findColor(conversationAux),
          photo: findPhoto(conversationAux)
        })
    }
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleMessage()
      event.preventDefault();
    }
  }

  const handleMessage = () => {
    handleSendMessage(conversation.id, message, username)
    setMessage('')
  }

  const ConversationListGenerator = () => {
    return conversation ? Object.keys(conversation.messages).map(message =>
      <Box key={idV4()} style={{
        padding: '.5rem',
        display: 'flex',
        justifyContent: `${findAlignment(conversation.messages[message].sender)}`
      }}>
        <Box className={classes.messageContainer}>
          <Typography variant={'body1'} key={idV4()} className={classes.title}>
            {conversation.messages[message].content}
          </Typography>

          <Typography variant={'caption'} key={idV4()} className={classes.subtitleLabel}>
            {conversation.messages[message].receivedDate}
          </Typography>
        </Box>
      </Box>
    ) : <Box/>
  }


  const classes = useStyles()
  return <Box className={classes.rootContainer}>

    {
      conversation ?
        <Box className={classes.conversationContainer}>
          <Box className={classes.conversationHeaderContainer}>
            <Hidden mdUp>
              <IconButton onClick={() => history.goBack()}>
                <li className='bx bx-left-arrow'/>
              </IconButton>
            </Hidden>
            <Avatar color={conversation.color}
                    photo={conversation.photo}/>
            <Box style={{display: 'flex', flexDirection: 'column'}}>
              <Typography variant={'h5'} className={classes.title}>
                {findName(conversation)}
              </Typography>
              <Typography className={classes.subtitleLabel}>
                is Active
              </Typography>
            </Box>
          </Box>

          <Box style={{width: '100%', height: '100%', overflowY: 'auto', padding: '2rem'}}>
            {
              ConversationListGenerator()
            }
          </Box>

          <Box style={{height: '100%'}}>
            <Divider/>
            <Box style={{display: 'flex', alignItems: 'center', height: '100%'}} ref={conversationContainer}>
              <Box className={classes.messageTextBoxContainer}
                   style={{width: '90%', marginTop: 0, marginLeft: '1rem'}}>
                <TextField style={{width: '100%'}}
                           className={classes.searchBar}
                           value={message}
                           label="Text Some Message..."
                           onKeyPress={handleEnter}
                           onChange={handleChange}/>

              </Box>
              <Box style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton>
                  <li className='bx bx-camera'/>
                </IconButton>
                <IconButton onClick={() => handleMessage()}>
                  <li className='bx bx-send'/>
                </IconButton>

              </Box>
            </Box>
          </Box>
        </Box> :
        <EmptyScreen/>
    }
  </Box>

}
const useStyles = makeStyles(theme => {
  return {

    rootContainer: {
      width: '100%',
      height: '100vh',
    },
    conversationContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.neutral,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '0.3fr 2.3fr 0.3fr',
      gap: '0px 0px',
      gridTemplateAreas: ' . . .'

    },
    emptyConversationContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.neutral,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    },
    conversationHeaderContainer: {
      width: '100%',
      backgroundColor: theme.palette.background.neutral,
      boxShadow: theme.shadows[0],
      display: 'flex',
      padding: '1rem',
      alignItems: 'center'
    },
    conversationPlaceHolderContainer: {
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '8rem',
      filter: 'opacity(.5)'
    },
    searchContainer: {
      marginTop: '1.5rem',
      height: '3rem',
      width: '100%',
      borderRadius: '1rem',
      backgroundColor: theme.palette.background.neutral,
      boxShadow: theme.shadows[0]
    },
    messageTextBoxContainer: {
      marginTop: '1.5rem',
      borderRadius: '.5rem',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[0],
      color: theme.palette.text.secondary
    },
    searchBar: {
      border: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent'
    },
      title: {
      color: theme.palette.text.primary
    },
    subtitleLabel: {
      color: theme.palette.text.secondary
    },
    messageContainer: {
      display: 'flex',
      flexDirection: 'column',
      border: `solid .01rem  ${theme.palette.text.disabled}`,
      borderRadius: '.5rem',
      padding: '.5rem'
    }

  }
})

export default Conversation
