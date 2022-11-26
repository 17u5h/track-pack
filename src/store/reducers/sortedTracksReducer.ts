import {PayloadAction} from "@reduxjs/toolkit";
import {TRACKS_BY_AUTHOR, TRACKS_BY_DATE, TRACKS_BY_GENRE} from "../actions/types/types";

const initialState = {
	sortedTracksByDate: [],
	sortedTracksByAuthor: [],
	sortedTracksByGenre: [],
}

export default function sortedTracksReducer(state = initialState, action: PayloadAction<[]>) {
	switch (action.type) {
		case TRACKS_BY_DATE: {
			const sortedTracksByDate = action.payload
			return {
				...state,
				sortedTracksByDate
			}
		}
		case TRACKS_BY_AUTHOR: {
			const sortedTracksByAuthor = action.payload
			return {
				...state,
				sortedTracksByAuthor
			}
		}
		case TRACKS_BY_GENRE: {
			const sortedTracksByGenre = action.payload
			return {
				...state,
				sortedTracksByGenre
			}
		}
		default:
			return state
	}
}