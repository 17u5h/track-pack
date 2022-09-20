import React from 'react'
import * as S from "../styles";

export function TrackPlayLikeDislike() {
	return (
		<S.TrackPlayLikeDislike>
			<div>
				<S.LikeDislikeSvg $like="like">
					<use href={'../img/icon/sprite.svg#icon-like'}/>
				</S.LikeDislikeSvg>
			</div>
			<div>
				<S.LikeDislikeSvg $like="">
					<use href={'../img/icon/sprite.svg#icon-dislike'}/>
				</S.LikeDislikeSvg>
			</div>
		</S.TrackPlayLikeDislike>
	)
}