import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {LikeDislikeButton} from "./LikeDislikeButton";
import * as S from "../../styles"
import {idsCurrentTracksSelector} from "../../store/selectors/TracksSelector";
import {fetchCurrentTrack, pushStore} from "../../lib/fetchCurrentTrack";
import {store} from "../../store/store";

//
// type Props = {
// 	id: number
// 	trackTitle?: string
// 	trackAuthor?: string
// 	trackAlbum?: string
// 	trackLiked : boolean
// 	trackTime?: string
// 	imageLink: string
// 	link?: string
// }


export function PlaylistItem(props) {
	pushStore(store)
	const themeSwitcher = useSelector(themeSelector)
	const dispatch = useDispatch()
	const idsCurrentTracks = useSelector(idsCurrentTracksSelector)


	return (
		<S.PlaylistItem>
			<S.PlaylistTrack>
				<S.TrackTitle onClick={() => fetchCurrentTrack(props.id, dispatch)}>
					<S.TrackTitleImage isDarkTheme={themeSwitcher}>
						<svg>
							<use href={props.imageLink}/>
						</svg>
					</S.TrackTitleImage>
					<S.TrackTitleText isDarkTheme={themeSwitcher}>
						<a>
							{props.trackTitle}
						</a>
						<span></span>
					</S.TrackTitleText>
				</S.TrackTitle>
				<S.TrackAuthor isDarkTheme={themeSwitcher}>
					<a href={props.link}>
						{props.trackAuthor}
					</a>
				</S.TrackAuthor>
				<S.TrackAlbum isDarkTheme={themeSwitcher}>
					<a href={props.link}>
						{props.trackAlbum}
					</a>
				</S.TrackAlbum>
				<S.TrackTime isDarkTheme={themeSwitcher}>
					<LikeDislikeButton trackLiked={props.trackLiked} id={props.id}/>
					<span>
						{props.trackTime}
					</span>
				</S.TrackTime>
			</S.PlaylistTrack>
		</S.PlaylistItem>
	)
}