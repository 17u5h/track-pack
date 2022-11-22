import React from "react";
import * as S from "../../styles";
import {NavMenuLink} from "./NavMenuLink";
import {Link} from "react-router-dom";
import {ButtonToggleTheme} from "./ButtonToggleTheme";


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


