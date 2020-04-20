import React, { useState, useEffect } from 'react';
import searchTracks from '../services/spotifyService';
import TrackList from '../components/trackList/trackList';
import SearchBar from '../components/searchBar/searchBar';
import './searchRate.css';

function SearchRate () {

    const [tracks, setTracks] = useState(null);

    async function getTracks (input) {
        const res = await searchTracks(input);
        setTracks(res);
    }

    useEffect(() => {
        getTracks()
    },[]);

    return (
        <div className="searchRate">
            <nav className='nav_container'>
                <a className='home_button' href="/home">Home</a> 
                <a className='searchRate_button' href="/searchRate">Search & Rate</a> 
            </nav>
            <div className='search'>
                <SearchBar getTracks={getTracks}/>
            </div>
            {tracks && <TrackList tracks={tracks} />}
        </div>
    );
}

export default SearchRate