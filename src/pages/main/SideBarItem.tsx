import React from 'react'
import * as S from "../../styles";
import {Link} from "react-router-dom";

type Props = {

	imgSrc: string
}

export function SideBarItem(props: Props) {
	return (
		<S.SideBarItem>
			<Link to={'/selection'}>
				<img src={props.imgSrc} alt="day's playlist"/>
			</Link>
		</S.SideBarItem>
	)
}