import React from 'react'
import {SideBarItem} from "./SideBarItem";

type props = {
	imgSrc: string[]
	sideBarLink: string
}

export function SideBarBlock(props: props) {
	return (
		<div className={'sidebar__block'}>
			<div className={'sidebar__list'}>
				{props.imgSrc.map((el,i) => (
					<SideBarItem
											key = {i}
											sideBarLink={props.sideBarLink}
											imgSrc={props.imgSrc[i]}
					/>
				))}
			</div>
		</div>
	)
}