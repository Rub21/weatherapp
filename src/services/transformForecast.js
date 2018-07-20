import moment from 'moment';
import 'moment/locale/es'; //Esto se importa par aque la fecha sea en spanish
import transformWeather from './transformWeather';
const transformForecast =(data) =>(
    data.list.filter(item => { //filtra los items de hora 7,13,19
       return moment.unix(item.dt).hour() === 7 ||
        moment.unix(item.dt).hour() === 13 ||
        moment.unix(item.dt).hour() === 19;}
    ).map(item=>({ //retoramos lo que se requiere para la renderizacion
        weekDay: moment.unix(item.dt).format('ddd'),
        hour: moment.unix(item.dt).hour(),
        data:transformWeather(item)
    }))
);
export default transformForecast;