import {Track} from "../../models/response/PlaylistAllTracks";

type Store ={
	allTracks: {
		allTracks:Track[]
	}
}

export const allTracksSelector = (store: Store) => store?.allTracks.allTracks || []