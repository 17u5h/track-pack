import React from 'react'
import {Nav} from "./Nav";
import {CentralBlock} from "./CentralBlock";
import {SideBar} from "./SideBar";
import * as S from "../../styles";

const personalData = {
	name: 'Sergey.Ivanov',
	imgPlaylistItems: ['../img/playlist01.png', '../img/playlist02.png', '../img/playlist03.png'],
}

export function Main() {
	return (
		<S.Main>
			<Nav/>
			<CentralBlock/>
			<SideBar personalName={personalData.name}
							 imgSrc={personalData.imgPlaylistItems}
			/>
		</S.Main>
	)
}