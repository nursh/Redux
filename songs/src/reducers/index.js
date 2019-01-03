import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Macarena', duration: '4:20' },
    { title: 'Thriller', duration: '12:10' },
    { title: 'Smooth Criminal', duration: '5:05' },
    { title: 'Billie Jean', duration: '3:45' }
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});