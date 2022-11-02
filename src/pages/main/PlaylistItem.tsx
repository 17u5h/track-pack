import React from 'react'
import * as S from "../../styles"
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";


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
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.PlaylistItem>
			<S.PlaylistTrack>
				<S.TrackTitle>
					<S.TrackTitleImage isDarkTheme={themeSwitcher}>
						<svg>
							<use href={props.imageLink}/>
						</svg>
					</S.TrackTitleImage>
					<S.TrackTitleText isDarkTheme={themeSwitcher}>
						<a href={props.titleLink}>
							{props.trackTitle}
						</a>
						<span></span>
					</S.TrackTitleText>
				</S.TrackTitle>
				<S.TrackAuthor isDarkTheme={themeSwitcher}>
					<a href={props.authorLink}>
						{props.trackAuthor}
					</a>
				</S.TrackAuthor>
				<S.TrackAlbum isDarkTheme={themeSwitcher}>
					<a href={props.albumLink}>
						{props.trackAlbum}
					</a>
				</S.TrackAlbum>
				<S.TrackTime isDarkTheme={themeSwitcher}>
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