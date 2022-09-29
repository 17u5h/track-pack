import React, {useRef} from 'react'
import * as S from '../../styles'

type Props = {
	currentTime: number
	duration: number
	onTimeUpdate: (arg0: number) => void
}

export function BarPlayerProgress(props: Props) {
	const {currentTime, duration, onTimeUpdate} = props
	const currentPercentage = (currentTime / duration) * 100
	const barRef = useRef<HTMLDivElement>(null)
	console.log(barRef)

	function calcClickedTime(event: MouseEvent) {
		const clickXPositionInPage = event.pageX
		const barStart = barRef.current!.clientLeft
		const barWidth = barRef.current!.clientWidth
		const clickXPositionInBar = clickXPositionInPage - barStart
		const timePerPixel = duration / barWidth
		return timePerPixel * clickXPositionInBar
	}

	function handleTimeDrag(event: MouseEvent) {
		onTimeUpdate(calcClickedTime(event))

		const updateTimeOnMouseMove = (moveEvent: MouseEvent) => {
			onTimeUpdate(calcClickedTime(moveEvent))
		}

		document.addEventListener('mousemove', updateTimeOnMouseMove)
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', updateTimeOnMouseMove)
		})
	}

	return (
		<S.BarPlayerProgress ref={barRef}
												 style={{background: `linear-gradient(to right, #D9D9D9 ${currentPercentage}%, #2E2E2E 0`}}
												 onMouseDown={(event: MouseEvent) => handleTimeDrag(event)}>

		</S.BarPlayerProgress>
	)
}