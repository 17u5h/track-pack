import React from 'react'
import * as S from "../styles";

export function PlayerControls() {

	return (
		<S.PlayerControls>
			<S.PlayerButtonPrev>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-prev'}/>
				</svg>
			</S.PlayerButtonPrev>
			<S.PlayerButtonPlay>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-play'}/>
				</svg>
			</S.PlayerButtonPlay>
			<S.PlayerButtonNext>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-next'}/>
				</svg>
			</S.PlayerButtonNext>
			<S.PlayerButtonRepeat>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-repeat'}/>
				</svg>
			</S.PlayerButtonRepeat>
			<S.PlayerButtonShuffle>
				<svg>
					<use href={'../img/icon/sprite.svg#icon-shuffle'}/>
				</svg>
			</S.PlayerButtonShuffle>
		</S.PlayerControls>
	)
}