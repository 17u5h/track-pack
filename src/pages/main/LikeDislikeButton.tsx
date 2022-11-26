import React, {useState} from 'react'
import * as S from "../../styles";
import $api, {injectStore} from "../../http/interceptors";
import {
	BASE_URL, store,
	SUCCESS_MESSAGE_TRACK_ADDED_TO_FAVORITE,
	SUCCESS_MESSAGE_TRACK_DELETED_FROM_FAVORITE
} from "../../store/store";

type Props = {
	trackLiked: boolean,
	id: number,
}

export function LikeDislikeButton(props: Props){
	injectStore(store)

	const [isLiked = props.trackLiked, setIsLiked] = useState(props.trackLiked)
	const [likeLoading, setLikeLoading] = useState(false)

	async function toggleLikeDislikeTrack(id: number) {
		setLikeLoading(true)

		try {
			if (isLiked) {
				const res = await $api.delete(`${BASE_URL}/catalog/track/${id}/favorite/`,)
				console.log(res)
				if (res.data.detail === SUCCESS_MESSAGE_TRACK_DELETED_FROM_FAVORITE) setIsLiked(false)
			} else {
				const res = await $api.post(`${BASE_URL}/catalog/track/${id}/favorite/`)
				console.log(res)
				if (res.data.detail === SUCCESS_MESSAGE_TRACK_ADDED_TO_FAVORITE) setIsLiked(true)
			}
		} catch (e) {
			console.log(e)
		} finally {
			setLikeLoading(false)
		}
	}
  return(
		likeLoading ? <S.LoadingLikeSpinner/> :
				<svg onClick={() => toggleLikeDislikeTrack(props.id)}>

					{isLiked ? <use href={'../img/icon/sprite.svg#icon-dislike'}/>
						: <use href={'../img/icon/sprite.svg#icon-like'}/>}

				</svg>
  )
}