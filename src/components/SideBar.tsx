import React from 'react'
import {SideBarBlock} from "./SideBarBlock";

type props = {
	personalName: string
	imgSrc: string[]
	sideBarLink: string
}

export function SideBar(props: props) {
	return (
		<div className={'main__sidebar sidebar'}>
			<div className={'sidebar__personal'}>
				<p className={'sidebar__personal-name'}>{props.personalName}</p>
				<div className={'sidebar__avatar'}>
				</div>
				<SideBarBlock imgSrc={props.imgSrc} sideBarLink={props.sideBarLink}/>
			</div>
		</div>
	)
}