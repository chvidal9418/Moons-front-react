import useChat from "../hooks/socket";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import doctor1 from "../assets/Dr. Yair Zyman.png";
import doctor2 from "../assets/Dra. Nayeli Ugalde.png";
import doctor3 from "../assets/Dra. Gloria Saravia.png";
import doctor4 from "../assets/Dr. Christian García.png";
import doctor5 from "../assets/Dra. Daniela Gutierrez.png";
import {v4 as idV4} from "uuid";
import {getFromLocalStorage, localStorageConstants} from "../constants/localStorage";

const photosArray = [doctor1, doctor2, doctor3, doctor4, doctor5]


const ContactsList = () => {
  const classes = useStyles()
  const contacts = useSelector(({global}) => global.contacts)

  const user = getFromLocalStorage(localStorageConstants.user)

  const {handleContacts, handleCreateChat, handleSendMessage} = useChat()

  useEffect(() => {
    handleContacts()
  }, [])

  const handleContactClick = (contact) => {
    handleCreateChat({receiver: contact.name})
  }


  return <Box className={classes.contactsContainer}>
    {contacts.map((contact, index) =>
      <Box style={{flexDirection: 'column'}} onClick={() => handleContactClick(contact)} key={idV4()}>
        <Box className={classes.avatarContainer} style={{border: `solid .2rem ${contact.color}`}}>
          <img src={photosArray[index]} alt='profilePhoto'/>
        </Box>
        <Box style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '5rem'}}>
          <Typography variant={'body1'} className={classes.contactLabel}>
            {contact.name}
          </Typography>
        </Box>
      </Box>
    )}
  </Box>
}
const useStyles = makeStyles(theme => {
  return {

    contactsContainer: {
      width: '25vw',
      overflowX: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('lg')]: {
        width: '90vw'
      }
    },
    avatarContainer: {
      borderRadius: '50%',
      width: 64,
      height: 64,
      margin: '.2rem .8rem ',
      "&:hover": {
        cursor: 'pointer',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50%'
      }
    },
    contactLabel: {
      color: theme.palette.text.primary
    },
  }
})
export default ContactsList
