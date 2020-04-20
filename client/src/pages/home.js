import React, { useState, useEffect } from 'react';
import './home.css';

function HomePage () {


    // const [tracks, setTracks] = useState(null);

    // async function getTracks (input) {
    //     const res = await searchTracks(input);
    //     setTracks(res);
    // }

    // useEffect(() => {
    //     getTracks()
    // },[]);

    return (
        <div className="home">
            <nav className='nav_container'>
                <a className='home_button_' href="/home">Home</a> 
                <a className='searchRate_button_' href="/searchRate">Search & Rate</a> 
            </nav>
        </div>
    );
}

export default HomePage