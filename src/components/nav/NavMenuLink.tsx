import React from 'react'
import * as S from "../../styles"
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

type Props = {
  children: string
}

export const NavMenuLink = ({children}: Props) => {
  const themeSwitcher = useSelector(themeSelector)

  return(
    <S.NavMenuLink isDarkTheme={themeSwitcher}>{children}</S.NavMenuLink>
  )
}