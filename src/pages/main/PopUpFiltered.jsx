import React, {useEffect, useRef} from 'react'
import * as S from "../../styles";
import {Track} from "../../models/response/PlaylistAllTracks";
import {useDispatch} from "react-redux";
import {fetchGetTrack} from "../../store/actions/thunks/playnigTrack";

// type Props = {
// 	tracks: Track[]
// }

export function PopUp(props) {
	const dispatch = useDispatch()

	function playTrackInPlayer(id){
		dispatch(fetchGetTrack(id))
	}

	return (
		<S.PopUp >
			{props.tracks.map((song) => (
				<p key={song.id} onClick={() => playTrackInPlayer(song.id)}>{song.name}</p>
			))}
		</S.PopUp>
	)
}
