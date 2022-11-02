import {DARK_THEME, LIGHT_THEME} from "../types/types";

export const toggleDarkTheme = () => ({
	type: DARK_THEME
})

export const toggleLightTheme = () => ({
	type: LIGHT_THEME
})