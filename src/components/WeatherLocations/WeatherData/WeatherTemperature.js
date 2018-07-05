import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE
} from './../../../constants/weathers';
import './styles.css'


const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return 'address-book';
        case CLOUDY:
            return '500px';
        case SUN:
            return 'blind';
        case RAIN:
            return 'android';
        case SNOW:
            return 'arrows-alt';
        case WINDY:
            return 'arrow-down';
        case THUNDER:
            return 'android';
        case DRIZZLE:
            return 'drizzle';
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