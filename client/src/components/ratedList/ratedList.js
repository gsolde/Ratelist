import React from 'react';
import './ratedList.css';
import RatedItem from '../ratedItem/ratedItem';

function RatedList(props) {
  const { tracks } = props.ratedTracks;
  return (
    <div className="ratedList">
      {tracks ? tracks.map((track, index) => (
        <RatedItem
          track={track}
          key={index}
        />
        ))
        : 
        <p className='no-ratings'>No ratings yet!</p>
      }
    </div>
  );
}

export default RatedList;
