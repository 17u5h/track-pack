import React, {useEffect, useState} from 'react'
import {PlaylistItem} from "./PlaylistItem";
import * as S from "../../styles";
import {BASE_URL} from "../../store/store";
import axios from "axios";
import {Track} from "../../models/response/PlaylistAllTracks";
import {secToMinConverter} from "../../lib/secToMinConverter";
import {PlaylistItemSkeletons} from "../../components/Skeletons/PlaylistItemSkeletons";
import {useDispatch, useSelector} from "react-redux";
import idsLikedTracksReducer from "../../store/reducers/idsLikedTracksReducer";
import {putIdsLikedTracks} from "../../store/actions/creators/likedTracks";
import {idsLikedTracksSelector} from "../../store/selectors/likedTracksSelector";

export function Playlist() {

	const [isLoading, setIsLoading] = useState(true)
	const [allTracks, setAllTracks] = useState<Track[]>([])
	const [isLiked, setIsLiked] = useState(false)
	const idsLikedTracks = useSelector(idsLikedTracksSelector)
	const dispatch = useDispatch()

	async function fetchAllTracks() {
		try {
			const {data} = await axios.get(`${BASE_URL}/catalog/track/all` )

			setAllTracks(data)
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchAllTracks()
	},[])

	useEffect(() => {
		if (!allTracks.at(0)) return
		const email = sessionStorage.getItem('userEmail')

		const likedTracks = allTracks.filter(el => el.stared_user.find(userField => userField.email === email))
		const idsLikedTracks = likedTracks.map(el => el.id)
		dispatch(putIdsLikedTracks(idsLikedTracks))

		allTracks.forEach(el => {
			idsLikedTracks.includes(el.id) ?
				el.isLiked = true : el.isLiked = false
		})
	},[allTracks])






	return (
		<S.Playlist >
			{isLoading && <PlaylistItemSkeletons/> }
			{!isLoading && allTracks.map(el =>
					<PlaylistItem
						id={el?.id}
						key={el?.id || (Math.random() * 100000)}
						trackTitle={el?.name || '-'}
						trackAuthor={el?.author || '-'}
						trackAlbum={el?.album || '-'}
						trackLiked = {el.isLiked}
						trackTime={secToMinConverter(el?.duration_in_seconds)}
						imageLink={el?.logo || '../img/icon/sprite.svg#icon-note'}
						link={el?.track_file || ''}
					/>
				)
			}
		</S.Playlist>
	)
}