import React, {useContext, useState} from "react";
import {Logo} from "./Logo";
import {NavBurger} from "./NavBurger";
import {NavMenu} from "./NavMenu";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";

export function Nav() {
	const [visible, setVisible] = useState(false)
	const toggleNavMenu = () => {setVisible(!visible)}

	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.Nav dark={themeSwitcher}>
			<Logo />
			<NavBurger onClick={toggleNavMenu} />
			{visible && <NavMenu />}
		</S.Nav>
	)
}