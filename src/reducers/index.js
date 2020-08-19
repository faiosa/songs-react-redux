import { combineReducers } from 'redux';

// Reducer for list of the songs
const songsReducer = () => {
    return [
        { title: 'Waiting For Love', duration: '4:20' },
        { title: 'Wake Me Up', duration: '4:10' },
        { title: 'Hey Brother', duration: '3:50' },
    ];
};

// Reducer for the selected song
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
