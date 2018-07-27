import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherLocation from './components/WeatherLocations/'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ForecastExtended from './components/ForecastExtended';
import LocationList from './components/LocationList';
import { setCity } from './actions';
// import { store} from './store';
import './App.css';

const cities = ['Ayacucho,pe', 'Buenos Aires,ar', 'Lima,pe', 'Bogota,col', 'Madrid,es'];

class App extends Component {

  constructor() {
    super();
    this.state = { // esta menra de establecer el state es en constructor
      city: null
    };
  }

  handleSelectionLocation = city => {
    console.log("estableciendo un nuevo valor para city")
    this.setState({ city: city });
    // store.dispatch(setCity(city));
    this.props.setCity(city);
  }

  render() {
    const { city } = this.state;
    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather app
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}
              onSelectedLocation={this.handleSelectionLocation} >
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={5}>
              <div className='detail'>
                {city ? <ForecastExtended city={city}></ForecastExtended> : null}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToPropsActions =  dispatch => ({
  setCity:value => dispatch(setCity(value))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App); //Este es para conectar los componetes con el store
// export default App;
export default AppConnected;