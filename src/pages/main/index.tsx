import React from 'react'
import * as S from "../../styles"
import {Main} from "./Main"
import {Bar} from "../../components/player/Bar"
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

export function MainScreen() {

	const themeSwitcher = useSelector(themeSelector)

	return (
			<S.Wrapper isDarkTheme={themeSwitcher}>
				<S.Container isDarkTheme={themeSwitcher}>
					<Main/>
					<Bar/>
				</S.Container>
			</S.Wrapper>
	)
}