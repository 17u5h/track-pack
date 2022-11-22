import React, {useEffect, useState} from 'react'
import * as S from "../../styles";
import {PlaylistItemSkeletons} from "../../components/Skeletons/PlaylistItemSkeletons";
import {PlaylistItem} from "../main/PlaylistItem";
import {secToMinConverter} from "../../lib/secToMinConverter";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import {BASE_URL} from "../../store/store";
import {Track} from "../../models/response/PlaylistAllTracks";
import $api from "../../http/interceptors";

export function FavoritePlaylist() {
	const themeSwitcher = useSelector(themeSelector)
	const [isLoading, setIsLoading] = useState(true)
	const [likedTracks, setLikedTracks] = useState<Track[]>([])

	async function fetchLikedTracks(){
		setIsLoading(true)
		try{
			const {data} = await $api.get(`${BASE_URL}/catalog/track/favorite/all/`)
			setLikedTracks(data)
		} catch (e){
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}
	useEffect(() => {
		fetchLikedTracks()
	}, [])


	return (
		<S.Playlist isDarkTheme={themeSwitcher}>
			{isLoading && <PlaylistItemSkeletons/>}
			{!isLoading && likedTracks.map(el =>
				<PlaylistItem
					id={el?.id}
					key={el?.id || (Math.random() * 100000)}
					trackTitle={el?.name || '-'}
					trackAuthor={el?.author || '-'}
					trackAlbum={el?.album || '-'}
					trackLiked={true}
					trackTime={secToMinConverter(el?.duration_in_seconds)}
					imageLink={el?.logo || '../img/icon/sprite.svg#icon-note'}
					link={el?.track_file || ''}
				/>
			)
			}
		</S.Playlist>
	)
}