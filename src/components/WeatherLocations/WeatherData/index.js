import React from 'react';
import WeatherTeamperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';

import './styles.css'

const WeatherData = ({ data }) => { //desstructuring, no olvides
    const { temperature, weatherState, humidity, wind } = data;
    return (<div className='weatherDataCont'>
        <WeatherTeamperature temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>)
};

WeatherData.propTypes ={
    data: PropTypes.shape({ //shape indic aque esperamos una objeto de esta forma
        temperature: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
        
    })
}
export default WeatherData;