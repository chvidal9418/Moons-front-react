import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import {ReactComponent as LogoAsset} from '../assets/moons.svg';


function Logo({className, ...other}) {
  const classes = useStyles()
  return (
    <LogoAsset className={classes.logo}/>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      fill: theme.palette.text.secondary
    }
  }
})
export default Logo;
