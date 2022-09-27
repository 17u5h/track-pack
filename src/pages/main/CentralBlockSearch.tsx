import React from 'react'
import * as S from "../../styles";

export function CentralBlockSearch() {
	return (
		<S.CentralBlockSearch>
			<svg>
				<use href={'../img/icon/sprite.svg#icon-search'}/>
			</svg>
			<input type="search" placeholder={'Поиск'} name={'search'}/>
		</S.CentralBlockSearch>
	)
}