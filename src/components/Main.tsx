import React from 'react'
import {Nav} from "./Nav";
import {CenterBlock} from "./CenterBlock";
import {SideBar} from "./SideBar";

const personalData = {
	name: 'Sergey.Ivanov',
	imgPlaylistItems: [ '../img/playlist01.png', '../img/playlist02.png', '../img/playlist03.png'],
	sideBarLink: '#'
}

export function Main() {
	return (
		<div className='main'>
			<Nav />
			<CenterBlock />
			<SideBar personalName={personalData.name}
								 imgSrc={personalData.imgPlaylistItems}
								 sideBarLink={personalData.sideBarLink}
			/>


		</div>
	)
}