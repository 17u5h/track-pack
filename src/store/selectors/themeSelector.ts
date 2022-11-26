type Store = {
	theme:{
		themeSwitcher: boolean
	}
}

export const themeSelector = (store: Store) => store.theme?.themeSwitcher || false