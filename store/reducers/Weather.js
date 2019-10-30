import WeatherServiceClass from '../../service/Weather'

const initialState = { WeatherService: new WeatherServiceClass() }

export default function WeatherService(state = initialState, action) {
    let nextState
    switch (action.type) {
        default:
            return state
    }

} 

