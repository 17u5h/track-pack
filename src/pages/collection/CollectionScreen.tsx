import React from 'react'
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {CentralBlockSearch} from "../main/CentralBlockSearch";
import {PlaylistTitle} from "../main/PlaylistTitle";
import {CollectionPlaylist} from "./CollectionPlaylist";
import * as S from "../../styles";

type Props = {
	id: number
	title: string
}

export function CollectionScreen(props: Props) {

	const themeSwitcher = useSelector(themeSelector)

	return (
		<S.CentralBlock>
			<CentralBlockSearch/>
			<S.CentralBlockTitle isDarkTheme={themeSwitcher}>{props.title}</S.CentralBlockTitle>
			<S.CentralBlockContent>
				<PlaylistTitle/>
				<CollectionPlaylist id={props.id}/>
			</S.CentralBlockContent>
		</S.CentralBlock>
	)
}