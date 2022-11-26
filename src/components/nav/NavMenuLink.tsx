import React from 'react'
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles"

type Props = {
  children: string
}

export const NavMenuLink = ({children}: Props) => {
  const themeSwitcher = useSelector(themeSelector)

  return(
    <S.NavMenuLink isDarkTheme={themeSwitcher}>{children}</S.NavMenuLink>
  )
}