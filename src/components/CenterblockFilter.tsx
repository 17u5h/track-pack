import React from 'react'

type filterProps = {
	divClassName: string
	titleClassName: string
	authorClassName: string
	yearClassName: string
	genreClassName: string
}

export function CenterblockFilter(props: filterProps) {
	return (
		<div className={props.divClassName}>
			<div className={props.titleClassName}>Искать по:</div>
			<div className={props.authorClassName}>исполнителю</div>
			<div className={props.yearClassName}>году выпуска</div>
			<div className={props.genreClassName}>жанру</div>
		</div>
	)
}