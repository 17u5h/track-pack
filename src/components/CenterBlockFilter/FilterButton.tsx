import React from 'react'

type props = {
	className: string
	onClick: () => void
	children: string
}

export function FilterButton({children, ...props}: props) {

	return (
		<div className={props.className} onClick={props.onClick}>
			{children}
		</div>
	)
}