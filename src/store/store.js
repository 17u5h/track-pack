import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import themeReducer from "./reducers/themeReducer";
import idsLikedTracksReducer from "./reducers/idsLikedTracksReducer";

export const BASE_URL = 'https://painassasin.online'

export const store = configureStore({
	reducer: {
		login: loginReducer,
		theme: themeReducer,
		likedTracks: idsLikedTracksReducer,
	},
	middleware: [thunk],
})

