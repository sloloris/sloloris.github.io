require('../../stylesheets/app.scss')

import React, { Component, PropTypes } from 'react';
import LandingMenuContainer from '../containers/LandingMenuContainer';
import LandingCarouselContainer from '../containers/LandingCarouselContainer';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';

class Landing extends Component {

  render() {
    return(
      <div className='landing-contents'>
        <div className='menu-container'>
          <LandingMenuContainer menuItems={['ABOUT', 'PROJECTS', 'EXPERIENCE']} />
          <div className='logo-container'>
            <a href='https://github.com/sloloris' target='_blank'><img src='/images/github_logo.png' className='logo-img' /></a>
            <a href='https://www.instagram.com/belleandcompass/' target='_blank'><img src='/images/instagram_logo.png' className='logo-img' /></a>
            <a href='https://www.linkedin.com/in/isabelle-miller/' target='_blank'><img src='/images/linkedin_logo.png' className='logo-img'/></a>
          </div>
        </div>

        <div className='carousel-container'>
          <LandingCarouselContainer 
            viewItems={[<div className='carousel-item'><About /></div>,
                        <div className='carousel-item'><Projects /></div>, 
                        <div className='carousel-item'><Experience /></div>]} />
        </div>
      </div>
    )
  }
}

export default Landing