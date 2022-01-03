import request from '../service'



const getWeatherInfo=(cityName )=>{
    console.log("2check" , cityName)
    const url=`data/2.5/weather?q=${cityName}&appid=f0f6cb412f6690b071bcf56d11597217&units=metric`
 const options={url:url}
    return request(options)
}
export default getWeatherInfo;

//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly&appid=f0f6cb412f6690b071bcf56d11597217
