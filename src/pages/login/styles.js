import styled, {createGlobalStyle} from "styled-components";

export const LoginBackground = createGlobalStyle`
  body {
    background: #313131;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

export const Login = styled.div`
	position: relative;
  background: #fff;
  width: 366px;
  height: 480px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
	gap: 30px;

  input {
    width: 278px;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 1px solid #D0CECE;
    font-size: 24px;
    line-height: 24px;
    color: #313131;
		

    ::placeholder {
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
  margin-top: 30px;

  :hover {
    background-color: #3F007D;
  }

  :active {
    background-color: #1e053b;
  }

  :disabled {
    background-color: #b4b3b3;

  }
`
export const RegisterButton = styled(EnterButton)`
  color: #000;
  background-color: #fff;
  border: 1px solid #D0CECE;
  margin: 0 0 20px 0;

  :hover {
    background-color: #D0CECE;
  }
	:active{
    background-color: #D9D9D9;
  }
`
export const LoginError = styled.div`
  position: absolute;
  margin-top: 50px;
  color: #a21919;
	font-weight: 600;
`
export const PasswordError = styled.div`
  position: absolute;
	margin-top: 70px;
	color: #a21919;
  font-weight: 600;
`
export const LoadingSpinner = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  border: 8px solid #807bc9;
  border-top: 8px solid #231bab;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

