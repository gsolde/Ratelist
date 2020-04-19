import React from 'react';
import './landing.css'

function LandingPage () {
    return (
        <div className="landing">
            <header className="landing_header">
                <h1>RateList</h1>
                <p>Rate songs and find your soulmates</p>
                <button className="login_button" onClick={(e) => {e.preventDefault(); window.location.href='http://localhost:3001/auth/spotify'}}>
                    Login to Spotify
                </button>
            </header>
        </div>
    );
}

export default LandingPage