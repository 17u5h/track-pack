import {
	GET_NEXT_TRACK_FAILURE,
	GET_NEXT_TRACK_STARTED, GET_NEXT_TRACK_SUCCESS,
	GET_PREV_TRACK_FAILURE,
	GET_PREV_TRACK_STARTED, GET_PREV_TRACK_SUCCESS,
	GET_TRACK_FAILURE,
	GET_TRACK_STARTED,
	GET_TRACK_SUCCESS
} from "../types/types";
import {Track} from "../../../models/response/PlaylistAllTracks";

export const fetchGetTrackStarted = () => ({
	type: GET_TRACK_STARTED
})

export const fetchGetTrackSuccess = (playingTrack: Track) => ({
	type: GET_TRACK_SUCCESS,
	payload: playingTrack,
})

export const fetchGetTrackFailure = (error: unknown) => ({
	type: GET_TRACK_FAILURE,
	payload: {
		error
	}
})

export const fetchGetPrevTrackStarted = () => ({
	type: GET_PREV_TRACK_STARTED
})

export const fetchGetPrevTrackSuccess = (prevTrack: Track) => ({
	type: GET_PREV_TRACK_SUCCESS,
	payload: prevTrack,
})

export const fetchGetPrevTrackFailure = (error: unknown) => ({
	type: GET_PREV_TRACK_FAILURE,
	payload: {
		error
	}
})

export const fetchGetNextTrackStarted = () => ({
	type: GET_NEXT_TRACK_STARTED
})

export const fetchGetNextTrackSuccess = (nextTrack: Track) => ({
	type: GET_NEXT_TRACK_SUCCESS,
	payload: nextTrack,
})

export const fetchGetNextTrackFailure = (error: unknown) => ({
	type: GET_NEXT_TRACK_FAILURE,
	payload: {
		error
	}
})
