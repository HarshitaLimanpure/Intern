// import React from 'react'
// export default function WeatherData() {

//   return (

// <>
//  <div  className= "input-group justify-content-center my-4 ">
// <div   className="card  col-4 ">
// <div  className="  col-4"><img src="" className="image" alt=""/></div>
// <div  className="tempreture  col-4">  <h2 id="temp"  className="text-center"></h2></div>
// <div  className="weather  col-4">  <h3 id="outPut"></h3></div>
// <div><h2 id="humidity"></h2></div>
// </div>
// </div>

// </>
//     )
// }
// WeatherData.js
import React from "react";
import "./WeatherData.css";

const WeatherData = ({ data }) => {
  const getWeatherImage = (weatherMain) => {
    let imagePath = "";

    switch (weatherMain) {
      case "Clouds":
        imagePath = "/images/clouds.png";
        break;
      case "Mist":
        imagePath = "/images/mist.png";
        break;
      case "Clear":
        imagePath = "/images/clear.png";
        break;
      case "Wind":
        imagePath = "/images/wind.png";
        break;
      case "Haze":
        imagePath = "/images/haze.png";
        break;
      case "Humidity":
        imagePath = "/images/humidity.png";
        break;
      case "Drizzle":
        imagePath = "/images/drizzle.png";
        break;
      case "Snow":
        imagePath = "/images/snow.png";
        break;
      case "Rain":
        imagePath = "/images/rain.png";
        break;
      default:
        imagePath = "/images/haze.png"; // Provide a default image path
    }

    return imagePath;
  };
  console.log(data);

  return (
    <>
      <div className="input-group justify-content-center my-4 main" >
        <div id="wdbg" className="card col-4">
          <div className="name">
            <h2>{data.name}</h2>
          </div>
          <div className="img clo-4">
            <img
              src={getWeatherImage(data.weather[0].main)}
              className="image"
              alt="not found"
            />
          </div>
          <div className="tempreture col-">
          <h2 id="outPut">{data.weather[0].description}</h2>
            <h2 id="temp" className="">
              {data.main.temp}°C
            </h2>
          </div>
          {/* <div className="weather col-4">
            
          </div> */}
          <div  id="below">
            <p id="wind">Wind :  {data.wind.speed} km/h</p>
            <p id="humidity">Humidity :  {data.main.humidity}</p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherData;
