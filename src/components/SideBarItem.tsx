import React from 'react'

type props = {
	sideBarLink: string
	imgSrc: string
}

export function SideBarItem(props: props) {
	return (
		<div className={'sidebar__item'}>
			<a className={'sidebar__link'} href={props.sideBarLink}>
				<img className={'sidebar__img'} src={props.imgSrc} alt="day's playlist"/>
			</a>
		</div>
	)
}