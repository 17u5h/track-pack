import {
	fetchGetNextTrackFailure,
	fetchGetNextTrackStarted,
	fetchGetNextTrackSuccess,
	fetchGetPrevTrackFailure,
	fetchGetPrevTrackStarted,
	fetchGetPrevTrackSuccess,
	fetchGetTrackFailure,
	fetchGetTrackStarted,
	fetchGetTrackSuccess
} from "../creators/playingTrack";
import axios from "axios";
import {BASE_URL} from "../../store";

export const fetchGetTrack = (trackId) => async (dispatch) => {
	dispatch(fetchGetTrackStarted())
	try {
		const {data} = await axios.get(`${BASE_URL}/catalog/track/${trackId}/`)
		dispatch(fetchGetTrackSuccess(data))
	} catch (error) {
		dispatch(fetchGetTrackFailure(error))
	}
}

export const fetchGetPrevTrack = (trackId) => async (dispatch) => {
	dispatch(fetchGetPrevTrackStarted())
	try {
		const {data} = await axios.get(`${BASE_URL}/catalog/track/${trackId}/`)
		dispatch(fetchGetPrevTrackSuccess(data))
	} catch (error) {
		dispatch(fetchGetPrevTrackFailure(error))
	}
}

export const fetchGetNextTrack = (trackId) => async (dispatch) => {
	dispatch(fetchGetNextTrackStarted())
	try {
		const {data} = await axios.get(`${BASE_URL}/catalog/track/${trackId}/`)
		dispatch(fetchGetNextTrackSuccess(data))
	} catch (error) {
		dispatch(fetchGetNextTrackFailure(error))
	}
}