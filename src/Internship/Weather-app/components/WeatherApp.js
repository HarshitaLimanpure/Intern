// import React from 'react'
// import Search from './Search'
// import WeatherData from './WeatherData'

// export default function WeatherApp() {
//     return (

// <>
// <Search/>
// <WeatherData/>





// </>
//     )
// }
import React, { useState } from 'react';
import Search from './Search';
import WeatherData from './WeatherData';
import './WeatherApp.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <div className="bg">
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherData data={weatherData} />}
      </div>
    </>
  );
};

export default WeatherApp;
