import React from "react";
import {Box, Icon, IconButton, makeStyles, SvgIcon, Typography} from "@material-ui/core";
import homeIcon from '../assets/home.svg'
import moneyIcon from '../assets/money.svg'
import cardIcon from '../assets/credit-card.svg'
import starIcon from '../assets/star.svg'
import bellIcon from '../assets/bell.svg'

const Home = () => {

  let icons = [moneyIcon, cardIcon, starIcon, bellIcon]

  const classes = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <Box style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <Box className={classes.gradientContainer}>

        </Box>
        <Box className={classes.headerContainer}>

          <Box className={classes.userInfoContainer}>
            <Typography>
              HOLA JOSE
            </Typography>
          </Box>
          <Box className={classes.balanceContainer}>

          </Box>
          <Box className={classes.optionsContainer}>

          </Box>
        </Box>

      </Box>
      <Box className={classes.menuContainer}>
        {
          icons.map((icon) => <Box>
              <IconButton>
                <Box style={{width: 24, height: 24}}>
                  <img src={icon}/>
                </Box>
              </IconButton>
            </Box>
          )
        }
      </Box>
    </Box>
  )
}
const useStyles = makeStyles((theme) => {
  return {
    mainContainer: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      overflowY: 'auto',
    },
    gradientContainer: {
      top: 0,
      position: 'absolute',
      width: '100%',
      height: '34%',
      backgroundImage: 'linear-gradient(to top, rgba(34, 168, 210, 0.2) 5%, rgba(255, 255, 255, 0) )'
    },
    headerContainer: {

      height: '57%',
      width: '100%',
      top: '0',
      position: 'absolute',
      marginTop: '10%'

    },
    movementsContainer: {
      height: '100%',
      backgroundColor: 'blue'
    },
    optionsContainer: {
      height: '116px',
      backgroundColor: '#783183'
    },
    menuContainer: {
      padding: 20,
      color: '#1ca1cb',
      position: 'absolute',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      bottom: 0,
      height: '10%',
      backgroundColor: 'white',
      border: 'solid 0.5px rgba(9, 22, 31, 0.3)',
      borderRadius: '1rem 1rem 0 0'
    },
    balanceContainer: {
      width: '100%',
      height: 86,
      borderRadius: 4,
      boxShadow: '0 1px 9px 0 rgba(56, 56, 56, 0.2)',
      backgroundImage: 'linear-gradient(to bottom, #fefefe, #ffffff)'
    },
    userInfoContainer: {
      display: 'flex',
      width: '100%'
    }
  }
})

export default Home
