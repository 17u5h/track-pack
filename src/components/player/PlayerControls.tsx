import React from 'react'
import {PauseButton} from "./PauseButton";
import {PlayButton} from "./PlayButton";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";

type Props = {
	handleClickPrev: () => void,
	handleClickPlayPause: () => void,
	handleClickNext: () => void,
	handleClickRepeat: () => void,
	handleClickShuffle: () => void,
	isPlaying: boolean,
}

export function PlayerControls(props: Props) {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.PlayerControls>

			<S.PlayerButtonPrev isDarkTheme={themeSwitcher} onClick={() => props.handleClickPrev()}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-prev'/>
				</svg>
			</S.PlayerButtonPrev>
			{props.isPlaying ?
				<PauseButton handleClick={() => props.handleClickPlayPause()}/>
				: <PlayButton handleClick={() => props.handleClickPlayPause()}/>
			}
			<S.PlayerButtonNext isDarkTheme={themeSwitcher} onClick={() => props.handleClickNext()}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-next'/>
				</svg>
			</S.PlayerButtonNext>
			<S.PlayerButtonRepeat isDarkTheme={themeSwitcher} onClick={() => props.handleClickRepeat()}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-repeat'/>
				</svg>
			</S.PlayerButtonRepeat>
			<S.PlayerButtonShuffle isDarkTheme={themeSwitcher} onClick={() => props.handleClickShuffle()}>
				<svg>
					<use href='../img/icon/sprite.svg#icon-shuffle'/>
				</svg>
			</S.PlayerButtonShuffle>
		</S.PlayerControls>
	)
}