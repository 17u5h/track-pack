import React, {useContext} from "react";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";


type Props = {
	onClick: () => void
}

export function NavBurger(props: Props) {
	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.NavBurger onClick={props.onClick}>
			<S.BurgerLine dark={themeSwitcher}/>
			<S.BurgerLine dark={themeSwitcher}/>
			<S.BurgerLine dark={themeSwitcher}/>
		</S.NavBurger>
	)
}