import React from 'react'
import * as S from "../../styles";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

type Props = {
	authorLink: string
	albumLink: string
	songName: string
	songAuthor: string
}

export function TrackPlayContain(props: Props) {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.TrackPlayContain>
			<S.TrackPlayImage isDarkTheme={themeSwitcher}>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-note'}/>
				</svg>
			</S.TrackPlayImage>
			<S.TrackPlayAuthor isDarkTheme={themeSwitcher}>
				<a href={props.authorLink}>{props.songName}</a>
			</S.TrackPlayAuthor>
			<S.TrackPlayAlbum isDarkTheme={themeSwitcher}>
				<a href={props.albumLink}>{props.songAuthor}</a>
			</S.TrackPlayAlbum>
		</S.TrackPlayContain>
	)
}