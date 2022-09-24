import React from 'react'
import * as S from "../../styles";
import {Link} from "react-router-dom";

type props = {

	imgSrc: string
}

export function SideBarItem(props: props) {
	return (
		<S.SideBarItem>
			<Link to={'/selection'}>
				<img src={props.imgSrc} alt="day's playlist"/>
			</Link>
		</S.SideBarItem>
	)
}