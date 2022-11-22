import {fetchGetTrackFailure, fetchGetTrackStarted, fetchGetTrackSuccess} from "../creators/playingTrack";
import axios from "axios";
import {BASE_URL} from "../../store";


export const fetchGetTrack = (trackId) => async (dispatch) =>{
	dispatch(fetchGetTrackStarted())

	try{
		const {data} = await axios.get(`${BASE_URL}/catalog/track/${trackId}`)
		const playingTrack = data.track_file
		dispatch(fetchGetTrackSuccess(playingTrack))
	} catch (error){
		dispatch(fetchGetTrackFailure(error))
	}
}