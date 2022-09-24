import styled, {createGlobalStyle} from "styled-components";

export const LoginBackground = createGlobalStyle`
body{
  background: #313131;
  display: flex;
  justify-content: center;
  align-items: center;
	height: 100vh;
}
`

export const Login = styled.div`
	background: #fff;
	width: 366px;
	height: 440px;
	border-radius: 12px;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
	input{
		width: 278px;
		height: 40px;
		border: none;
		outline: none;
		border-bottom: 1px solid #D0CECE;
    font-size: 24px;
    line-height: 24px;
    color: #313131;
		::placeholder{
      font-size: 18px;
      line-height: 24px;
			color: #D0CECE;
		}
	}
`

export const Logo = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	width: 142px;
	height: 21px;
	background: url("/img/login-logo.svg") no-repeat center;
	background-size: cover;
`
export const EnterButton = styled.button`
	width: 278px;
	height: 52px;
	font-size: 18px;
	line-height: 24px;
	border-radius: 6px;
	border: none;
	color: #fff;
	background-color: #580EA2;
	margin: 30px 0 0 0;
	transition: background-color .1s;
	:hover{
		background-color: #AD61FF;
	}
	:active{
		transform: scale(0.98);
	}
`
export const RegisterButton = styled(EnterButton)`
  color: #000;
  background-color: #fff;
	border: 1px solid #D0CECE;
	margin: 0 0 20px 0;
	:hover{
    background-color: #D9B6FF;
	}
`

