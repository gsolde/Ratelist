import React from 'react';
import './ratedList.css';
import RatedItem from '../ratedItem/ratedItem';

function RatedList(props) {
  const { tracks } = props.ratedTracks;
  return (
    <div className="ratedList">
      {tracks.map((track, index) => (
        <RatedItem
          track={track}
          key={index}
        />
      ))}
    </div>
  );
}

export default RatedList;
