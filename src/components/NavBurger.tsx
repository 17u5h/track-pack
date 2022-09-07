import React from "react";

type burgerProps = {
	burgerClass: string
	lineClass: string
}

export function NavBurger(props: burgerProps) {
	return (
		<div className={props.burgerClass}>
			<span className={props.lineClass}></span>
			<span className={props.lineClass}></span>
			<span className={props.lineClass}></span>
		</div>
	)
}