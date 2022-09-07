import React from 'react'
import {SvgImg} from "./SvgImg";

type propsType = {
	buttonType: string
	additionalClassName: string
}

export function PlayerButton(props: propsType) {
	return (
		<div className={[`player__btn-${props.buttonType}`, props.additionalClassName].join(' ')}>
			<SvgImg className={'player__btn-play-svg'}
							href={`../img/icon/sprite.svg#icon-${props.buttonType}`}
			/>
		</div>
	)
}