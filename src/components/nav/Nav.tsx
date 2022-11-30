import React, {useState} from "react";
import {Logo} from "./Logo";
import {NavBurger} from "./NavBurger";
import {NavMenu} from "./NavMenu";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";

export function Nav() {
	const [visible, setVisible] = useState(false)
	const toggleNavMenu = () => {setVisible(!visible)}

	const themeSwitcher = useSelector(themeSelector)


	return (
		<S.Nav isDarkTheme={themeSwitcher}>
			<Logo />
			<NavBurger onClick={toggleNavMenu} />
			{visible && <NavMenu />}
		</S.Nav>
	)
}