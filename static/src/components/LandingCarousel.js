require('../../stylesheets/landingcarousel.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingCarousel extends Component {
  static propTypes = {
    currentViewIndex: PropTypes.number.isRequired,
    viewItems: PropTypes.array.isRequired,
  }


  render() {

    var contents = this.props.viewItems[this.props.currentViewIndex]

    return(
      <div className='selected-item'>
        { contents }
      </div>
    )
    
  }
}

export default LandingCarousel