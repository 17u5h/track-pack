import React from 'react'
import {CentralBlockSearch} from "../main/CentralBlockSearch";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {PlaylistTitle} from "../main/PlaylistTitle";
import {FavoritePlaylist} from "./FavoritePlaylist";
import * as S from "../../styles";

export function MyTracksScreen(){
  const themeSwitcher = useSelector(themeSelector)

  return(
    <S.CentralBlock>
      <CentralBlockSearch/>
      <S.CentralBlockTitle isDarkTheme={themeSwitcher}>Мои треки</S.CentralBlockTitle>
      <S.CentralBlockContent>
        <PlaylistTitle/>
        <FavoritePlaylist/>
      </S.CentralBlockContent>
    </S.CentralBlock>
  )
}