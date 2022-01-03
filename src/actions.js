
import getWeatherInfo from "./middlewares/getWeatherInfo"
import getCityInfo from "./middlewares/getCityInfo"

export const LOAD_WEATHER_INFO ='LOAD_WEATHER_INFO'
export const LOAD_CITY_INFO='LOAD_CITY_INFO'

const loadWeatherInfoSuccess=(content)=>{
    return {
        type:LOAD_WEATHER_INFO,
        payload:content
    }
}

const loadWeatherInfoFailure=()=>{
    console.log("loadWeatherInfoFailure check")
    return{
        type:LOAD_WEATHER_INFO,
        payload:{}

    }
    
}

export const loadWeatherInfo=(cityName)=>{
    console.log("check",cityName)
return async (dispatch)=>{
    try {
    const weatherInfo=await getWeatherInfo(cityName)
   // console.log("wi" , weatherInfo)
    if(weatherInfo){
        dispatch(loadWeatherInfoSuccess(weatherInfo))
        
    }
    else{
        dispatch(loadWeatherInfoFailure())
    }
}
catch(error){
    dispatch(loadWeatherInfoFailure())
console.log("loadWeatherInfoFailure")
    
}
}

}

// getWeatherInfo(cityName).then((response)=>response)
//everycall back is a different task //callbackhell



const CityInfoSuccess=(content)=>{
    return{
    type: LOAD_CITY_INFO,
    payload:content
}
}
const cityInfoFailure=(error)=>{
    return{
        type:LOAD_CITY_INFO,
        payload:[]

    }
}

export const cityInfo=(lat,lon)=>{
    return async(dispatch)=> {
        try{
        const cityInfo= await getCityInfo(lat,lon)
// if true meaning?
if(cityInfo){
    dispatch (CityInfoSuccess(cityInfo))
}
else{
 dispatch(cityInfoFailure())
}
        }
catch(error){
    dispatch(cityInfoFailure)
}

    }
}