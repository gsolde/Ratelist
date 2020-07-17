import React from 'react';
import './soulmates.css';

function Soulmates() {

  return (
    <div className="home">
      <header className="home_header_container">
        <nav className="nav_container">
          <a className="searchRate_button__" href="/searchRate">Search & Rate</a>
          <a className="myRatings_button__" href="/home">My ratings</a>
          <a className="soulmates_button__" href="/soulmates">Soulmates</a>
        </nav>
      </header>
    </div>
  );
}

export default Soulmates;
