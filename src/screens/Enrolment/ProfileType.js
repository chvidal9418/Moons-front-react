import {Box, FormControl, IconButton, InputLabel, makeStyles, Select, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useState} from "react";

const ProfileType = () => {
  const history = useHistory()
  const classes = useStyles();
  const [state, setState] = useState({
    role: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  const handleNextClick = () => {
    if (state.role === '')
      alert('You must provide a role')
    else {
      if (state.role === 'Doctor')
        history.push('enrolment/configDoctorRole')
      else
        history.push('enrolment/configUserName')
    }
  }

  return (
    <Box className={classes.rootContainer}>
      <Typography variant={'h3'} className={classes.descriptionLabel}>
        Hi 🖐 !
      </Typography>
      <Box className={classes.userNameContainer}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Tell me... what type of user are you?</InputLabel>
          <Select
            native
            value={state.role}
            onChange={handleChange}
            label="Tell me... what type of user are you?"
            inputProps={{
              name: 'role',
              id: 'outlined-age-native-simple',
            }}

          >
            <option aria-label="None"/>
            <option value={'Doctor'}>Doctor</option>
            <option value={'Paciente'}>Paciente</option>
          </Select>
        </FormControl>
      </Box>
      <Box style={{width: 64, height: 64, alignSelf: 'flex-end'}} onClick={handleNextClick}>
        <IconButton>
          <li className='bx bx-right-arrow-alt'/>
        </IconButton>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-3rem'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  userNameContainer: {
    width: '24vw',
    [theme.breakpoints.down('lg')]: {
      width: '80vw'
    }
  },
  descriptionLabel: {
    color: theme.palette.text.primary
  }
}));
export default ProfileType
