import React, { useState, useEffect } from 'react';
import './searchBar.css';

function SearchBar(props) {
  const [input, setInput] = useState('');

  const handleTrackChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    props.getTracks(input);
  });

  return (
    <div className="search_bar_container">
      <form className="search_bar">
        <input
          className="input_field"
          type="text"
          value={input}
          onChange={handleTrackChange}
          placeholder="Search tracks"
        />
      </form>
    </div>
  );
}

export default SearchBar;
