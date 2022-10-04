import React, {useContext} from 'react'
import * as S from "../../styles"
import {ThemeContext} from "../../contexts/theme";


type itemProps = {
	trackTitle?: string
	trackAuthor?: string
	trackAlbum?: string
	trackTime?: string
	imageLink: string
	titleLink?: string
	authorLink?: string
	albumLink?: string
}

export function PlaylistItem(props: itemProps) {
	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.PlaylistItem>
			<S.PlaylistTrack>
				<S.TrackTitle>
					<S.TrackTitleImage dark={themeSwitcher}>
						<svg>
							<use href={props.imageLink}/>
						</svg>
					</S.TrackTitleImage>
					<S.TrackTitleText dark={themeSwitcher}>
						<a href={props.titleLink}>
							{props.trackTitle}
						</a>
						<span></span>
					</S.TrackTitleText>
				</S.TrackTitle>
				<S.TrackAuthor dark={themeSwitcher}>
					<a href={props.authorLink}>
						{props.trackAuthor}
					</a>
				</S.TrackAuthor>
				<S.TrackAlbum dark={themeSwitcher}>
					<a href={props.albumLink}>
						{props.trackAlbum}
					</a>
				</S.TrackAlbum>
				<S.TrackTime dark={themeSwitcher}>
					<svg>
						<use href={'../img/icon/sprite.svg#icon-like'}/>
					</svg>
					<span>
						{props.trackTime}
					</span>
				</S.TrackTime>
			</S.PlaylistTrack>
		</S.PlaylistItem>
	)
}