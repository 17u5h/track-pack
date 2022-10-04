import React, {useContext} from 'react'
import {CentralBlockSearch} from "./CentralBlockSearch";
import {CentralBlockFilter} from "./CentralBlockFilter";
import {PlaylistTitle} from "./PlaylistTitle";
import {Playlist} from "./Playlist";
import * as S from "../../styles";
import {ThemeContext} from "../../contexts/theme";



export function CentralBlock() {
	const {themeSwitcher} = useContext(ThemeContext)

	return (
		<S.CentralBlock>
			<CentralBlockSearch/>
			<S.CentralBlockTitle dark={themeSwitcher}>Треки</S.CentralBlockTitle>
			<CentralBlockFilter/>
			<S.CentralBlockContent>
				<PlaylistTitle/>
				<Playlist/>
			</S.CentralBlockContent>
		</S.CentralBlock>
	)
}