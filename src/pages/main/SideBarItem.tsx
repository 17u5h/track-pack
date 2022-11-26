import React from 'react'
import * as S from "../../styles";

type Props = {
	imgSrc: string
}

export function SideBarItem(props: Props) {
	return (
		<S.SideBarItem>
				<img src={props.imgSrc} alt="day's playlist"/>
		</S.SideBarItem>
	)
}