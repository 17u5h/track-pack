import React, {useEffect, useState} from 'react'
import {Outlet} from "react-router-dom";
import {Bar} from "./player/Bar";
import {useSelector} from "react-redux";
import {themeSelector} from "../store/selectors/themeSelector";
import * as S from "../styles";
import {Nav} from "./nav/Nav";
import {SideBar} from "../pages/main/SideBar";
import {urlPlayingTrackSelector} from "../store/selectors/playingTrackSelector";


export function Layout() {
	const themeSwitcher = useSelector(themeSelector)
	const userName = sessionStorage.getItem('userName') || ''
	const [barVisible, setBarVisible] = useState(false)
	const playingTrack = useSelector(urlPlayingTrackSelector)

	useEffect(() => {
		if (playingTrack) setBarVisible(true)
	},[playingTrack])

	return (
		<div>
			<S.Wrapper isDarkTheme={themeSwitcher}>
				<S.Container isDarkTheme={themeSwitcher}>
					<S.Main>
						<Nav/>
						<Outlet/>
						<SideBar personalName={userName}/>
					</S.Main>
				</S.Container>
			</S.Wrapper>
			{barVisible && <Bar/>}
		</div>
	)
}