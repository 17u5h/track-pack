import React, {useEffect, useState} from 'react'
import {PlaylistItem} from "./PlaylistItem";
import * as S from "../../styles";
import {BASE_URL} from "../../store/store";
import axios from "axios";
import {Track} from "../../models/response/PlaylistAllTracks";
import {secToMinConverter} from "../../lib/secToMinConverter";

export function Playlist() {
	const [isLoading, setIsLoading] = useState(true)
	const [allTracks, setAllTracks] = useState<Track[]>([])

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
		console.log(allTracks)
	},[allTracks])


	return (
		<S.Playlist numberOfItems={allTracks.length}>
			{!isLoading && allTracks.map(el =>
					<PlaylistItem
						key={el.id}
						trackTitle={el?.name}
						trackAuthor={el?.author}
						trackAlbum={el?.album}
						trackTime={secToMinConverter(el?.duration_in_seconds)}
						imageLink={el?.logo || ''}
						link={el?.track_file}

					/>
				)
			}
		</S.Playlist>
	)
}