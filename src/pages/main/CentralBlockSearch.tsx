import React from 'react'
import * as S from "../../styles";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

export function CentralBlockSearch() {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.CentralBlockSearch isDarkTheme={themeSwitcher}>
			<svg>
				<use href={'../img/icon/sprite.svg#icon-search'}/>
			</svg>
			<input type="search" placeholder={'Поиск'} name={'search'}/>
		</S.CentralBlockSearch>
	)
}