import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './style.css';

// const data = { //shape indic aque esperamos una objeto de esta forma
//     temperature: 12,
//     weatherState: 'normal',
//     humidity: 10,
//     wind: 'normal'
// };

const api_key = '6650d5325c1a416b32efdde4a39d7295';
const url = 'https://api.openweathermap.org/data/2.5/forecast';
// const city = 'Buenos Aires, ar';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        this.updatecity(this.props.city);
    }

    componentWillReceiveProps(nexProps){
        if(nexProps.city!==this.props.city){
            this.setState({forecastData:null});
            this.updatecity(nexProps.city)
        }
    }
    updatecity = city => {
        //fetch or axios-> sirve para navegadores antiguos tambien
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        console.log(url_forecast);
        fetch(url_forecast)
            .then(data => (data.json()))
            .then(weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData)
                this.setState({ forecastData })
            })
    }
    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ ForecastItem>
        ));
        // return <h1>'render Items'</h1>;
        // // return days.map(day => {
        // //     return (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>)
        // // });
    }

    renderProgress() {
        return <h3>"cargando pronostifo extendido"</h3>;
    }
    render() {
        const { city } = this.props;

        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forcast-title'>  Pronostico extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;