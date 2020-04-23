import React from 'react';
import './trackList.css';
import TrackItem from '../trackItem/trackItem';

function TrackList(props) {
  const tracks = props.tracks.tracks.items;
  return (
    <div>
      {tracks.map((track, index) => (
        <TrackItem
          track={track}
          key={index}
        />
      ))}
    </div>
  );
}

export default TrackList;
