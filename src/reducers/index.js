import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '3:05' },
    { title: 'All Star', duration: '3:46' },
    { title: 'I Want it That Way', duration: '2:49' },
  ]
};

const selectedSongReducer = (songSelected = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  } else {
    return songSelected;
  };
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
