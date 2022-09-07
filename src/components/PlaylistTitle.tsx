import React from 'react'
import {SvgImg} from "./SvgImg";

type titleProps = {
	divClassName: string
	titleCol01ClassName: string
	titleCol02ClassName: string
	titleCol03ClassName: string
	titleCol04ClassName: string
}

export function PlaylistTitle(props: titleProps) {
	return (
		<div className={props.divClassName}>
			<div className={props.titleCol01ClassName}>Трек</div>
			<div className={props.titleCol02ClassName}>ИСПОЛНИТЕЛЬ</div>
			<div className={props.titleCol03ClassName}>АЛЬБОМ</div>
			<div className={props.titleCol04ClassName}>
				<SvgImg className={'playlist-title__svg'} href={'img/icon/sprite.svg#icon-watch'}/>
			</div>
		</div>
	)
}