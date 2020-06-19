import React, { useState, useEffect } from 'react';
import { GetRatingsByUser, GetSortedRatingsByUser } from '../services/dbService';
import { getTracks } from '../services/spotifyService';
import RatedList from '../components/ratedList/ratedList';
import './home.css';

function HomePage() {
  const [trackIdList, setTrackIdList] = useState([]);
  const [trackRatings, setTrackRatings] = useState([]);
  const [rateList, setRateList] = useState(null);
  const [sorted, setSorted] = useState(false)

  //! *** TEST CODE FROM HERE ON ***

  // TODO: retrieve users and ratings from DB where trackID equals trackID, and user is not current username.
  // TODO: insert username in an object, with its value being the difference between his rating and the current user rating

  //! *** END OF TEST CODE ***

  async function getTrackIds(flag) {
    let sortingCode = flag
    let res;
    if (sortingCode === 1) {
      res = await GetRatingsByUser()
    } else {
      res = await GetSortedRatingsByUser()
    }
    console.log(sorted);
    const trackIds = [];
    const trackRatings = [];

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
        <button onClick={() => { getTrackIds(0) }}>Sort by rating</button>
        <button onClick={() => { getTrackIds(1) }}>Sort by latest</button>
      </header>
      <div className="ratings_container">
        {(rateList) && <RatedList className="rated_list" ratedTracks={rateList} />}
      </div>
    </div>
  );
}

export default HomePage;
