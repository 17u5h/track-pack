import React, {useContext} from 'react'
import {SideBarBlock} from "./SideBarBlock";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";

type Props = {
	personalName: string
	imgSrc: string[]
}

export function SideBar(props: Props) {
	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.SideBar>
			<S.SideBarPersonal dark={themeSwitcher}>
				<p>{props.personalName}</p>
				<S.PersonalAvatar/>
				<SideBarBlock imgSrc={props.imgSrc}/>
			</S.SideBarPersonal>
		</S.SideBar>
	)
}
