require('../../stylesheets/app.scss')

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
        <div className='carousel-container'>
          <LandingCarouselContainer 
            viewItems={[<div className='carousel-item-text'>ABOUT</div>,
                        <div className='carousel-item-text'>PORTFOLIO</div>, 
                        <div className='carousel-item-text'>CV</div> ]} />
        </div>
      </div>
    )
  }
}

export default Landing