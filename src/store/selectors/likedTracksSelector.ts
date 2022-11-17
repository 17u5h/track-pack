type Store = {
	likedTracks: {
		idsLikedTracks: number[]
	}
}

export const idsLikedTracksSelector = (store: Store) => store.likedTracks?.idsLikedTracks || []