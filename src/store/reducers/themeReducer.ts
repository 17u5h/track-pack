import {PayloadAction} from "@reduxjs/toolkit";
import {DARK_THEME, LIGHT_THEME} from "../actions/types/types";

const initialState = {
	themeSwitcher: true
}

export default function themeReducer(state = initialState, action: PayloadAction<boolean>) {
	switch (action.type) {
		case DARK_THEME: {
			return {
				...state,
				themeSwitcher: true
			}
		}
		case LIGHT_THEME: {
			return {
				...state,
				themeSwitcher: false
			}
		}
		default:
			return state
	}
}