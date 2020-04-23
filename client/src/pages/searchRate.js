import React, { useState, useEffect } from 'react';
import { searchTracks } from '../services/spotifyService';
import TrackList from '../components/trackList/trackList';
import SearchBar from '../components/searchBar/searchBar';
import './searchRate.css';

function SearchRate() {
  const [tracks, setTracks] = useState(null);

  async function getTracks(input) {
    const res = await searchTracks(input);
    setTracks(res);
  }

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div className="searchRate">
      <header className="searchRate_header_container">
        <nav className="nav_container">
          <a className="my_ratings_button" href="/home">My ratings</a>
          <a className="searchRate_button" href="/searchRate">Search & Rate</a>
          <a className="soulmates_button" href="">Soulmates</a>
        </nav>
        <div className="search_bar">
          <SearchBar className="search_input" getTracks={getTracks} />
        </div>
      </header>
      <div className="tracks">
        {tracks && <TrackList tracks={tracks} />}
      </div>
    </div>
  );
}

export default SearchRate;
