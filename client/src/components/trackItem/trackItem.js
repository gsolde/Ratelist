import React from 'react';
import './trackItem.css';

function TrackItem (props) {
return (
    <div>
        <div trackid={props.track.id} className='track_container'>
            <div className='album_cover'>
                <img src={`${props.track.album.images[0].url}`} alt='album cover'/>
            </div>
            <div className='track_info_rating'>
                <div className='track_details'>
                    <p className='track_name'>{props.track.name}</p>
                    <p className='album_name'>{props.track.album.name}</p>
                </div>
                {/* <div className='track_rating'> */}
                    <form className='track_rating'>
                        <input 
                            className='rating_selector' 
                            type='range' 
                            id='rating' 
                            min='0' 
                            max='10'
                        ></input>
                        <button type='submit' className='rate_button' onClick={() => console.log('Rated!')}>Rate track</button>
                    </form>
                {/* </div> */}
            </div>
        </div>
    </div>
)
}

export default TrackItem;