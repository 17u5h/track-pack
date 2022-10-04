import React, {useContext} from 'react'
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";



export function ButtonToggleTheme(){
  const {themeSwitcher, toggleTheme} = useContext(ThemeContext)

  return(
    <S.ButtonToggleTheme dark={themeSwitcher} onClick={toggleTheme}/>
  )
}