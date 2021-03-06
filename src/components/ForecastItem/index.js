import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocations/WeatherData'


const ForecastItem =({weekDay, hour, data}) =>(
    <div>
    <h2> {weekDay} - {hour} hs</h2>
    <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.propTypes ={
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({ //shape indic aque esperamos una objeto de esta forma
        temperature: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
        
    })
}

export default ForecastItem;