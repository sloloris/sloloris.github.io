import React, { Component, PropTypes } from 'react';
import LandingMenuContainer from '../containers/LandingMenuContainer';
import LandingCarouselContainer from '../containers/LandingCarouselContainer';

class Landing extends Component {

  render() {
    return(
      <div className='landing-contents'>
        <div className='menu-container'>
          <LandingMenuContainer menuItems={['About', 'Portfolio', 'CV']} />
        </div>
        <div className='carousel-image-container'>
          <LandingCarouselContainer />
        </div>
      </div>
    )
  }
}

export default Landing