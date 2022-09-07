import React from 'react'
import {SvgImg} from "./SvgImg";

export function TrackPlayLikeDislike() {
	return (
		<div className='track-play__like-dis'>
			<div className={'track-play__like _btn-icon'}>
				<SvgImg className={'track-play__like-svg'} href={'../img/icon/sprite.svg#icon-like'}/>
			</div>
			<div className={'track-play__dislike _btn-icon'}>
				<SvgImg className={'track-play__dislike-svg'} href={'../img/icon/sprite.svg#icon-dislike'}/>
			</div>
		</div>
	)
}