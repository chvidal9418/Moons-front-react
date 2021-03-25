import typography from './typography';
import palette from './palette';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import GlobalStyles from "./globalStyles";
import {useMemo} from "react";
import Shadows from "./shadows";

const borderRadius = {
  borderRadius: 8,
  borderRadiusSm: 12,
  borderRadiusMd: 16
};

const ThemeConfig = ({children}) => {
  const isDarkMode = useSelector(({global}) => global.isDarkMode)

  const theme = useMemo(() => {
    const aux = isDarkMode ? 'dark' : 'light'
    return createMuiTheme({
      palette: palette[aux],
      typography: typography,
      shape: borderRadius,
      shadows:Shadows[aux]

    })
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {children}
    </ThemeProvider>
  )
}

export default ThemeConfig
