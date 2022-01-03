
import React from 'react'
import moment from "moment"

const CityWeatherCard = ({dailyWeatherData}) => {
  console.log("dwd",dailyWeatherData)
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "images/weather1.png"
        })`,
      }}
    >

      <h1> {moment.unix(dailyWeatherData.dt).format("dddd, MMMM Do YYYY")}  </h1>
      <h2> Pressure :{dailyWeatherData.pressure}</h2>
      <h2> Humidity :{dailyWeatherData.humidity}</h2>
      <h2>  &#x1F31E;{moment.unix(dailyWeatherData.sunrise).format("h:mm:ss a")}</h2>
      <h2>  &#x1F31E; {moment.unix(dailyWeatherData.sunset).format("h:mm:ss a")}  </h2>
      <h2> &uarr;{dailyWeatherData.temp.max} &deg;C</h2>
      <h2> &darr;{dailyWeatherData.temp.min} &deg;C</h2>
      <h2> {dailyWeatherData.weather[0].description}</h2>
     
    </div>
  );
};
export default CityWeatherCard;
