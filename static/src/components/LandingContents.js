import React, { Component, PropTypes } from 'react';
import PropTypes from 'prop-types';

class LandingCarousel extends Component {
  static propTypes = {
    currentViewIndex: PropTypes.number.isRequired,
  }

  render() {

    var currentImage = 'CURRENT_IMAGE'

    switch(this.props.currentViewIndex) {
      case 0:
        contents = 'ABOUT_PAGE'
        break;
      case 1: 
        contents = 'PORTFOLIO'
        break;
      case 2:
        contents = 'CV'
        break;

      default:
        break;
    }
    return(
      <div className='selected-image'>
        { currentImage }
      </div>
    )
    
  }
}

export default LandingCarousel