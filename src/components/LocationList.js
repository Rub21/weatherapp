import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocations';
import './style.css'
// container y presetation component, 
// container only have the loging, presetation contianer has the vizualization

const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city =>{
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    }
    //se crea este componente para pasar cada lista de la ciudad y que se convierta en componentes
    const StringToComponent = cities => (
        cities.map(city => (
            <WeatherLocation 
            key={city} 
            city={city}
            onWeatherLocationClick={()=> handleWeatherLocationClick(city)}// esto esta pasando una funcion 
            />
        ))
    );

    return (<div className='locationList'>
        {StringToComponent(cities)}
    </div>)
};

LocationList.PropType = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}
export default LocationList;
