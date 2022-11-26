import React from "react";
import * as S from "../../styles";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";


type Props = {
	onClick: () => void
}

export function NavBurger(props: Props) {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.NavBurger onClick={props.onClick}>
			<S.BurgerLine isDarkTheme={themeSwitcher}/>
			<S.BurgerLine isDarkTheme={themeSwitcher}/>
			<S.BurgerLine isDarkTheme={themeSwitcher}/>
		</S.NavBurger>
	)
}