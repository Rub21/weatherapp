import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from '../components/ForecastExtended'

class ForecastExtendedContainer extends Component {
  render() {
    return (
      this.props.city && //con esto se hace la svalidacion si existe o no
         <ForecastExtended city={this.props.city}></ForecastExtended>
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired
}

const mapStateProps = state => ({ city: state.city });

export default connect(mapStateProps,null)(ForecastExtendedContainer);
