import React from 'react'
import {SideBarBlock} from "./SideBarBlock";
import * as S from "../../styles";

type Props = {
	personalName: string
	imgSrc: string[]
}

export function SideBar(props: Props) {
	return (
		<S.SideBar>
			<S.SideBarPersonal>
				<p>{props.personalName}</p>
				<S.PersonalAvatar/>
				<SideBarBlock imgSrc={props.imgSrc}/>
			</S.SideBarPersonal>
		</S.SideBar>
	)
}
