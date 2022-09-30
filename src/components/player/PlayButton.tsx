import React from 'react'
import * as S from '../../styles'

type Props = {
	handleClick: () => void
}

export function PlayButton(props: Props){
	return(
		<button style={{background:'transparent', border:"none"}} onClick={() => props.handleClick()}>
			<S.PlayerButtonPlayPause>
				<svg >
					<use href={'../img/icon/sprite.svg#icon-play'}/>
				</svg>
			</S.PlayerButtonPlayPause>
		</button>
	)
}