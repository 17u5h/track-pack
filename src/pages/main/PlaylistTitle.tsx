import React from 'react'
import * as S from "../../styles";


export function PlaylistTitle() {
	return (
		<S.PlayListTitle>
			<S.PlaylistTitleItem/>
			<S.PlaylistTitleItem01>Трек</S.PlaylistTitleItem01>
			<S.PlaylistTitleItem02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleItem02>
			<S.PlaylistTitleItem03>АЛЬБОМ</S.PlaylistTitleItem03>
			<S.PlaylistTitleItem04>
				<S.PlaylistTitleIcon>
					<use href={'img/icon/sprite.svg#icon-watch'}/>
				</S.PlaylistTitleIcon>
			</S.PlaylistTitleItem04>
		</S.PlayListTitle>
	)
}