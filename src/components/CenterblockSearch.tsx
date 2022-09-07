import React from 'react'
import {SvgImg} from "./SvgImg";

type props = {
	divClassName: string
	inputClassName: string
}

export function CenterblockSearch(props: props) {
	return (
		<div className={props.divClassName}>
			<SvgImg className={'search__svg'} href={'../img/icon/sprite.svg#icon-search'}/>
			<input className={props.inputClassName} type="search" placeholder={'Поиск'} name={'search'}/>
		</div>
	)
}