import React, {useState} from "react";
import {Logo} from "./Logo";
import {NavBurger} from "./NavBurger";
import {NavMenu} from "./NavMenu";
import * as S from "../styles";

export function Nav() {
	const [visible, setVisible] = useState(false)
	const toggleNavMenu = () => {setVisible(!visible)}

	return (
		<S.Nav>
			<Logo />
			<NavBurger onClick={toggleNavMenu} />
			{visible && <NavMenu />}
		</S.Nav>
	)
}