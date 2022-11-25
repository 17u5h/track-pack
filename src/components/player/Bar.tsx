import React, {useEffect, useRef, useState} from 'react'
import {PlayerControls} from "./PlayerControls";
import {PlayerTrackPlay} from "./PlayerTrackPlay";
import {BarVolumeBlock} from "./BarVolumeBlock";
import * as S from "../../styles";
import {BarPlayerProgress} from "./BarPlayerProgress";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {urlPlayingTrackSelector} from "../../store/selectors/playingTrackSelector";

export function Bar() {
	const themeSwitcher = useSelector(themeSelector)
	const urlPlayingTrack = useSelector(urlPlayingTrackSelector)

	const audio = useRef<HTMLAudioElement>(null)

	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [playing, setPlaying] = useState(false)
	const [clickedTime, setClickedTime] = useState(0)

	useEffect(() => {
		if (audio.current === null) return
		audio.current.src = urlPlayingTrack
		audio.current.volume = 0.5

	}, [urlPlayingTrack])

	useEffect(() => {

		if (audio.current === null) return

		const setAudioData = () => {
			if (audio.current) {
				setDuration(audio.current.duration)
				setCurrentTime(audio.current.currentTime)
			}
		}

		const setAudioTime = () => {
			if (audio.current?.currentTime)
				setCurrentTime(audio.current.currentTime)
		}

		audio.current.addEventListener('loadeddata', setAudioData)
		audio.current.addEventListener('timeupdate', setAudioTime)

		playing ? audio.current.play().catch(() => {
			throw new Error('что-то не так с плеером')
		}) : audio.current.pause()

		if (clickedTime && clickedTime !== currentTime) {
			audio.current.currentTime = clickedTime
			setClickedTime(0)
		}

		return () => {
			audio.current?.removeEventListener('loadeddata', setAudioData)
			audio.current?.removeEventListener('timeupdate', setAudioTime)
		}
	})

	const volumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (audio.current === null) return
		const value = Number(event.target.value)
		audio.current.volume = value/100
	}

	return (
			<S.Bar isDarkTheme={themeSwitcher}>
				<S.BarContainer>
					<audio ref={audio}>
						<source src={urlPlayingTrack}/>
						Ваш браузер не поддерживает <code>audio</code>
					</audio>
					<BarPlayerProgress currentTime={currentTime} duration={duration}
														 onTimeUpdate={(time: number) => setClickedTime(time)}/>
					<S.PlayerBlock>
						<S.PlayerContainer>
							{playing ?
								<PlayerControls isPlaying={true} handleClick={() => setPlaying(false)}/> :
								<PlayerControls isPlaying={false} handleClick={() => setPlaying(true)}/>}
							<PlayerTrackPlay/>
						</S.PlayerContainer>
						<BarVolumeBlock volumeChange={(event) => volumeChange(event)}/>
					</S.PlayerBlock>
				</S.BarContainer>
			</S.Bar>


	)
}