import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/weathers';
import './styles.css'


const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return CLOUD;
        case CLOUDY:
            return CLOUDY;
        case SUN:
            return SUN;
        case RAIN:
            return RAIN;
        case SNOW:
            return SNOW;
        case WINDY:
            return WINDY;
        default:
            return 'android';
    }
}

const getWeatherIcons = (weatherState) => {
    return (<FontAwesome className='wicon'
        name={stateToIconName(weatherState)}
        size="4x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />);
}


const WeatherTeamperature = ({ temperature, weatherState }) => (
    <div className='weatherTeamperatureCont'>
        {getWeatherIcons(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>C*</span>

    </div>
);

WeatherTeamperature.propTypes = { //para la validacion de datos que vinen
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}
export default WeatherTeamperature;