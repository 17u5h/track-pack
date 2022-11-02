import React, {useState} from 'react'
import {PlaylistItem} from "./PlaylistItem";
import * as S from "../../styles";

const tracks = [
	{
		"id": "1",
		"trackTitle": "Guilt",
		"trackAuthor": "Nero",
		"trackAlbum": "Welcome Reality",
		"trackTime": "4:44",
		"imageLink": "../img/icon/sprite.svg#icon-note",
		"titleLink": "https://",
		"authorLink": "https://",
		"albumLink": "https://"
	}]


export function Playlist() {
	const [isLoading, setIsLoading] = useState(true)

	setTimeout(() => {
		setIsLoading(false)
	}, 500)

	return (
		<S.Playlist>
			{!isLoading && <PlaylistItem
				trackTitle={tracks[0].trackTitle}
				trackAuthor={tracks[0].trackAuthor}
				trackAlbum={tracks[0].trackAlbum}
				trackTime={tracks[0].trackTime}
				imageLink={tracks[0].imageLink}
				titleLink={tracks[0].titleLink}
				authorLink={tracks[0].authorLink}
				albumLink={tracks[0].albumLink}
			/>}
		</S.Playlist>
	)
}