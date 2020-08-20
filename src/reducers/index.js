import { combineReducers } from 'redux';

// Reducer for list of the songs
const songsReducer = () => {
    return [
        {
            title: 'Waiting For Love',
            duration: '4:20',
            spotifyUrl:
                'https://open.spotify.com/embed/track/2P4OICZRVAQcYAV2JReRfj',
        },
        {
            title: 'Wake Me Up',
            duration: '4:10',
            spotifyUrl:
                'https://open.spotify.com/embed/track/4h8VwCb1MTGoLKueQ1WgbD',
        },
        {
            title: 'Forever Yours',
            duration: '3:50',
            spotifyUrl:
                'https://open.spotify.com/embed/track/3o1CUVeHIid49sabk6A6Nf',
        },
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
