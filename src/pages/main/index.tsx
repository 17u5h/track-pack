import React from 'react'
import * as S from "../../styles"
import {Main} from "./Main"
import {Bar} from "../../components/player/Bar"

export function MainScreen(){
  return(
    <div>

      <S.Wrapper>
      	<S.Container>
      		<Main/>
      		<Bar/>
      	</S.Container>
      </S.Wrapper>
    </div>
  )
}