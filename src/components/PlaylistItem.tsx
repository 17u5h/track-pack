import React from 'react'
import * as S from "../styles"


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
	return (
		<S.PlaylistItem>
			<S.PlaylistTrack>
				<S.TrackTitle>
					<S.TrackTitleImage>
						<svg>
							<use href={props.imageLink}/>
						</svg>
					</S.TrackTitleImage>
					<S.TrackTitleText>
						<a href={props.titleLink}>
							{props.trackTitle}
						</a>
						<span></span>
					</S.TrackTitleText>
				</S.TrackTitle>
				<S.TrackAuthor>
					<a href={props.authorLink}>
						{props.trackAuthor}
					</a>
				</S.TrackAuthor>
				<S.TrackAlbum>
					<a href={props.albumLink}>
						{props.trackAlbum}
					</a>
				</S.TrackAlbum>
				<S.TrackTime>
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