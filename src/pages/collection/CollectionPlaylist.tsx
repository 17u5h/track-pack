import React, {useEffect, useState} from 'react'
import {PlaylistItemSkeletons} from "../../components/Skeletons/PlaylistItemSkeletons";
import {PlaylistItem} from "../main/PlaylistItem";
import {secToMinConverter} from "../../lib/secToMinConverter";
import {useDispatch, useSelector} from "react-redux";
import {themeSelector} from "../../store/selectors/themeSelector";
import * as S from "../../styles";
import $api from "../../http/interceptors";
import {BASE_URL} from "../../store/store";
import {Track} from "../../models/response/PlaylistAllTracks";
import {putIdsCurrentTracks} from "../../store/actions/creators/likedTracks";

type Props = {
	id: number
}

export function CollectionPlaylist(props: Props) {
	const themeSwitcher = useSelector(themeSelector)
	const [isLoading, setIsLoading] = useState(true)
	const [collection, setCollection] = useState<Track[]>([])
	const dispatch = useDispatch()

	async function fetchCollectionPlaylist() {
		setIsLoading(true)
		try {
			const {data} = await $api.get(`${BASE_URL}/catalog/selection/${props.id}/`)
			setCollection(data.items)

		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchCollectionPlaylist()

	}, [props.id])

	useEffect(() => {
		const idsCollectionTracks = collection.map(el => el.id)
		dispatch(putIdsCurrentTracks(idsCollectionTracks))
	}, [collection])

	return (
		<S.Playlist isDarkTheme={themeSwitcher}>
			{isLoading && <PlaylistItemSkeletons/>}
			{!isLoading && collection.map(el =>
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