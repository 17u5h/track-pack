import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import themeReducer from "./reducers/themeReducer";
import idsLikedTracksReducer from "./reducers/idsLikedTracksReducer";
import playingTrackReducer from "./reducers/playingTrackReducer";

export const BASE_URL = 'https://painassasin.online'

export const SUCCESS_MESSAGE_TRACK_ADDED_TO_FAVORITE = 'User added to track'
export const SUCCESS_MESSAGE_TRACK_DELETED_FROM_FAVORITE = 'User removed from track'

export const store = configureStore({
	reducer: {
		login: loginReducer,
		theme: themeReducer,
		likedTracks: idsLikedTracksReducer,
		track: playingTrackReducer,
	},
	middleware: [thunk],
})

