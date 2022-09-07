import React from 'react'
import {TrackPlayContain} from "./TrackPlayContain";
import {TrackPlayLikeDislike} from "./TrackPlayLikeDislike";

export function PlayerTrackPlay() {
	const trackInformation = {
		authorLink: 'https://',
		albumLink: 'https://',
		songName: 'Ты та...',
		songAuthor: 'Баста'
	}
	return (
		<div className='player__track-play track-play'>
			<TrackPlayContain
				authorLink={trackInformation.authorLink}
				albumLink={trackInformation.albumLink}
				songName={trackInformation.songName}
				songAuthor={trackInformation.songAuthor}
			/>
			<TrackPlayLikeDislike/>
		</div>
	)
}