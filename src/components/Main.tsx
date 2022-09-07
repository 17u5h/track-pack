import React from 'react'
import {Nav} from "./Nav";
import {CenterBlock} from "./CenterBlock";
import {SideBar} from "./SideBar";

const personalData = {
	name: 'Sergey.Ivanov',
	imgPlaylistItem: '../img/playlist01.png',
	sideBarLink: '#'
}

export function Main() {
	return (
		<div className='main'>
			<Nav className={'main__nav nav'}/>
			<CenterBlock divClassName={'main__centerblock centerblock'}/>
			<SideBar personalName={personalData.name}
							 imgSrc={personalData.imgPlaylistItem}
							 sideBarLink={personalData.sideBarLink}
			/>
		</div>
	)
}