import React from 'react'
import {SideBarBlock} from "./SideBarBlock";
import * as S from "../../styles";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

type Props = {
	personalName: string
	imgSrc: string[]
}

export function SideBar(props: Props) {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.SideBar>
			<S.SideBarPersonal isDarkTheme={themeSwitcher}>
				<p>{props.personalName}</p>
				<S.PersonalAvatar/>
				<SideBarBlock imgSrc={props.imgSrc}/>
			</S.SideBarPersonal>
		</S.SideBar>
	)
}
