import {
	GET_TRACK_FAILURE,
	GET_TRACK_STARTED,
	GET_TRACK_SUCCESS
} from "../types/types";

type types ={
	playingTrack: string,
}

export const fetchGetTrackStarted = () => ({
	type: GET_TRACK_STARTED
})

export const fetchGetTrackSuccess = (playingTrack: types) => ({
	type: GET_TRACK_SUCCESS,
	payload: {
		playingTrack
	}
})

export const fetchGetTrackFailure = (error: unknown) => ({
	type: GET_TRACK_FAILURE,
	payload: {
		error
	}
})
