import React, {useState} from 'react'
import * as S from "../../styles"
import {useDispatch, useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {tokenSelector} from "../../store/selectors/loginSelector";
import axios from "axios";
import {BASE_URL, store} from "../../store/store";
import {getCookie} from "../../lib/cookieReader";
import {fetchCreateToken} from "../../store/actions/thunks/token";
import $api, {injectStore} from "../../http/interceptors";
import {useNavigate} from "react-router-dom";
import {LoadingSpinner} from "../login/styles";
import {LoadingLikeSpinner} from "../../styles";


// type itemProps = {
// 	id: number
// 	trackTitle?: string
// 	trackAuthor?: string
// 	trackAlbum?: string
// 	trackLiked? : boolean
// 	trackTime?: string
// 	imageLink: string
// 	link?: string
// }


export function PlaylistItem(props) {
	const themeSwitcher = useSelector(themeSelector)
	const [isLiked = props.trackLiked, setIsLiked] = useState()
	const [likeLoading, setLikeLoading] = useState(false)

	injectStore(store)

	async function toggleLikeDislikeTrack(id) {
		setLikeLoading(true)

		try {
			if (isLiked) {
				const res = await $api.delete(`${BASE_URL}/catalog/track/${id}/favorite/`,)
				console.log(res)
				if (res.data.detail === 'User removed from track') setIsLiked(false)
			} else {
				const res = await $api.post(`${BASE_URL}/catalog/track/${id}/favorite/`)
				console.log(res)
				if (res.data.detail === "User added to track") setIsLiked(true)
			}
		} catch (e) {
			console.log(e)
		} finally {
			setLikeLoading(false)
		}
	}

	return (
		<S.PlaylistItem>
			<S.PlaylistTrack>
				<S.TrackTitle>
					<S.TrackTitleImage isDarkTheme={themeSwitcher}>
						<svg>
							<use href={props.imageLink}/>
						</svg>
					</S.TrackTitleImage>
					<S.TrackTitleText isDarkTheme={themeSwitcher}>
						<a href={props.link}>
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

					{likeLoading ? <S.LoadingLikeSpinner/> :
						<svg onClick={() => toggleLikeDislikeTrack(props.id)}>

							{isLiked ? <use href={'../img/icon/sprite.svg#icon-dislike'}/>
								: <use href={'../img/icon/sprite.svg#icon-like'}/>}

						</svg>}
					<span>
						{props.trackTime}
					</span>
				</S.TrackTime>
			</S.PlaylistTrack>
		</S.PlaylistItem>
	)
}