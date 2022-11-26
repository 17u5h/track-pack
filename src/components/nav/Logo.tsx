import React, {useContext} from "react";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";


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