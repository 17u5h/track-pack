import React from 'react'
import * as S from "../../styles";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

function PlaylistItemSkeleton(){
  const themeSwitcher = useSelector(themeSelector)

  return(
    <S.PlaylistItemSkeleton>
      <S.TrackTitleImageSkeleton isDarkTheme={themeSwitcher}/>
      <S.TrackTitleSkeleton isDarkTheme={themeSwitcher}/>
      <S.TrackAuthorSkeleton isDarkTheme={themeSwitcher}/>
      <S.TrackAlbumSkeleton isDarkTheme={themeSwitcher}/>
    </S.PlaylistItemSkeleton>
  )
}

export function PlaylistItemSkeletons(){
  const numberOfSkeletons = 10
  const arrayOfKeysForSkeleton = []
  for (let i=0; i<numberOfSkeletons; i++){
    arrayOfKeysForSkeleton.push(i)
  }
  return(
    <>
      {arrayOfKeysForSkeleton.map(el => <PlaylistItemSkeleton key={el}/>)}
    </>
  )
}