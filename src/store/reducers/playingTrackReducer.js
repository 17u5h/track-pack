import {GET_TRACK_FAILURE, GET_TRACK_STARTED, GET_TRACK_SUCCESS} from "../actions/types/types";


const initialState = {
	playingTrack: '',
	error: null
}

export default function playingTrackReducer(state=initialState, action){
	switch (action.type){
		case GET_TRACK_STARTED: {
			return {
				...state,
			}
		}
		case GET_TRACK_SUCCESS: {
			const playingTrack = action.payload
			return {
				...state,
				playingTrack,
			}
		}
		case GET_TRACK_FAILURE: {
			return {
				...state,
				error: action.payload.error,
			}
		}
		default:
			return state
	}
}