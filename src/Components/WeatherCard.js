import React from 'react'
import moment from "moment"
const WeatherCard = ({currentWeatherData}) => {
  console.log("cwd",currentWeatherData)
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "images/weather1.png"
        })`,
      }}
    >
      <h1> {currentWeatherData?.data?.main?.temp} &deg;C </h1>
      <h2>&#x231A; {moment.unix(currentWeatherData?.data?.dt).format("h:mm:ss a")}</h2>
      <h2>{currentWeatherData?.data?.name}</h2>
      <h2>{currentWeatherData?.data?.weather[0]?.main}</h2>
      <h2>Pressure {currentWeatherData?.data?.main?.pressure}</h2>
      <h2>Feels like {currentWeatherData?.data?.main?.feels_like}</h2>
      <h2>&uarr; {currentWeatherData?.data?.main?.temp_max}</h2>
      <h2>&darr; {currentWeatherData?.data?.main?.temp_min} </h2>
      <h2>Humidity {currentWeatherData?.data?.main?.humidity} </h2>
      <h2>Latitude {currentWeatherData?.data?.coord?.lat} &deg; </h2>
      <h2>Longitude {currentWeatherData?.data?.coord?.lon} &deg; </h2>
      <h2>
        
        {moment
          .unix(currentWeatherData?.data?.sys?.sunrise)
          .format("h:mm:ss a")}
      </h2>
      <h2>
        sunset{" "}
        {moment.unix(currentWeatherData?.data?.sys?.sunset).format("h:mm:ss a")}
      </h2>
    </div>
  );
};
export default WeatherCard;
