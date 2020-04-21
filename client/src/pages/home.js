import React, { useState, useEffect } from 'react';
import { GetRatingsByUser } from '../services/dbService';
import { getTracks } from '../services/spotifyService';
import RatedList from '../components/ratedList/ratedList';
import './home.css';

function HomePage () {

    const [trackIdList, setTrackIdList] = useState([]);
    const [trackRatings, setTrackRatings] = useState([]);
    const [rateList, setRateList] = useState(null);

    async function getTrackIds () {

        const res = await GetRatingsByUser();
        const trackIds = [];
        const trackRatings = [];

        res.forEach((track) => {
            trackIds.push(track.trackId)
            trackRatings.push(track.rating)
        })  
        setTrackIdList(trackIds); //latest rated tracks will be displayed first.
        setTrackRatings(trackRatings); //reversing ratings to match reversed trackIds array.
        
        const spotifyTrackList = await getTracks(trackIds);
        for (let i = 0; i < trackRatings.length; i++) { 
            spotifyTrackList.tracks[i].rating = trackRatings[i]; //insert track rating to each track on spotify res obj.
        }
        
        setRateList(spotifyTrackList);
    }
    




    useEffect(() => {
        getTrackIds()
    },[]);

    return (
        <div className="home">
            <header className='home_header_container'>
                <nav className='nav_container'>
                    <a className='myRatings_button_' href="/home">My ratings</a> 
                    <a className='searchRate_button_' href="/searchRate">Search & Rate</a> 
                    <a className='soulmates_button_' href="">Soulmates</a> 
                </nav>
            </header>
            <div className='ratings_container'>
                {(rateList) && <RatedList className='rated_list' ratedTracks={rateList} trackRatings={trackRatings} />}
            </div>
        </div>
    );
}

export default HomePage