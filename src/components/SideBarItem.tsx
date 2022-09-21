import React from 'react'
import * as S from "../styles";

type props = {
	sideBarLink: string
	imgSrc: string
}

export function SideBarItem(props: props) {
	return (
		<S.SideBarItem>
			<a href={props.sideBarLink}>
				<img src={props.imgSrc} alt="day's playlist"/>
			</a>
		</S.SideBarItem>
	)
}