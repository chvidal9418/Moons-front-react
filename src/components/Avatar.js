import {Box, makeStyles, Typography} from "@material-ui/core";

const Avatar = ({photo, url, color, label,size}) => {
  const classes = useStyles()

  return (
    <Box className={classes.avatarContainer} style={{
      width: size?size.width:64,
      height: size?size.width:64,
      border: `solid .2rem ${color}`, display: 'flex', flexDirection: 'column',
    }}>


      <img src={url || photo} alt='avatar'/>
      {
        label &&
        <Typography variant={'body1'}>
          {label}
        </Typography>
      }
    </Box>
  )
}

const useStyles = makeStyles((theme) => {
  return {
    avatarContainer: {
      borderRadius: '50%',

      margin: '.2rem .6rem ',
      transition:'all .25s',
      "&:hover":{
        cursor:'pointer',
        width: 80,
        height: 80,
        transition:'all .25s',
      }
    }
  }
})
export default Avatar
