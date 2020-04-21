import React from 'react';
import './ratedList.css'
import RatedItem from '../ratedItem/ratedItem';

function RatedList (props) {
    let tracks = props.ratedTracks.tracks
    return (
    <div>
        {tracks.map((track, index) => 
            <RatedItem 
            track={track}
            key={index}
        />)}
    </div>)
}

export default RatedList;