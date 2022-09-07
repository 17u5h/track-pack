import React from "react";
import {Logo} from "./Logo";
import {NavBurger} from "./NavBurger";
import {NavMenu} from "./NavMenu";

type mainNavProps = {
	className: string
}

export function Nav(props: mainNavProps) {
	return (
		<div className={props.className}>
			<Logo divClassName={'nav__logo logo'} imgClassName={'logo__image'}/>
			<NavBurger burgerClass={'nav__burger burger'} lineClass={'burger__line'}/>
			<NavMenu navMenuClassName={'nav__menu menu'} listClassName={'menu__list'} itemClassName={'menu__item'}
							 linkClassName={'menu__link'}/>
		</div>
	)
}