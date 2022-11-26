

export const urlPlayingTrackSelector = (store) => store?.track.playingTrack.track_file || ''
export const titlePlayingTrackSelector = (store) => store?.track.playingTrack.name || ''
export const authorPlayingTrackSelector = (store) => store?.track.playingTrack.author || ''