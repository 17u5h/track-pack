import {
	GET_NEXT_TRACK_FAILURE,
	GET_NEXT_TRACK_STARTED, GET_NEXT_TRACK_SUCCESS,
	GET_PREV_TRACK_FAILURE,
	GET_PREV_TRACK_STARTED,
	GET_PREV_TRACK_SUCCESS,
	GET_TRACK_FAILURE,
	GET_TRACK_STARTED,
	GET_TRACK_SUCCESS
} from "../actions/types/types";
import {Track} from "../../models/response/PlaylistAllTracks";
import {PayloadAction} from "@reduxjs/toolkit";


const initialState = {
	playingTrack: '',
	prevTrack: '',
	nextTrack: '',
	error: null
}

export default function playingTrackReducer(state=initialState, action: PayloadAction<Track>){
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
		case GET_PREV_TRACK_STARTED: {
			return {
				...state,
			}
		}
		case GET_PREV_TRACK_SUCCESS: {
			const prevTrack = action.payload
			return {
				...state,
				prevTrack,
			}
		}
		case GET_PREV_TRACK_FAILURE: {
			return {
				...state,
				error: action.payload.error,
			}
		}
		case GET_NEXT_TRACK_STARTED: {
			return {
				...state,
			}
		}
		case GET_NEXT_TRACK_SUCCESS: {
			const nextTrack = action.payload
			return {
				...state,
				nextTrack,
			}
		}
		case GET_NEXT_TRACK_FAILURE: {
			return {
				...state,
				error: action.payload.error,
			}
		}
		default:
			return state
	}
}