import React from 'react'
import {PlayerButton} from "./PlayerButton";

export function PlayerControls() {
	const buttonTypes = [{
		id: 1,
		type: 'prev',
		additionalClassName: ''
	},{
		id: 2,
		type: 'play',
		additionalClassName: '_btn'
	},{
		id: 3,
		type: 'next',
		additionalClassName: ''
	},{
		id: 4,
		type: 'repeat',
		additionalClassName: '_btn-icon'
	},{
		id: 5,
		type: 'shuffle',
		additionalClassName: '_btn-icon'
	}]

	return (
		<div className='player__controls'>
			{buttonTypes.map(el => (
				<PlayerButton key={el.id}
											additionalClassName={el.additionalClassName}
											buttonType={el.type}
				/>
			))}
		</div>
	)
}