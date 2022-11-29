import React, {useEffect, useRef, useState} from 'react'
import {PlayerControls} from "./PlayerControls";
import {PlayerTrackPlay} from "./PlayerTrackPlay";
import {BarVolumeBlock} from "./BarVolumeBlock";
import {BarPlayerProgress} from "./BarPlayerProgress";
import {useDispatch, useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {
	idNextTrackSelector,
	idPrevTrackSelector,
	urlPlayingTrackSelector
} from "../../store/selectors/playingTrackSelector";
import * as S from "../../styles";
import {store} from "../../store/store";
import {fetchCurrentTrack, pushStore} from "../../lib/fetchCurrentTrack";
import {allTracksSelector} from "../../store/selectors/allTracksSelector";
import {putAllTracks} from "../../store/actions/creators/allTracks";


export function Bar() {
	pushStore(store)
	const dispatch = useDispatch()
	const allTracks = useSelector(allTracksSelector)
	const themeSwitcher = useSelector(themeSelector)
	const urlPlayingTrack = useSelector(urlPlayingTrackSelector)
	const idPrevTrack = useSelector(idPrevTrackSelector)
	const idNextTrack = useSelector(idNextTrackSelector)

	const audio = useRef(null)

	const [duration, setDuration] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [playing, setPlaying] = useState(false)
	const [clickedTime, setClickedTime] = useState(0)
	const [volume, setVolume] = useState(0.5)
	const [urlCurrentTrack, setUrlCurrentTrack] = useState('')

	useEffect(() => {
		setUrlCurrentTrack(urlPlayingTrack)
	}, [urlPlayingTrack])

	useEffect(() => {
		if (audio.current === null) return
		audio.current.src = urlCurrentTrack
		audio.current.volume = volume
	}, [urlCurrentTrack])

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

	const handleClickPrev = () => {
		fetchCurrentTrack(idPrevTrack, dispatch)
	}

	const handleClickNext = () => {
		fetchCurrentTrack(idNextTrack, dispatch)
	}

	const handleClickRepeat = () => {
		audio.current.currentTime = 0
	}

	const handleClickShuffle = () => {
		const unRandomizedAllTracks = [...allTracks]
		unRandomizedAllTracks.sort(() => Math.random() - 0.5)
		dispatch(putAllTracks(unRandomizedAllTracks))
	}

	const volumeChange = (event) => {
		if (audio.current === null) return
		setVolume(Number(event.target.value) / 100)
		audio.current.volume = volume
	}

	return (
		<S.Bar isDarkTheme={themeSwitcher}>
			<S.BarContainer>
				<audio ref={audio}>
					<source src={urlPlayingTrack}/>
					Ваш браузер не поддерживает <code>audio</code>
				</audio>
				<BarPlayerProgress currentTime={currentTime} duration={duration}
													 onTimeUpdate={(time) => setClickedTime(time)}/>
				<S.PlayerBlock>
					<S.PlayerContainer>
						{playing ?
							<PlayerControls
								isPlaying={true}
								handleClickPlayPause={() => setPlaying(false)}
								handleClickPrev={() => handleClickPrev()}
								handleClickNext={() => handleClickNext()}
								handleClickRepeat={() => handleClickRepeat()}
								handleClickShuffle={() => handleClickShuffle()}/> :
							<PlayerControls
								isPlaying={false}
								handleClickPlayPause={() => setPlaying(true)}
								handleClickPrev={() => handleClickPrev()}
								handleClickNext={() => handleClickNext()}
								handleClickRepeat={() => handleClickRepeat()}
								handleClickShuffle={() => handleClickShuffle()}/>}
						<PlayerTrackPlay/>
					</S.PlayerContainer>
					<BarVolumeBlock volumeChange={(event) => volumeChange(event)}/>
				</S.PlayerBlock>
			</S.BarContainer>
		</S.Bar>


	)
}