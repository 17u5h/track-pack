import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {toggleDarkTheme, toggleLightTheme} from "../../store/actions/creators/theme";
import * as S from "../../styles";


export function ButtonToggleTheme(){
  const themeSwitcher = useSelector(themeSelector)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    themeSwitcher ? dispatch(toggleLightTheme()) : dispatch(toggleDarkTheme())
  }

  return(
    <S.ButtonToggleTheme isDarkTheme={themeSwitcher} onClick={toggleTheme}/>
  )
}