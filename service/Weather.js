import Axios from 'axios';

import config from '../config.json'
const url = config.openweathermap.url

export default class Weather{
    getWeather(loc){
        console.log("get Weather :",loc)
        return Axios.get(url+`&q=${loc}`)
    }
    getGeoLocWeather(loc){
        console.log("get Weather :",loc)
        return Axios.get(url+`&lat=${loc.latitude}&lon=${loc.longitude}` )
    }
}