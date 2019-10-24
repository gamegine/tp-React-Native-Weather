import Axios from 'axios';

import config from '../config.json'
const url = config.openweathermap.url

export default class Weather{
    getWeather(loc){
        return Axios.get(url+`&q=${loc}`)
    }
}