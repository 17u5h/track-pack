import React, {useEffect, useState} from 'react'
import axios from "axios";
import {PlaylistItem} from "./PlaylistItem";
import {secToMinConverter} from "../../lib/secToMinConverter";
import {PlaylistItemSkeletons} from "../../components/Skeletons/PlaylistItemSkeletons";
import {useDispatch, useSelector} from "react-redux";
import {putIdsCurrentTracks, putIdsLikedTracks} from "../../store/actions/creators/likedTracks";
import {idsLikedTracksSelector} from "../../store/selectors/TracksSelector";
import {themeSelector} from "../../store/selectors/themeSelector";
import {
	putSortedTracksByAuthor,
	putSortedTracksByDate,
	putSortedTracksByGenre
} from "../../store/actions/creators/sortedTracks";
import {sortTracksByAuthor, sortTracksByDate, sortTracksByGenre} from "../../lib/sortTracks";
import * as S from "../../styles";
import {BASE_URL} from "../../store/store";
import {Track} from "../../models/response/PlaylistAllTracks";
import {putAllTracks} from "../../store/actions/creators/allTracks";
import {allTracksSelector} from "../../store/selectors/allTracksSelector";

export function Playlist() {
	const themeSwitcher = useSelector(themeSelector)
	const [isLoading, setIsLoading] = useState(true)
	const [allTracks, setAllTracks] = useState<Track[]>([])
	const dispatch = useDispatch()
	const reduxAllTracks = useSelector(allTracksSelector)

	async function fetchAllTracks() {
		try {
			const {data} = await axios.get(`${BASE_URL}/catalog/track/all/`)
			await setAllTracks(data)
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchAllTracks()
	}, [])

	useEffect(() => {
		if (!allTracks.at(0)) return
		const email = sessionStorage.getItem('userEmail')

		const idsAllTracks = allTracks.map(el => el.id)
		dispatch(putIdsCurrentTracks(idsAllTracks))

		const likedTracks = allTracks.filter(el => el.stared_user.find(userField => userField.email === email))
		const idsLikedTracks = likedTracks.map(el => el.id)
		dispatch(putIdsLikedTracks(idsLikedTracks))

		allTracks.forEach(el => {
			idsLikedTracks.includes(el.id) ?
				el.isLiked = true : el.isLiked = false
		})

		const unsortedTracksByDate = [...allTracks]
		const unsortedTracksByAuthor = [...allTracks]
		const unsortedTracksByGenre = [...allTracks]
		dispatch(putSortedTracksByDate(sortTracksByDate(unsortedTracksByDate)))
		dispatch(putSortedTracksByAuthor(sortTracksByAuthor(unsortedTracksByAuthor)))
		dispatch(putSortedTracksByGenre(sortTracksByGenre(unsortedTracksByGenre)))
		dispatch(putAllTracks(allTracks))
	}, [allTracks])
	//
	useEffect(() => {
		setAllTracks(reduxAllTracks)
	},[reduxAllTracks])



	return (
		<S.Playlist isDarkTheme={themeSwitcher}>
			{isLoading && <PlaylistItemSkeletons/>}
			{!isLoading && allTracks.map(el =>
				<PlaylistItem
					id={el?.id}
					key={el?.id || (Math.random() * 100000)}
					trackTitle={el?.name || '-'}
					trackAuthor={el?.author || '-'}
					trackAlbum={el?.album || '-'}
					trackLiked={el.isLiked}
					trackTime={secToMinConverter(el?.duration_in_seconds)}
					imageLink={el?.logo || '../img/icon/sprite.svg#icon-note'}
					link={el?.track_file || ''}
				/>)}
		</S.Playlist>
	)
}