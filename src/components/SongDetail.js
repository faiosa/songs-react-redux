import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <h1>Select a song</h1>;
    }
    return (
        <div>
            <h2>
                <iframe
                    src={song.spotifyUrl}
                    width='300'
                    height='380'
                    frameBorder='0'
                    allowransparency='true'
                    allow='encrypted-media'
                    title={song.title}
                ></iframe>
            </h2>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
