import {Box, Grow, Hidden, makeStyles, Slide} from "@material-ui/core"
import slide from '../../assets/slide.svg'
import Logo from "../../components/Logo";
import {useState} from "react";
import {EnrolmentRouter} from "../../routers";

const Enrolment = () => {
  const classes = useStyles()
  const [isNavVisible] = useState(true)
  const [isuserConfigVisible] = useState(true)

  return <Box className={classes.rootContainer}>
    <Slide direction="right" mountOnEnter unmountOnExit in={isNavVisible}>
      <Box className={classes.sliderContainer}>
        <Box style={{margin: '3rem 0'}}>
          <Logo/>
        </Box>
        <Hidden lgDown>
          <img src={slide} style={{marginBottom: '8rem'}}/>
        </Hidden>
      </Box>
    </Slide>
    <Grow in={isuserConfigVisible}>
      <Box className={classes.userConfigContainer}>
        <EnrolmentRouter/>
      </Box>
    </Grow>

  </Box>
}

const useStyles = makeStyles((theme) => {
    return {
      rootContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        position: 'absolute',
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'column'
        }
      },
      sliderContainer: {
        width: '35%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('lg')]: {
          flexDirection: 'row',
          height: '20%',
          width: '100%',
        }
      },
      userConfigContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: theme.palette.background.neutral,
        [theme.breakpoints.down('lg')]: {
          height: '100%',
        }
      },
      descriptionLabel: {
        color: theme.palette.text.disabled
      }
    }
  }
)

export default Enrolment
