import axios from "axios";

const client= axios.create({
    baseURL:"https://api.openweathermap.org/"
})

const request=(options)=>{
   
   // options.url.append("&appid=f0f6cb412f6690b071bcf56d11597217")
 const onSuccess=(response)=>{
return response;
  

 }
 const onError=(error)=>{
 console.error(error)

Promise.reject(error.message)
}
console.log("options" , options)  
  return client(options).then(
      onSuccess
  )
  .catch(onError)
}

export default request;