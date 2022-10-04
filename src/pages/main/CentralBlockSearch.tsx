import React, {useContext} from 'react'
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";

export function CentralBlockSearch() {
	const {themeSwitcher} = useContext(ThemeContext)
	return (
		<S.CentralBlockSearch dark={themeSwitcher}>
			<svg>
				<use href={'../img/icon/sprite.svg#icon-search'}/>
			</svg>
			<input type="search" placeholder={'Поиск'} name={'search'}/>
		</S.CentralBlockSearch>
	)
}