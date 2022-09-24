import React from 'react'
import {TrackPlayContain} from "./TrackPlayContain";
import {TrackPlayLikeDislike} from "./TrackPlayLikeDislike";
import * as S from "../../styles";

export function PlayerTrackPlay() {
	const trackInformation = {
		authorLink: 'https://',
		albumLink: 'https://',
		songName: 'Ты та...',
		songAuthor: 'Баста'
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