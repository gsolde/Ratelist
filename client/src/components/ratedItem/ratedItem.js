import React, { useState } from 'react';
import './ratedItem.css';

function RatedItem (props) {
return (
    <div>
        <div  className='track_container'>
            <div className='album_cover'>
                <img src={`${props.track.album.images[0].url}`} alt='album cover'/>
            </div>
            <div className='track_info_rating'>
                <div className='track_details'>
                    <p className='track_name'>{props.track.name}</p>
                    <p className='album_name'>{props.track.album.name}</p>
                </div>
                {/* <form className='track_rating' onSubmit={handleSubmit}>
                    <input 
                        className='rating_selector' 
                        type='range' 
                        id='rating' 
                        min='0' 
                        max='10'
                        data-trackid={props.track.id}
                        onChange={handleChange}
                    ></input>
                    <button type='submit' className='rate_button'>Rate track</button>
                </form> */}
            </div>
        </div>
    </div>
)
}

export default RatedItem;