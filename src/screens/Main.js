import {Box, Divider, Hidden, IconButton, makeStyles, Typography} from "@material-ui/core"
import Logo from "../components/Logo";
import ThemeSwitch from "../components/ThemeSwitch";
import ContactsList from "./ContactsList";
import ConversationList from "./ConversationList";
import {ConversationsRouter} from "../routers";
import {useHistory} from "react-router-dom";
import {getFromLocalStorage, localStorageConstants} from "../constants/localStorage";
import {roles} from "../constants";
import {useEffect} from "react";
import useChat from "../hooks/socket";


const Main = () => {
  const classes = useStyles()
  const history = useHistory()
  const {handleContacts} = useChat()


  useEffect(() => {
    handleContacts()
  }, [])

  return (
    <Box className={classes.mainContainer}>
      {/* <Box style={{position: 'absolute'}}>
        <ThemeSwitch/>
      </Box>
*/}
      <Box className={classes.recentMessagesContainer}>
        <Box>
          <Box display={'flex'} justifyContent={'center'}>
            <Logo/>
          </Box>
          <Box className={classes.searchContainer}>

            <input className={classes.searchBar} placeholder="Search"/>
          </Box>
          {
            getFromLocalStorage(localStorageConstants.role) === roles.patient &&
            <Box>
              <Box style={{padding: '.5rem'}}>
                <Typography variant={'h6'} className={classes.subtitleLabel}>
                  My Doctors
                </Typography>
              </Box>
              <ContactsList/>
            </Box>
          }
        </Box>
        <Box style={{height: '100%', overflowY: 'auto'}}>
          <Box style={{padding: '.5rem'}}>
            <Typography variant={'h6'} className={classes.subtitleLabel}>
              My Messages
            </Typography>
          </Box>
          <ConversationList/>
        </Box>
        <Box>
          <Divider/>
          <Box style={{width: '100%', alignContent: 'center', display: 'flex', justifyContent: 'space-between'}}>
            <IconButton onClick={() => history.push('/conversations')}>
              <li className='bx bx-message'/>
            </IconButton>

            <IconButton onClick={() => history.push('/conversations/charts')}>
              <li className='bx bx-line-chart-down'/>
            </IconButton>

            <ThemeSwitch/>

            <IconButton onClick={() => history.push('/conversations/config')}>
              <li className='bx bx-cog'/>
            </IconButton>


          </Box>
        </Box>
      </Box>

      <Hidden lgDown>
        {<ConversationsRouter/>}
      </Hidden>
    </Box>
  )
}

const useStyles = makeStyles(theme => {
  return {
    mainContainer: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '0.3fr .7fr',
      gridTemplateRows: '01fr',
      gap: '0px 0px',
      gridTemplateAreas:
        ". .",
      [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: '1fr 0fr',
      }
    },
    recentMessagesContainer: {
      backgroundImage: theme.palette.gradients.primary,
      padding: '1rem',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: ' 0.6fr 1.2fr',
      height: '100%',
      overflowY: 'auto',
      [theme.breakpoints.down('lg')]: {
        gridTemplateRows: ' 0.6fr 1.1fr 0.1fr',
      }
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
    conversationContainer: {
      backgroundColor: theme.palette.background.neutral,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '0.3fr 2.4fr 0.3fr',
      gap: '0px 0px',
      gridTemplateAreas: ' . . .'
    },
    conversationHeaderContainer: {
      width: '100%',
      height: '100%',
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
      height: '3rem',
      width: '100%',
      borderRadius: '1rem',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[0],
      color: theme.palette.text.secondary
    },
    searchBar: {

      padding: '1.5rem',
      border: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent'
    },
    contactsContainer: {
      width: '27vw',
      overflowX: 'auto',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      height: '8rem',
      [theme.breakpoints.down('lg')]: {
        width: '90vw'
      }
    },
    contactLabel: {
      color: theme.palette.text.primary
    },
    subtitleLabel: {
      color: theme.palette.text.secondary
    },
    logo: {
      fill: theme.palette.text.secondary
    }
  }
})
export default Main
