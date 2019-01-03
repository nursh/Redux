// Action creator

export const selectSong = (song) => {
  // creates an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
}

