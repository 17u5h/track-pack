import React from 'react'

type props = {
	divClassName: string
	sideBarLink: string
	imgSrc: string
}

export function SideBarItem(props: props) {
	return (
		<div className={props.divClassName}>
			<a className={'sidebar__link'} href={props.sideBarLink}>
				<img className={'sidebar__img'} src={props.imgSrc} alt="day's playlist"/>
			</a>
		</div>
	)
}