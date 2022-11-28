const playingTrackSelector = (store) => store?.track.playingTrack || ''
const prevTrackSelector = (store) => store?.track.prevTrack || ''
const nextTrackSelector = (store) => store?.track.nextTrack || ''

export const urlPlayingTrackSelector = (store) => playingTrackSelector(store)?.track_file || ''
export const titlePlayingTrackSelector = (store) => playingTrackSelector(store)?.name || ''
export const authorPlayingTrackSelector = (store) => playingTrackSelector(store)?.author || ''
export const idPlayingTrackSelector = (store) => playingTrackSelector(store)?.id || ''

export const idPrevTrackSelector = (store) => prevTrackSelector(store)?.id || ''

export const idNextTrackSelector = (store) => nextTrackSelector(store)?.id || ''