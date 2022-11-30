import React from 'react'
import {CentralBlockSearch} from "./CentralBlockSearch";
import {CentralBlockFilter} from "./CentralBlockFilter";
import {PlaylistTitle} from "./PlaylistTitle";
import {Playlist} from "./Playlist";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";

export function CentralBlock() {
	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.CentralBlock>
			<CentralBlockSearch/>
			<S.CentralBlockTitle isDarkTheme={themeSwitcher}>Треки</S.CentralBlockTitle>
			<CentralBlockFilter/>
			<S.CentralBlockContent>
				<PlaylistTitle/>
				<Playlist/>
			</S.CentralBlockContent>
		</S.CentralBlock>
	)
}