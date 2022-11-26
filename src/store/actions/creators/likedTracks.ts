import {IDS_LIKED_TRACKS} from "../types/types";


export const putIdsLikedTracks = (idsLikedTracks: number[]) => ({
	type: IDS_LIKED_TRACKS,
	payload: idsLikedTracks
})