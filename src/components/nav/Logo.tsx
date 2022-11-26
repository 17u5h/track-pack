import React from "react";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";

export function Logo() {
	const themeSwitcher = useSelector(themeSelector)

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