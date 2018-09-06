import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocations/'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';

import './App.css';

const cities = ['Ayacucho,pe', 'Buenos Aires,ar', 'Lima,pe', 'Bogota,col', 'Madrid,es'];

class App extends Component {

  render() {
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
            <LocationListContainer cities={cities}>s</LocationListContainer>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={5}>
              <div className='detail'>
               <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
// Establecer los PropTypes, para saber que le vamos a pasear por los props
export default App;
// - Burbujeo es cuando un componente que manda una accion a su padre para ejecutar otros. o elevar su estado al padre App.js
