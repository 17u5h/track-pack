import moment from "moment/moment";
import {Track} from "../models/response/PlaylistAllTracks";

export function sortTracksByDate(tracks: Track[]) {
	return tracks.sort((a, b) => Number(moment(b.release_date, 'YYYY.MM.DD')) - Number(moment(a.release_date, 'YYYY.MM.DD')))
}

export function sortTracksByAuthor(tracks: Track[]) {
	return tracks.filter(el => el.author !== '-').sort((a, b) => a.author > b.author ? 1 : -1)
}

export function sortTracksByGenre(tracks: Track[]) {
	return tracks.sort((a, b) => a.genre > b.genre ? 1 : -1)
}