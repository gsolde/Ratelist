import React from 'react';
import './trackList.css'
import TrackItem from '../trackItem/trackItem';

function TrackList (props) {
    let tracks = props.tracks.tracks.items
    return (
    <div>
        {tracks.map((track, index) => 
            <TrackItem 
            track={track}
            key={index}
        // addTopic={props.addTopic}
        />)}
    </div>)
}

export default TrackList;