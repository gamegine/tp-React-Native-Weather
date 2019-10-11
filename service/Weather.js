export default class Weather{
    getWeatherHome(){
        return {
            weather:{
                main:'Beau Temps',
                description:`Il fait beau aujourd'hui`
            },
            main:{
                temps:'13',
                temps_min:'13',
                temps_max:'21',
                humidity:'92',
                pressure:'1009'
            },
            wind:{
                speed:'10'
            },
            sys:{
                sunrise: 1560281377,
                sunset: 1560333478
            }
        }
    }
}