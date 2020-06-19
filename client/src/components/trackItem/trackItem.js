import React, { useState } from 'react';
import { InsertRating } from '../../services/dbService';
import './trackItem.css';

const userName = localStorage.getItem('userName');

function TrackItem(props) {
  const [color, setColor] = useState('rgb(73, 162, 218)');
  const [buttonText, setButtonText] = useState('Rate track');
  const [borderColor, SetBorderColor] = useState('1px solid white');
  const [trackId, setTrackId] = useState('');
  const [rating, setRating] = useState('Submit Rating');

  function OnClickEvent() {
    setColor('rgb(103, 182, 109)');
    setButtonText('Rating saved');
    SetBorderColor('1px solid rgb(103, 182, 109)');
  }

  const handleChange = (e) => {
    setRating(e.target.value);
    setTrackId(e.target.getAttribute('data-trackid'));
    setColor('#92a2a8');
  };

  function handleSubmit(e) {
    e && e.preventDefault();
    if (trackId && rating && userName) InsertRating({ userName, trackId, rating });
    setTrackId('');
    setRating('Rating stored');
  }

  return (
    <div>
      <div className="track_container" style={{ border: borderColor }}>
        <div className="album_cover">
          <img src={`${props.track.album.images[0].url}`} alt="album cover" />
        </div>
        <div className="track_info_rating">
          <div className="track_details">
            <p className="track_name">{props.track.name}</p>
            <p className="album_name">
              {props.track.album.name}
              {' '}
              -
              {' '}
              {props.track.artists[0].name}
            </p>
          </div>
          <form className="track_rating" onSubmit={handleSubmit}>
            <input
              className="rating_selector"
              type="range"
              id="rating"
              min="0"
              max="10"
              data-trackid={props.track.id}
              onChange={handleChange}
            />
            <button
              style={{ background: color }}
              type="submit"
              className="rate_button"
              onClick={() => { OnClickEvent() }}
            >
              {rating}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrackItem;
