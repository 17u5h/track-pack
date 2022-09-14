import React from "react";

type props={
	onClick: () => void
}

export function NavBurger(props: props) {
	return (
		<div className={'nav__burger burger'} onClick={props.onClick}>
			<span className={'burger__line'}></span>
			<span className={'burger__line'}></span>
			<span className={'burger__line'}></span>
		</div>
	)
}