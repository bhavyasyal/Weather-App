import React, { useEffect, useState } from "react";
import "./CSS/todo.css";
import { connect } from "react-redux";
import { loadWeatherInfo } from "../actions";
import moment from "moment";
import { Link } from "react-router-dom";
import WeatherCard from './WeatherCard'
function Weather({ currentWeatherData, fetchCurrentWeather }) {
  
  const [cityName, setCityName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };
  const submitHandler = () => {
    if (cityName.length > 0) {
      setErrorMessage("");
      fetchCurrentWeather(cityName);
    } else {
      setErrorMessage("Enter valid city name");
    }
  };

  useEffect(() => {
    // fetchCurrentWeather('delhi')
    currentWeatherData && Object.keys(currentWeatherData).length === 0
      ? setErrorMessage("enter valid city name")
      : setErrorMessage("");
  }, [currentWeatherData]);
  //check empty


  console.log("cw", currentWeatherData, fetchCurrentWeather);
 

  return (
    <div>
      <div class="sb-example-1">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Search for a city's weather"
            //value={}
            onChange={cityNameHandler}
          />
          <button onClick={submitHandler} class="searchButton">
            <i class="fa fa-search search-icon"></i>
          </button>
        </div>
      </div>

      {errorMessage.length > 0 ? (
        <span style={{ color: "red" }}>{errorMessage}</span>
      ) : null}


      {currentWeatherData === null ? (
        <span className="default-label">Enter City Name </span>
      ) : (
        <div className="container">
          <Link className="detail-link" to={`/city?lat=${currentWeatherData?.data?.coord?.lat}&lon=${currentWeatherData?.data?.coord?.lon}`}> Click here to see detailed weather forecast</Link>
       <WeatherCard currentWeatherData={currentWeatherData}/>
        </div>
      )}


      {/*
  const a={moment.unix(currentWeatherData?.data?.sys?.sunset).format('h')
if(a>=6 && a<=20)
{
<img src=''/>
}
else 
{
  <img src='/>
}
*/}
    </div>
  );
}
//read
//reducer
function mapStateToProps({ currentWeather }) {
  //console.log("hii",currentWeather)

  return {
    currentWeatherData: currentWeather.currentWeatherInfo,
  };
}
//write
//acion
const mapDispatchToProps = {
  fetchCurrentWeather: loadWeatherInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
