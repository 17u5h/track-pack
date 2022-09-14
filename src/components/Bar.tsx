import React from 'react'
import {PlayerControls} from "./PlayerControls";
import {PlayerTrackPlay} from "./PlayerTrackPlay";
import {BarVolumeBlock} from "./BarVolumeBlock";

export function Bar() {
	return (
		<div className='bar'>
			<div className={'bar__content'}>
				<div className={'bar__player-progress'}></div>
				<div className={'bar__player-block'}>
					<div className={'bar__player player'}>
						<PlayerControls/>
						<PlayerTrackPlay/>
					</div>
					<BarVolumeBlock/>
				</div>
			</div>
		</div>
	)
}