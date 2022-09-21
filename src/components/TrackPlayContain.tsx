import React from 'react'
import * as S from "../styles";

type propsType = {
	authorLink: string
	albumLink: string
	songName: string
	songAuthor: string
}

export function TrackPlayContain(props: propsType) {
	return (
		<S.TrackPlayContain>
			<S.TrackPlayImage>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-note'}/>
				</svg>
			</S.TrackPlayImage>
			<S.TrackPlayAuthor>
				<a href={props.authorLink}>{props.songName}</a>
			</S.TrackPlayAuthor>
			<S.TrackPlayAlbum>
				<a href={props.albumLink}>{props.songAuthor}</a>
			</S.TrackPlayAlbum>
		</S.TrackPlayContain>
	)
}