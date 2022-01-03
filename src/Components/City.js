import React, {useEffect}from 'react'
import { connect } from "react-redux"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { cityInfo } from "../actions"
import {useLocation} from "react-router-dom"
import CityWeatherCard from'./CityWeatherCard'
// why {} //destructuring
function City({cityData,fetchCity}){
const weeklyForecast=cityData?.data?.daily;

const  location=useLocation()
const queryParams=new URLSearchParams(location.search)
console.log("qp",queryParams)
const lat=queryParams.get("lat");
const lon=queryParams.get("lon");
console.log('lat & lon', lat,lon)
      useEffect(()=>{
          fetchCity(lat,lon)
console.log("checking city data",cityData,fetchCity)
      },[])

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(

        <div>
            <Slider {...settings} >
{weeklyForecast?.map((forecast)=>{
    return(<CityWeatherCard key={forecast.weather[0].id} dailyWeatherData ={
        forecast
    }

    />)

})}
</Slider>
        </div>
    )
}

//reducer
//****cityReducer ===doubt */
function mapStateToProps({cityReducer}){
    console.log("cityReducer" , cityReducer)

    return{
cityData:cityReducer.cityInfo
    }
}


// cityInfo->Action 

const mapDispatchToProps={

    fetchCity:cityInfo
    
 
}

export default connect(mapStateToProps,mapDispatchToProps)(City)