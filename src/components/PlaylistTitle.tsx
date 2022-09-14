import React from 'react'
import {SvgImg} from "./SvgImg";


export function PlaylistTitle() {
	return (
		<div className={'content__title playlist-title'}>
			<div className={'playlist-title__col col01'}>Трек</div>
			<div className={'playlist-title__col col02'}>ИСПОЛНИТЕЛЬ</div>
			<div className={'playlist-title__col col03'}>АЛЬБОМ</div>
			<div className={'playlist-title__col col04'}>
				<SvgImg className={'playlist-title__svg'} href={'img/icon/sprite.svg#icon-watch'}/>
			</div>
		</div>
	)
}