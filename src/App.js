import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocations/'
import LocationList from './components/LocationList';
import './App.css';

const cities = ['Ayacucho,pe', 'Buenos Aires,ar', 'Lima,pe', 'Bogota,col'];


class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities ={cities}></LocationList>
      </div>
    );
  }
}

export default App;
