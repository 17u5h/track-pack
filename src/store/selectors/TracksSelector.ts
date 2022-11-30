type Store = {
	idsTracks: {
		idsLikedTracks: number[],
		idsCurrentTracks: number[],
	}
}

export const idsLikedTracksSelector = (store: Store) => store.idsTracks?.idsLikedTracks || []
export const idsCurrentTracksSelector = (store: Store) => store.idsTracks?.idsCurrentTracks || []