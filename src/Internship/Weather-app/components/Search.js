import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'

const Search = ({ onSearch }) => {
  const [cityName, setCityName] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=fc709bd47a4e2cb9bbdedd53f5ab9314`
      );

      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <div className="input-group justify-content-center my-4">
        <div className="form-outline col-4 mx-2" data-mdb-input-init>
          <input
            type="search"
            id="cityName"
            className="form-control border  my-4"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <button
          type="button"
          id="getWeather"
          className=" mx-2 my-4"
          onClick={handleSearch}
          data-mdb-ripple-init
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
