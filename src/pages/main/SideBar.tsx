import React from 'react'
import {SideBarBlock} from "./SideBarBlock";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";

type Props = {
	personalName: string
}

export function SideBar(props: Props) {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.SideBar>
			<S.SideBarPersonal isDarkTheme={themeSwitcher}>
				<p>{props.personalName}</p>
				<S.PersonalAvatar/>
				<SideBarBlock/>
			</S.SideBarPersonal>
		</S.SideBar>
	)
}
