import React from 'react'
import {PlayerButton} from "./PlayerButton";

export function PlayerControls() {
	const buttonTypes = ['prev', 'play', 'next', 'repeat', 'shuffle']
	const additionalClassNames = ['', '_btn', '', '_btn-icon', '_btn-icon']
	return (
		<div className='player__controls'>
			{buttonTypes.map((el, i) => (
				<PlayerButton key={i}
											additionalClassName={additionalClassNames[i]}
											buttonType={buttonTypes[i]}/>
			))}
		</div>
	)
}