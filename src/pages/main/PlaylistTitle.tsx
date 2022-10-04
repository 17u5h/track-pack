import React, {useContext} from 'react'
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";


export function PlaylistTitle() {
	const {themeSwitcher} = useContext(ThemeContext)
	return (
		<S.PlayListTitle>
			<S.PlaylistTitleItem dark={themeSwitcher}/>
			<S.PlaylistTitleItem01>Трек</S.PlaylistTitleItem01>
			<S.PlaylistTitleItem02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleItem02>
			<S.PlaylistTitleItem03>АЛЬБОМ</S.PlaylistTitleItem03>
			<S.PlaylistTitleItem04>
				<S.PlaylistTitleIcon dark={themeSwitcher}>
					<use href={'img/icon/sprite.svg#icon-watch'}/>
				</S.PlaylistTitleIcon>
			</S.PlaylistTitleItem04>
		</S.PlayListTitle>
	)
}