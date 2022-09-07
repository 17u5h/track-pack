import React from 'react'
import {SvgImg} from "./SvgImg";

export function BarVolumeBlock() {
	return (
		<div className='bar__volume-block volume'>
			<div className={'volume__content'}>
				<div className={'volume__image'}>
					<SvgImg className={'volume__svg'} href={'../img/icon/sprite.svg#icon-volume'}/>
				</div>
				<div className={'volume__progress _btn'}>
					<input className={'volume__progress-line _btn'} type="range" name={'range'}/>
				</div>
			</div>
		</div>
	)
}