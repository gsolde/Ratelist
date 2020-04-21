import React, { useState, useEffect } from 'react';
import { GetRatingsByUser } from '../services/dbService';
import { getTracks } from '../services/spotifyService';
import RatedList from '../components/ratedList/ratedList';
import './home.css';

function HomePage () {

    const [trackIdList, setTrackIdList] = useState([]);
    const [rateList, setRateList] = useState(null);

    async function getTrackIds () {
        const res = await GetRatingsByUser();
        const temp = [];
        res.forEach((track) => {
            temp.push(track.trackId)
        })  
        setTrackIdList([...trackIdList, ...temp]);
        getRatedTracks (temp.reverse().join(','))
    }
    
    async function getRatedTracks (trackIdList) {
        const res = await getTracks(trackIdList);
        setRateList(res);
    }
    
    useEffect(() => {
        getTrackIds()
    },[]);

    return (
        <div className="home">
            <header className='home_header_container'>
                <nav className='nav_container'>
                    <a className='home_button_' href="/home">My ratings</a> 
                    <a className='searchRate_button_' href="/searchRate">Search & Rate</a> 
                    <a className='soulmates_button_' href="">Soulmates</a> 
                </nav>
            </header>
            <div className='ratings_container'>
                {(rateList) && <RatedList ratedTracks={rateList} />}
            </div>
        </div>
    );
}

export default HomePage