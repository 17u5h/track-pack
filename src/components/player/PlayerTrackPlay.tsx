import React from 'react'
import {TrackPlayContain} from "../../pages/main/TrackPlayContain";
import {TrackPlayLikeDislike} from "../../pages/main/TrackPlayLikeDislike";
import * as S from "../../styles";

export function PlayerTrackPlay() {
	const trackInformation = {
		authorLink: 'https://',
		albumLink: 'https://',
		songName: 'Bicycle Race',
		songAuthor: 'Queen'
	}
	return (
		<S.TrackPlay>
			<TrackPlayContain
				authorLink={trackInformation.authorLink}
				albumLink={trackInformation.albumLink}
				songName={trackInformation.songName}
				songAuthor={trackInformation.songAuthor}
			/>
			<TrackPlayLikeDislike/>
		</S.TrackPlay>
	)
}