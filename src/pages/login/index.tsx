import React, {useState} from 'react'
import {GlobalStyle} from "../../styles";
import {LoginBackground} from "./styles";
import * as S from "./styles"
import {Link} from "react-router-dom";


export function Login(){

  function validateLogin(){
    if (!localStorage['isLogin']){
      localStorage['isLogin'] = 'passed'
    }
  }
  return(
    <>
      <GlobalStyle/>
      <LoginBackground/>
      <S.Login>
        <S.Logo/>
        <input placeholder={'Логин (Оставьте поля пустыми)'}/>
        <input placeholder={'Пароль (И нажмите "войти")'}/>

        <Link to={'/main'} onClick={validateLogin}><S.EnterButton>Войти</S.EnterButton></Link>
        <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
      </S.Login>
    </>
  )
}