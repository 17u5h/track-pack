import React, {useContext} from 'react'
import * as S from "../../styles"
import {ThemeContext} from "../../contexts/theme";

type Props = {
  children: string
}

export const NavMenuLink = ({children}: Props) => {
  const {themeSwitcher} = useContext(ThemeContext)

  return(
    <S.NavMenuLink dark={themeSwitcher}>{children}</S.NavMenuLink>
  )
}