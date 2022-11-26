import {PayloadAction} from "@reduxjs/toolkit";
import {IDS_LIKED_TRACKS} from "../actions/types/types";

const initialState = {
	idsLikedTracks: []
}

export default function idsLikedTracksReducer(state = initialState, action: PayloadAction<[]>) {
	switch (action.type) {
		case IDS_LIKED_TRACKS: {
			const idsLikedTracks = action.payload
			return {
				...state,
				idsLikedTracks
			}
		}
		default:
			return state
	}
}