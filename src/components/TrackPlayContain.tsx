import React from 'react'
import {SvgImg} from "./SvgImg";

type propsType = {
	authorLink: string
	albumLink: string
	songName: string
	songAuthor: string
}

export function TrackPlayContain(props: propsType) {
	return (
		<div className='track-play__contain'>
			<div className={'track-play__image'}>
				<SvgImg className={'track-play__svg'} href={'../img/icon/sprite.svg#icon-note'}/>
			</div>
			<div className={'track-play__author'}>
				<a className={'track-play__author-link'} href={props.authorLink}>{props.songName}</a>
			</div>
			<div className={'track-play__album'}>
				<a className={'track-play__album-link'} href={props.albumLink}>{props.songAuthor}</a>
			</div>
		</div>
	)
}