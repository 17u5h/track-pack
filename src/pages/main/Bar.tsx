import React from 'react'
import {PlayerControls} from "./PlayerControls";
import {PlayerTrackPlay} from "./PlayerTrackPlay";
import {BarVolumeBlock} from "./BarVolumeBlock";
import * as S from "../../styles";

export function Bar() {
	return (
		<S.Bar>
			<S.BarContainer>
				<audio controls loop src="./Queen - Bicycle Race.mp3"></audio>
				<S.BarPlayerProgress/>
				<S.PlayerBlock>
					<S.PlayerContainer>
						<PlayerControls/>
						<PlayerTrackPlay/>
					</S.PlayerContainer>
					<BarVolumeBlock/>
				</S.PlayerBlock>
			</S.BarContainer>
		</S.Bar>
	)
}