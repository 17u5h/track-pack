import React, {useContext} from 'react'
import * as S from '../../styles'
import {ThemeContext} from "../../contexts/theme";

type Props = {
  handleClick: () => void
}

export function PauseButton(props: Props){
  const {themeSwitcher} = useContext(ThemeContext)

  return(
    <button style={{background:'transparent', border:"none"}}  onClick={() => props.handleClick()}>
      <S.PlayerButtonPlayPause dark={themeSwitcher}>
        <svg >
          <use href='../img/icon/sprite.svg#icon-pause'/>
        </svg>
      </S.PlayerButtonPlayPause>
    </button>
  )
}