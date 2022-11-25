import React from 'react'
import {TrackPlayContain} from "../../pages/main/TrackPlayContain";
import {TrackPlayLikeDislike} from "../../pages/main/TrackPlayLikeDislike";
import * as S from "../../styles";
import {useSelector} from "react-redux";
import {authorPlayingTrackSelector, titlePlayingTrackSelector} from "../../store/selectors/playingTrackSelector";

export function PlayerTrackPlay() {
	const trackInformation = {
		authorLink: '#',
		albumLink: '#',
	}
	const songName = useSelector(titlePlayingTrackSelector)
	const songAuthor = useSelector(authorPlayingTrackSelector)

	return (
		<S.TrackPlay>
			<TrackPlayContain
				authorLink={trackInformation.authorLink}
				albumLink={trackInformation.albumLink}
				songName={songName}
				songAuthor={songAuthor}
			/>
			<TrackPlayLikeDislike/>
		</S.TrackPlay>
	)
}