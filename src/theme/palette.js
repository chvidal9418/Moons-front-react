import { alpha } from '@material-ui/core/styles';

function createGradient(color1, color2) {
  return `linear-gradient(to top, ${color1}, ${color2} )`;
}


// Setup Colors
const PRIMARY = {
  lighter: '#EBF0FF',
  light: 'rgba(23,67,204,.6)',
  main: '#1743CC',
  dark: '#165fcb',
  darker: '#003152'
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#F7EFFE',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A'
};


const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};

const DARKGRADIENTS = {
  primary: createGradient('#343447', '#16162C'),
};
const LIGHTGRADIENTS = {
  primary: createGradient('#fff', '#fff'),
};

const Palette = {
  // LIGHT
  light: {
    mode: 'light',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff'
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff'
    },


    grey: GREY,
    gradients:LIGHTGRADIENTS,


    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500]
    },

    divider: GREY[500_24],

    background: {
      paper: '#fff',
      default: '#EBEBEC',
      neutral: '#f9f9f9'
    },

    action: {
      active: GREY[600],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: '#f9fcfd',
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
    }
  },

  // DARK
  dark: {
    mode: 'dark',
    primary: {
      lighter: PRIMARY.lighter,
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
      darker: PRIMARY.darker,
      contrastText: '#fff'
    },
    secondary: {
      lighter: SECONDARY.lighter,
      light: SECONDARY.light,
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      darker: SECONDARY.darker,
      contrastText: '#fff'
    },
    grey: GREY,
    gradients:DARKGRADIENTS,
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(235,227,243,1)',
      disabled: 'rgba(235,227,243,.6)'
    },

    divider: GREY[500_24],

    background: {
      paper: '#16162C',
      default: '#2E2E42',
      neutral: '#343447'
    },

    action: {
      active: GREY[500],
      hover: GREY[500_8],
      selected: GREY[500_16],
      disabled: GREY[500_80],
      disabledBackground: GREY[500_24],
      focus: GREY[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48
    }
  }
};

export default Palette;
