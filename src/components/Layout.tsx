import React from 'react'
import {Outlet} from "react-router-dom";
import {Bar} from "./player/Bar";
import {useSelector} from "react-redux";
import {themeSelector} from "../store/selectors/themeSelector";
import * as S from "../styles";
import {Nav} from "./nav/Nav";
import {SideBar} from "../pages/main/SideBar";


export function Layout() {
	const themeSwitcher = useSelector(themeSelector)
	const userName = sessionStorage.getItem('userName') || ''


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
			<Bar/>
		</div>
	)
}