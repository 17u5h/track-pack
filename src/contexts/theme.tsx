import React from 'react'


export const ThemeContext = React.createContext({
	themeSwitcher: true,
	toggleTheme: () => {return},
})