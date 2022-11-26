import React from 'react'
import * as S from "../../styles";
import {PauseButton} from "./PauseButton";
import {PlayButton} from "./PlayButton";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

type Props = {
	handleClick: () => void
	isPlaying: boolean
}

export function PlayerControls(props: Props) {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.PlayerControls>

			<S.PlayerButtonPrev isDarkTheme={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-prev'/>
				</svg>
			</S.PlayerButtonPrev>
			{props.isPlaying ?
				<PauseButton handleClick={() => props.handleClick()}/>
				: <PlayButton handleClick={() => props.handleClick()}/>
			}
			<S.PlayerButtonNext isDarkTheme={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-next'/>
				</svg>
			</S.PlayerButtonNext>
			<S.PlayerButtonRepeat isDarkTheme={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-repeat'/>
				</svg>
			</S.PlayerButtonRepeat>
			<S.PlayerButtonShuffle isDarkTheme={themeSwitcher}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-shuffle'/>
				</svg>
			</S.PlayerButtonShuffle>
		</S.PlayerControls>
	)
}