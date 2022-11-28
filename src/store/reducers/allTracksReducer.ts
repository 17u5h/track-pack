import {PayloadAction} from "@reduxjs/toolkit";
import {Track} from "../../models/response/PlaylistAllTracks";
import {ALL_TRACKS} from "../actions/types/types";

const initialState = {
	allTracks: []
}

export default function allTracksReducer(state = initialState, action: PayloadAction<Track[]>){
	switch (action.type){
		case ALL_TRACKS: {
			const allTracks = action.payload
			return{
				...state,
				allTracks,
			}
		}
		default:
			return state
	}
}