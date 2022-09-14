import React from 'react'
import {PlaylistItem} from "./PlaylistItem";


const tracks = [{
	trackTitle: 'Guilt',
	trackAuthor: 'Nero',
	trackAlbum: 'Welcome Reality',
	trackTime: '4:44',
	imageLink: '../img/icon/sprite.svg#icon-note',
	titleLink: 'https://',
	authorLink: 'https://',
	albumLink: 'https://',
}]

export function Playlist() {
	return (
		<div className={'content__playlist playlist'}>
			<PlaylistItem
				trackTitle={tracks[0].trackTitle}
				trackAuthor={tracks[0].trackAuthor}
				trackAlbum={tracks[0].trackAlbum}
				trackTime={tracks[0].trackTime}
				imageLink={tracks[0].imageLink}
				titleLink={tracks[0].titleLink}
				authorLink={tracks[0].authorLink}
				albumLink={tracks[0].albumLink}
			/>
		</div>
	)
}