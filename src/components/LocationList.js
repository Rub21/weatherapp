import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocations';

const StringToComponent = cities => (
    cities.map(city => (
     <WeatherLocation city={city} />
    ))
);

const LocationList = ({ cities }) => (
    <div>
        {StringToComponent(cities)}
    </div>
);

LocationList.PropType = {
    cities: PropTypes.array.isRequired
}
export default LocationList;
