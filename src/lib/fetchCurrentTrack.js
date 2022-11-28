import {fetchGetNextTrack, fetchGetPrevTrack, fetchGetTrack} from "../store/actions/thunks/playnigTrack";



let store

export const pushStore = (_store) => {
	store = _store
}

export async function fetchCurrentTrack(id, dispatch) {
	const idsCurrentTracks = store.getState().idsTracks.idsCurrentTracks
	await dispatch(fetchGetTrack(id))
	const prevId = idsCurrentTracks.at(idsCurrentTracks.indexOf(id) - 1)
	const nextId = idsCurrentTracks.at(idsCurrentTracks.indexOf(id) + 1)
	await dispatch(fetchGetPrevTrack(prevId))
	await dispatch(fetchGetNextTrack(nextId))

}