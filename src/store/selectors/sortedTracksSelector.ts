import {Track} from "../../models/response/PlaylistAllTracks";

type Store = {
	sortedTracks:{
		sortedTracksByDate: Track[],
		sortedTracksByAuthor: Track[],
		sortedTracksByGenre: Track[],
		searchedTracks: Track[],
	}
}

const sortedTracksSelector = (store: Store) => store?.sortedTracks

export const sortedTracksByDateSelector = (store: Store) => sortedTracksSelector(store)?.sortedTracksByDate
export const sortedTracksByAuthorSelector = (store: Store) => sortedTracksSelector(store)?.sortedTracksByAuthor
export const sortedTracksByGenreSelector = (store: Store) => sortedTracksSelector(store)?.sortedTracksByGenre
export const searchedTracksSelector = (store: Store) => sortedTracksSelector(store)?.searchedTracks || []