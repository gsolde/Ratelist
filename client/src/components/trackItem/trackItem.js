import React from 'react';
import './trackItem.css';

function TrackItem (props) {
    console.log(props.track.album.images[0].url)
return (
    <div>
        <div>
            <p>Track: {props.track.name}</p>
            <img src={`${props.track.album.images[0].url}`}/>
            <button onClick={() => console.log('Rated!')}>Rate track</button>
            <p>Album: {props.track.album.name}</p>
        </div>
    </div>
)
}

export default TrackItem;