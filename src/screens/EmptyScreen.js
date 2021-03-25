import {Box, makeStyles, Typography} from "@material-ui/core";
import apple from "../assets/apple.svg";

const EmptyScreen = () => {
  const classes = useStyles()

  return <Box className={classes.emptyConversationContainer}>
    <Box style={{
      filter: 'grayscale(1) opacity(.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img src={apple} style={{width: '24rem', height: '24rem'}}/>
      <Typography variant={'body1'} style={{fontSize: '2em'}} className={classes.title}>
        there seems to be nothing to show...
      </Typography>
    </Box>
  </Box>
}

const useStyles = makeStyles(theme => {
  return {
    emptyConversationContainer: {
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
    },
  }
})

export default EmptyScreen
