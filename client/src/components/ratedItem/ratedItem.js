import React from 'react';
import './ratedItem.css';

function RatedItem (props) {

    console.log(props)
return (
    <div>
        <div  className='rating_container'>
            <div className='album_cover'>
                <img className='image' src={`${props.track.album.images[0].url}`} alt='album cover'/>
            </div>
            <div className='track_info_rating'>
                <div className='track_details'>
                    <p className='track_name'>{props.track.name}</p>
                    <p className='album_name'>{props.track.album.name} - {props.track.artists[0].name}</p>
                </div>
            </div>
                <p className="rating">{props.track.rating}</p>
        </div>
    </div>
)
}

export default RatedItem;