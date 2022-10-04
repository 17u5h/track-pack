import React, {useState} from 'react'
import * as S from "../../styles"
import {Main} from "./Main"
import {Bar} from "../../components/player/Bar"
import {ThemeContext} from "../../contexts/theme";

export function MainScreen(){
	const [themeSwitcher, setThemeSwitcher] = useState(true)

	function toggleTheme(){setThemeSwitcher(!themeSwitcher)}



  return(
    <ThemeContext.Provider value={{themeSwitcher:themeSwitcher, toggleTheme}}>

      <S.Wrapper dark={themeSwitcher}>
      	<S.Container dark={themeSwitcher}>
      		<Main/>
      		<Bar/>
      	</S.Container>
      </S.Wrapper>
    </ThemeContext.Provider>
  )
}