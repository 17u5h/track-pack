import React from "react";
import * as S from "../../styles";


type Props = {
	onClick: () => void
}

export function NavBurger(props: Props) {
	return (
		<S.NavBurger onClick={props.onClick}>
			<S.BurgerLine/>
			<S.BurgerLine/>
			<S.BurgerLine/>
		</S.NavBurger>
	)
}