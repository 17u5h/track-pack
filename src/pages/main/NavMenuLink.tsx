import React from 'react'
import * as S from "./styles"

type types ={
  children: string
}

export function NavMenuLink({children}: types){
  return(
    <S.NavMenuLink>{children}</S.NavMenuLink>
  )
}