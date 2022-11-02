import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import themeReducer from "./reducers/themeReducer";

export const BASE_URL = 'http://51.250.95.23:8000'

export const store = configureStore({
	reducer: {
		login: loginReducer,
		theme: themeReducer,
	},
	middleware: [thunk],
})

