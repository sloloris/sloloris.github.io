require('../../stylesheets/app.scss')

import React, { Component, PropTypes } from 'react';
import LandingMenuContainer from '../containers/LandingMenuContainer';
import LandingCarouselContainer from '../containers/LandingCarouselContainer';

class Landing extends Component {

  render() {
    return(
      <div className='landing-contents'>
        <div className='menu-container'>
          <LandingMenuContainer menuItems={['ABOUT', 'PORTFOLIO', 'CV']} />
        </div>
        <div className='carousel-container'>
          <LandingCarouselContainer 
            viewItems={[<div className='carousel-item'>Isabelle Miller is a software engineer for hire based in SF, CA.</div>,
                        <div className='carousel-item'>PORTFOLIO</div>, 
                        <div className='carousel-item'>CV</div> ]} />
        </div>
      </div>
    )
  }
}

export default Landing