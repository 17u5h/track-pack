import React from 'react'
import * as S from "./styles"

type Props = {
  children: string
}

export const NavMenuLink = ({children}: Props) => {
  return(
    <S.NavMenuLink>{children}</S.NavMenuLink>
  )
}