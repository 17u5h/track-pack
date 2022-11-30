import {IDS_CURRENT_TRACKS, IDS_LIKED_TRACKS} from "../types/types";

export const putIdsLikedTracks = (idsLikedTracks: number[]) => ({
	type: IDS_LIKED_TRACKS,
	payload: idsLikedTracks,
})

export const putIdsCurrentTracks = (idsTracks: number[]) => ({
	type: IDS_CURRENT_TRACKS,
	payload: idsTracks,
})