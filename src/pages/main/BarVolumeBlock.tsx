import React from 'react'
import * as S from "../../styles";

export function BarVolumeBlock() {
	return (
		<S.BarVolumeBlock>
			<S.VolumeContent>
				<S.VolumeImage>
					<svg>
						<use href={'../img/icon/sprite.svg#icon-volume'}/>
					</svg>
				</S.VolumeImage>
				<S.VolumeValue>
					<input type="range" name={'range'}/>
				</S.VolumeValue>
			</S.VolumeContent>
		</S.BarVolumeBlock>
	)
}