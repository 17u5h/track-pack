import React from "react";
import {Link} from "react-router-dom";
import {NavMenuLink} from "./NavMenuLink";
import {ButtonToggleTheme} from "./ButtonToggleTheme";
import * as S from "../../styles";

export function NavMenu() {

	return (
		<S.NavMenu>
			<S.NavMenuList >
				<Link to={'/main'}><NavMenuLink >Главная</NavMenuLink></Link>
				<Link to={'/my-tracks'}><NavMenuLink>Мой плейлист</NavMenuLink></Link>
				<Link to={'/'}><NavMenuLink>Выйти</NavMenuLink></Link>
				<ButtonToggleTheme />
			</S.NavMenuList>
		</S.NavMenu>
	)
}


