import React from "react";

type logoProps = {
	divClassName: string
	imgClassName: string
}

export function Logo(props: logoProps) {
	return (
		<div className={props.divClassName}>
			<img className={props.imgClassName} src="img/logo.png" alt="logo"/>
		</div>
	)
}