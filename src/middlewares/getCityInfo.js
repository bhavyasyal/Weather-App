import request from '../service'
const getCityInfo=(lat,lon)=>{
  
    const url=`data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=f0f6cb412f6690b071bcf56d11597217&units=metric` 
    const options={url:url }
    // const options={url:url ,method:POST}
    return request(options)
  }
  export default getCityInfo;