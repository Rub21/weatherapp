import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from '../actions';
import LocationList from '../components/LocationList';

// container y presetation component, 
// container only have the loging, presetation contianer has the vizualization

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation} >
            </LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

//Este componente como tiene connect tiene acceso al estado de la aplicacion.
const LocationListContainerConnected = connect(null, mapDispatchToPropsActions)(LocationListContainer);
export default LocationListContainerConnected;