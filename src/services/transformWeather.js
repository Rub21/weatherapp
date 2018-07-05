import convert from 'convert-units';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weathers';

 const getTemp = kelvin => {
    return parseFloat( convert(kelvin).from('K').to('C').toFixed(2));
}

const getWeatherState = weather => { //vrions simplificada de es6 para funciones
    return SUN;
}
const transformWeather = (weather_data) => {
    console.log(weather_data)
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(this.weather);
    const temperature = getTemp(temp)
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;