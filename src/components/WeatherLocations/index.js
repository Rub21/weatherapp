import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/';
import transformWeather from './../../services/transformWeather';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const location = 'Buenos Aires, ar';
const api_key = '6650d5325c1a416b32efdde4a39d7295';
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component {

    constructor() { //Primero se ejecuta aqui.
        super();
        this.state = {
            city: 'Buenos Aires',
            data: null //valor inicial de data
        };
        console.log('constructor')

    }

    handleUpdateClick = () => {
        console.log('actualizar')
        fetch(api_weather)
            .then(data => {
                return data.json();
            }).then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({ data });
                console.log(weather_data)
            });
    }
    componentWillMount() { //este componente se ejecuta una sola ves cuando se inicia al app.
        // console.log('componentWillMount')
        this.handleUpdateClick();
    }

    componentDidMount() { //depues de que se hace el render. este se ejecuta una ves nada ma en la vida del componente
        console.log('componentDidMount')
    }

    componentWillUpdate() { //se ejecuta cada ves que se ejecuta un update del state
        console.log('componentWillUpdate')
    }
    componentDidUpdate() { //depues del render cada vez que se ejecuta el update
        console.log('componentDidUpdate')

    }

    render = () => {
        console.log('render')
        const { city, data } = this.state;
        return (<div className='weatherLocationCont'>
            <Location city={city} />
            {data ? <WeatherData data={data} />: <CircularProgress/>}
            <button onClick={this.handleUpdateClick} >Actualizar</button>
        </div>)

    };
}
export default WeatherLocation;