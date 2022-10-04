import React from "react";
import * as S from "../../styles";
import {NavMenuLink} from "./NavMenuLink";
import {Link} from "react-router-dom";
import {ButtonToggleTheme} from "./ButtonToggleTheme";


export function NavMenu() {

	return (
		<S.NavMenu>
			<S.NavMenuList >
				<NavMenuLink >Главное</NavMenuLink>
				<Link to={'/my-tracks'}><NavMenuLink>Мой плейлист</NavMenuLink></Link>
				<NavMenuLink>Войти</NavMenuLink>
				<ButtonToggleTheme />
			</S.NavMenuList>
		</S.NavMenu>
	)
}


