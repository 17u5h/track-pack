import React from 'react'
import {CentralBlockSearch} from "./CentralBlockSearch";
import {CentralBlockFilter} from "./CentralBlockFilter";
import {PlaylistTitle} from "./PlaylistTitle";
import {Playlist} from "./Playlist";
import * as S from "../styles";


export function CentralBlock() {
	return (
		<S.CentralBlock>
			<CentralBlockSearch/>
			<h2>Треки</h2>
			<CentralBlockFilter/>
			<S.CentralBlockContent>
				<PlaylistTitle/>
				<Playlist/>
			</S.CentralBlockContent>
		</S.CentralBlock>
	)
}