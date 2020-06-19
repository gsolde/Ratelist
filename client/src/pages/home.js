import React, { useState, useEffect } from 'react';
import { GetRatingsByUser, GetSortedRatingsByUser } from '../services/dbService';
import { getTracks } from '../services/spotifyService';
import RatedList from '../components/ratedList/ratedList';
import './home.css';

function HomePage() {

  const [rateList, setRateList] = useState(null);
  const [sorting, setSorting] = useState('date');

  //! *** TEST CODE FROM HERE ON ***

  // TODO: retrieve users and ratings from DB where trackID equals trackID, and user is not current username.
  // TODO: insert username in an object, with its value being the difference between his rating and the current user rating

  //! *** END OF TEST CODE ***

  async function getTrackIds(flag) {
    let res = [];
    const trackIds = [];
    const trackRatings = [];
    const sortingCode = flag;

    if (sortingCode === 1) {
      res = await GetRatingsByUser()
      setSorting('date');
    } else {
      res = await GetSortedRatingsByUser()
      setSorting('rating');
    }

    res.forEach((track) => {
      trackIds.push(track.trackId);
      trackRatings.push(track.rating);
    });
    
    const spotifyTrackList = await getTracks(trackIds);
    for (let i = 0; i < trackRatings.length; i++) {
      spotifyTrackList.tracks[i].rating = trackRatings[i]; // insert track rating to each track on spotify res obj.
    }

    setRateList(spotifyTrackList);
  }

  useEffect(() => {
    getTrackIds(1);
  }, []);

  return (
    <div className="home">
      <header className="home_header_container">
        <nav className="nav_container">
          <a className="myRatings_button_" href="/home">My ratings</a>
          <a className="searchRate_button_" href="/searchRate">Search & Rate</a>
          <a className="soulmates_button_" href="">Soulmates</a>
        </nav>
      </header>
      <div className="sorting_buttons_container">
        <button className= {sorting === 'date' ? "selected_sorting_button" : "sorting_button"} onClick={() => { getTrackIds(1) }}>Sort by date</button>
        <button className={sorting === 'rating' ? "selected_sorting_button" : "sorting_button"} onClick={() => { getTrackIds(0) }}>Sort by rating</button>
      </div>
      <div className="ratings_container">
        {(rateList) && <RatedList className="rated_list" ratedTracks={rateList} />}
      </div>
    </div>
  );
}

export default HomePage;
