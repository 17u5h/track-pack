import {PayloadAction} from "@reduxjs/toolkit";
import {IDS_CURRENT_TRACKS, IDS_LIKED_TRACKS} from "../actions/types/types";

const initialState = {
	idsLikedTracks: [],
	idsCurrentTracks: [],
}

export default function idsTracksReducer(state = initialState, action: PayloadAction<[]>) {
	switch (action.type) {
		case IDS_LIKED_TRACKS: {
			const idsLikedTracks = action.payload
			return {
				...state,
				idsLikedTracks,
			}
		}
		case IDS_CURRENT_TRACKS: {
			const idsCurrentTracks = action.payload
			return {
				...state,
				idsCurrentTracks,
			}
		}
		default:
			return state
	}
}