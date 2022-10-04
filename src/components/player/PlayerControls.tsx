import React, {useContext} from 'react'
import * as S from "../../styles";
import {PauseButton} from "./PauseButton";
import {PlayButton} from "./PlayButton";
import {ThemeContext} from "../../contexts/theme";

type Props = {
	handleClick: () => void
	isPlaying: boolean
}

export function PlayerControls(props: Props) {
	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.PlayerControls>

			<S.PlayerButtonPrev dark={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-prev'/>
				</svg>
			</S.PlayerButtonPrev>
			{props.isPlaying ?
				<PauseButton handleClick={() => props.handleClick()}/>
				: <PlayButton handleClick={() => props.handleClick()}/>
			}
			<S.PlayerButtonNext dark={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-next'/>
				</svg>
			</S.PlayerButtonNext>
			<S.PlayerButtonRepeat dark={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-repeat'/>
				</svg>
			</S.PlayerButtonRepeat>
			<S.PlayerButtonShuffle dark={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-shuffle'/>
				</svg>
			</S.PlayerButtonShuffle>
		</S.PlayerControls>
	)
}