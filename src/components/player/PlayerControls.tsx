import React from 'react'
import * as S from "../../styles";
import {PauseButton} from "./PauseButton";
import {PlayButton} from "./PlayButton";

type Props = {
	handleClick: () => void
	isPlaying: boolean
}

export function PlayerControls(props: Props) {

	return (
		<S.PlayerControls>

			<S.PlayerButtonPrev>
				<svg>
					<use href='../img/icon/sprite.svg#icon-prev'/>
				</svg>
			</S.PlayerButtonPrev>
			{props.isPlaying ?
				<PauseButton handleClick={() => props.handleClick()}/>
				: <PlayButton handleClick={() => props.handleClick()}/>
			}
			<S.PlayerButtonNext>
				<svg>
					<use href='../img/icon/sprite.svg#icon-next'/>
				</svg>
			</S.PlayerButtonNext>
			<S.PlayerButtonRepeat>
				<svg>
					<use href='../img/icon/sprite.svg#icon-repeat'/>
				</svg>
			</S.PlayerButtonRepeat>
			<S.PlayerButtonShuffle>
				<svg>
					<use href='../img/icon/sprite.svg#icon-shuffle'/>
				</svg>
			</S.PlayerButtonShuffle>
		</S.PlayerControls>
	)
}