import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingCarousel extends Component {
  static propTypes = {
    currentViewIndex: PropTypes.number.isRequired,
  }

  render() {

    var contents = 'PLACEHOLDER';

    switch(this.props.currentViewIndex) {
      case 0:
        contents = <div>ABOUT PAGE</div>
        break;
      case 1: 
        contents = <div>PORTFOLIO</div>
        break;
      case 2:
        contents = <div>CV</div>
        break;

      default:
        break;
    }
    return(
      <div className='selected-image'>
        { contents }
      </div>
    )
    
  }
}

export default LandingCarousel