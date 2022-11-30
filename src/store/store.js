import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import themeReducer from "./reducers/themeReducer";
import idsTracksReducer from "./reducers/idsTracksReducer";
import playingTrackReducer from "./reducers/playingTrackReducer";
import sortedTracksReducer from "./reducers/sortedTracksReducer";
import allTracksReducer from "./reducers/allTracksReducer";

export const BASE_URL = 'https://painassasin.online'

export const SUCCESS_MESSAGE_TRACK_ADDED_TO_FAVORITE = 'User added to track'
export const SUCCESS_MESSAGE_TRACK_DELETED_FROM_FAVORITE = 'User removed from track'

export const store = configureStore({
	reducer: {
		login: loginReducer,
		theme: themeReducer,
		allTracks: allTracksReducer,
		idsTracks: idsTracksReducer,
		sortedTracks: sortedTracksReducer,
		track: playingTrackReducer,
	},
	middleware: [thunk],
})

