import React from 'react'
import {SideBarBlock} from "./SideBarBlock";
import * as S from "../styles";

type props = {
	personalName: string
	imgSrc: string[]
	sideBarLink: string
}

export function SideBar(props: props) {
	return (
		<S.SideBar>
			<S.SideBarPersonal>
				<p>{props.personalName}</p>
				<S.PersonalAvatar/>
				<SideBarBlock imgSrc={props.imgSrc} sideBarLink={props.sideBarLink}/>
			</S.SideBarPersonal>
		</S.SideBar>
	)
}