import React from "react";
import * as S from "../styles";


type props = {
	onClick: () => void
}

export function NavBurger(props: props) {
	return (
		<S.NavBurger onClick={props.onClick}>
			<S.BurgerLine/>
			<S.BurgerLine/>
			<S.BurgerLine/>
		</S.NavBurger>
	)
}