import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocations';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Buenos Aires,ar'}/>
        <WeatherLocation city={'Lima,pe'}/>
        <WeatherLocation city={'Bogota,col'}/>
        <WeatherLocation city={'Ayacucho,pe'}/>

    </div>
);

export default LocationList;
