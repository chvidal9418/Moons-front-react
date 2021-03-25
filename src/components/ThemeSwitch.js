import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Box, IconButton} from "@material-ui/core";
import {setDarkMode} from "../redux/global";


const ThemeSwitch = () => {
  const dispatch = useDispatch()

  const [isDarkMode, setIsDarkMode] = useState(useSelector(({global}) => global.isDarkMode))

  const handlerChangeDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setDarkMode({dispatch, darkMode: !isDarkMode})
  }
  return (
    <Box>
      <IconButton onClick={handlerChangeDarkMode}>
        <i className={`bx bx-${isDarkMode?'sun':'moon'}`}/>
      </IconButton>
    </Box>
  )
}

export default ThemeSwitch
