require('../../stylesheets/app.scss')

import React, { Component, PropTypes } from 'react';
import LandingMenuContainer from '../containers/LandingMenuContainer';
import LandingCarouselContainer from '../containers/LandingCarouselContainer';
import Portfolio from './Portfolio';
// import linkedin from '../../images/linkedin_logo.png'

class Landing extends Component {

  render() {
    return(
      <div className='landing-contents'>
        <div className='menu-container'>
          <LandingMenuContainer menuItems={['ABOUT', 'PORTFOLIO']} />
          <div className='logo-container'>
            <a href='https://github.com/sloloris' target='_blank'><img src='/images/github_logo.png' className='logo-img' /></a>
            <a href='https://www.instagram.com/belleandcompass/' target='_blank'><img src='/images/instagram_logo.png' className='logo-img' /></a>
            <a href='https://www.linkedin.com/in/isabelle-miller/' target='_blank'><img src='/images/linkedin_logo.png' className='logo-img'/></a>
          </div>
        </div>

        <div className='carousel-container'>
          <LandingCarouselContainer 
            viewItems={[<div className='carousel-item'><p className='isabelle-miller'>Isabelle Miller</p> is a software engineer for hire based in SF, CA.</div>,
                        <div className='carousel-item'><Portfolio /></div>, ]} />
        </div>
      </div>
    )
  }
}

export default Landing