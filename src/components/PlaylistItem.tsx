import React from 'react'
import {SvgImg} from "./SvgImg";

type itemProps = {
	trackTitle?: string
	trackAuthor?: string
	trackAlbum?: string
	trackTime?: string
	imageLink: string
	titleLink?: string
	authorLink?: string
	albumLink?: string
}

export function PlaylistItem(props: itemProps) {
	return (
		<div className={'playlist__item'}>
			<div className={'playlist__track track'}>
				<div className={'track__title'}>
					<div className={'track__title-image'}>
						<SvgImg className={'track__title-svg'} href={props.imageLink}/>
					</div>
					<div className={'track__title-text'}>
						<a className={'track__title-link'} href={props.titleLink}>
							{props.trackTitle}
							<span className={'track__title-span'}></span>
						</a>
					</div>
				</div>
				<div className={'track__author'}>
					<a className={'track__author-link'} href={props.authorLink}>
						{props.trackAuthor}
					</a>
				</div>
				<div className={'track__album'}>
					<a className={'track__album-link'} href={props.albumLink}>
						{props.trackAlbum}
					</a>
				</div>
				<div className={'track__time'}>
					<SvgImg className={'track__time-svg'} href={'../img/icon/sprite.svg#icon-like'}/>
					<span className={'track__time-text'}>
						{props.trackTime}
					</span>
				</div>
			</div>
		</div>
	)
}