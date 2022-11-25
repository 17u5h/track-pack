import {fetchGetTrackFailure, fetchGetTrackStarted, fetchGetTrackSuccess} from "../creators/playingTrack";
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