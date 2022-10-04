import React, {useContext} from "react";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";


export function Logo() {
	const {themeSwitcher} = useContext(ThemeContext)

	function setLogo(){
		if (themeSwitcher){
			return "./img/logo-dark.svg"
		} else {
			return "./img/logo-light.svg"
		}
	}
	return (
		<S.Logo>
			<img src={setLogo()} alt="logo"/>
		</S.Logo>
	)
}