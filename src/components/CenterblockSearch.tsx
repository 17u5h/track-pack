import React from 'react'
import {SvgImg} from "./SvgImg";

export function CenterblockSearch() {
	return (
		<div className={'centerblock__search search'}>
			<SvgImg className={'search__svg'} href={'../img/icon/sprite.svg#icon-search'}/>
			<input className={'search__text'} type="search" placeholder={'Поиск'} name={'search'}/>
		</div>
	)
}