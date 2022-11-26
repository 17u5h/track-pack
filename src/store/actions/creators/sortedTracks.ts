import {Track} from "../../../models/response/PlaylistAllTracks";
import {TRACKS_BY_AUTHOR, TRACKS_BY_DATE, TRACKS_BY_GENRE} from "../types/types";

export const putSortedTracksByDate = (sortedTracksByDate: Track[]) => ({
	type: TRACKS_BY_DATE,
	payload: sortedTracksByDate,
})

export const putSortedTracksByAuthor = (sortedTracksByAuthor: Track[]) => ({
	type: TRACKS_BY_AUTHOR,
	payload: sortedTracksByAuthor,
})

export const putSortedTracksByGenre = (sortedTracksByGenre: Track[]) => ({
	type: TRACKS_BY_GENRE,
	payload: sortedTracksByGenre,
})