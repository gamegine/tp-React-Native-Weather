const initialState = { WeatherService: null }

export default function WeatherService(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_WeatherService':
                nextState = {
                    ...state,
                    WeatherService: action.value
                }
            return nextState || state
        default:
            return state
    }

} 

