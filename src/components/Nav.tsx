import React, {useState} from "react";
import {Logo} from "./Logo";
import {NavBurger} from "./NavBurger";
import {NavMenu} from "./NavMenu";



export function Nav() {
	const [visible, setVisible] = useState(false)
	const toggleNavMenu = () => {setVisible(!visible)}

	return (
		<div className={'main__nav nav'}>
			<Logo divClassName={'nav__logo logo'} imgClassName={'logo__image'}/>
			<NavBurger onClick={toggleNavMenu} />
			{visible && <NavMenu />}
		</div>
	)
}