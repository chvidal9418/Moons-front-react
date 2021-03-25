import {Badge, Box, Divider, ListItem, makeStyles, Typography} from "@material-ui/core";
import {useState} from "react";
import {v4 as idV4} from 'uuid'
import {setActualConversation} from "../redux/global";
import {useDispatch, useSelector} from "react-redux";
import doctor1 from "../assets/Dr. Yair Zyman.png";
import doctor2 from "../assets/Dra. Nayeli Ugalde.png";
import doctor3 from "../assets/Dra. Gloria Saravia.png";
import doctor4 from "../assets/Dr. Christian García.png";
import doctor5 from "../assets/Dra. Daniela Gutierrez.png";
import userPhoto from "../assets/user.png";
import {getFromLocalStorage, localStorageConstants} from "../constants/localStorage";

const photosArray = [doctor1, doctor2, doctor3, doctor4, doctor5]

const ConversationTile = ({conversation, selected, onClick}) => {

  const classes = useStyle()
  const [isSelected, setSelected] = useState(false)
  const dispatch = useDispatch()
  const [contacts] = useState(useSelector(({global}) => global.contacts))
  const username = getFromLocalStorage(localStorageConstants.user)


  const handleConversationClick = (conversation) => {
    setActualConversation({dispatch, actualConversation: conversation})
  }

  const findColor = (contact) => {
    return contacts.find(el => el.name === contact) || '#D0F7E7'
  }

  const findPhoto = (contact) => {
    let photo
    if (contact.sender === username)
      photo = photosArray[contacts.findIndex(el => el.name === contact.receiver)]
    else photo = userPhoto
    return photo
  }

  const handleClick = () => {
    handleConversationClick(conversation)

    onClick(conversation)
  }

  function findName(contact) {

    return contact.sender === username ? contact.receiver : contact.creator
  }

  return (
    <ListItem button selected={isSelected} onClick={handleClick}>
      <Box className={classes.rootContainer}>
        <Box className={classes.bodyContainer}>
          <Box className={classes.photoContainer}>
            <Box style={{
              border: `solid .2rem ${findColor(conversation.receiver).color}`,
              borderRadius: '50%',
              width: 64,
              height: 64,
              margin: '.2rem .6rem '
            }}>
              <img src={findPhoto(conversation)} alt='profilePhoto'/>
            </Box>
          </Box>
          <Box className={classes.messageContainer}>
            <Typography variant={'body1'} className={classes.titleLabel}>
              {
                findName(conversation)
              }
            </Typography>
            {
              conversation.lastMessage &&
              <Typography variant={'body2'} className={classes.descriptionLabel}>
                {
                  conversation.lastMessage.content
                }
              </Typography>
            }
          </Box>
          <Box className={classes.messageDetailContainer}>
            <Typography variant={'caption'} className={classes.descriptionLabel}>
              {conversation.creationDate}
            </Typography>
            {
              conversation.messages.length > 0 &&
              <Box className={classes.badgeContainer}>
                <Typography className={classes.badgeLabel}>
                  {conversation.messages.length}
                </Typography>
              </Box>
            }
          </Box>
        </Box>
        <Divider/>
      </Box>
    </ListItem>
  )
}
const useStyle = makeStyles((theme) => {
  return {
    rootContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    bodyContainer: {
      margin: '1rem 0',
      display: 'flex',
      width: '100%'
    },
    photoContainer: {},
    messageContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '66.6%'
    },
    messageDetailContainer: {
      width: '16.6%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    titleLabel: {
      color: theme.palette.text.primary
    },
    descriptionLabel: {
      color: theme.palette.text.secondary
    },
    badgeContainer: {
      border: `solid .05rem ${theme.palette.text.secondary}`,
      borderRadius: '50%',
      width: '1.5rem',
      height: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    badgeLabel: {
      color: theme.palette.text.secondary,
    }
  }
})
export default ConversationTile
