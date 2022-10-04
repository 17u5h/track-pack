import React, {useContext} from 'react'
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";

export function BarVolumeBlock() {
	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.BarVolumeBlock>
			<S.VolumeContent>
				<S.VolumeImage dark={themeSwitcher}>
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