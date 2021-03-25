import {Box, Fade, Grow, makeStyles} from "@material-ui/core";
import ThemeSwitch from "../components/ThemeSwitch";
import Logo from "../components/Logo";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
const Launcher = () => {
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    setTimeout(()=> history.push('enrolment'),2500)
  });


  return (
    <Box className={classes.rootContainer}>
      <Fade>
        <Logo/>
      </Fade>
    </Box>
  )
}

const useStyles = makeStyles((theme) => {
  return {
    rootContainer:{
      width:'100%',
      height:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: theme.palette.background.paper
    },
    logo:{
      fill:theme.palette.text.secondary
    }
  }
})
export default Launcher
