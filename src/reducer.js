import { combineReducers } from "redux"
import { LOAD_WEATHER_INFO,LOAD_CITY_INFO } from "./actions"

const initialState={currentWeatherInfo:null}
 const currentWeatherReducer=(state=initialState,action)=>{

    switch(action.type){
        case LOAD_WEATHER_INFO:
            return {...state, currentWeatherInfo: action.payload}
//immutable way of updating redux store
         default:
             return state
    }
}
 
const initalCityState={cityInfo:null}
const cityReducer=(state=initalCityState,action)=>{
    switch(action.type){
        case LOAD_CITY_INFO:
            return{...state,cityInfo:action.payload}
            default:
                return state
    }
}


const reducer = combineReducers(
 {
     currentWeather : currentWeatherReducer,
     cityReducer: cityReducer
 }
)
export default reducer