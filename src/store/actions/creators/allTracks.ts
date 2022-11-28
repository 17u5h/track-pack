import {Track} from "../../../models/response/PlaylistAllTracks";
import {ALL_TRACKS} from "../types/types";

export const putAllTracks = (allTracks: Track[]) => ({
	type: ALL_TRACKS,
	payload: allTracks,
})