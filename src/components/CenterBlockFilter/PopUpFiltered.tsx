import React from 'react'

type props = {
	children: string[]
	className: string
}

export function PopUpFiltered({children, ...props}: props) {
	return (
		<div className={props.className}>
			{children.map((song, i) => (
				<p key={i} className={'filter__pop-up-text'}>{song}</p>
			))}
		</div>
	)
}