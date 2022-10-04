import React, {useContext} from 'react'
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";

type Props = {
	authorLink: string
	albumLink: string
	songName: string
	songAuthor: string
}

export function TrackPlayContain(props: Props) {
	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.TrackPlayContain>
			<S.TrackPlayImage dark={themeSwitcher}>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-note'}/>
				</svg>
			</S.TrackPlayImage>
			<S.TrackPlayAuthor dark={themeSwitcher}>
				<a href={props.authorLink}>{props.songName}</a>
			</S.TrackPlayAuthor>
			<S.TrackPlayAlbum dark={themeSwitcher}>
				<a href={props.albumLink}>{props.songAuthor}</a>
			</S.TrackPlayAlbum>
		</S.TrackPlayContain>
	)
}