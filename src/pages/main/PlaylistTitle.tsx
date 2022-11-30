import React from 'react'
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";

export function PlaylistTitle() {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.PlayListTitle>
			<S.PlaylistTitleItem isDarkTheme={themeSwitcher}/>
			<S.PlaylistTitleItem01>Трек</S.PlaylistTitleItem01>
			<S.PlaylistTitleItem02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleItem02>
			<S.PlaylistTitleItem03>АЛЬБОМ</S.PlaylistTitleItem03>
			<S.PlaylistTitleItem04>
				<S.PlaylistTitleIcon isDarkTheme={themeSwitcher}>
					<use href={'img/icon/sprite.svg#icon-watch'}/>
				</S.PlaylistTitleIcon>
			</S.PlaylistTitleItem04>
		</S.PlayListTitle>
	)
}