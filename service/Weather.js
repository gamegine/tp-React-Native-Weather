import Axios from 'axios';

const token = `b6907d289e10d714a6e88b30761fae22`
const url = `https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${token}`

export default class Weather{
    getWeatherHome(){
        return Axios.get(url)
    }
}