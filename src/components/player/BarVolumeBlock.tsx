import React from 'react'
import * as S from "../../styles";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";

type Props = {
	volumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function BarVolumeBlock(props: Props) {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.BarVolumeBlock>
			<S.VolumeContent>
				<S.VolumeImage isDarkTheme={themeSwitcher}>
					<svg>
						<use href={'../img/icon/sprite.svg#icon-volume'}/>
					</svg>
				</S.VolumeImage>
				<S.VolumeValue isDarkTheme={themeSwitcher}>
					<input type="range" name='range' onChange={(event) => props.volumeChange(event)}/>
				</S.VolumeValue>
			</S.VolumeContent>
		</S.BarVolumeBlock>
	)
}