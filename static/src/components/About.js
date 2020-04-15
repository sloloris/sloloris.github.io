require('../../stylesheets/about.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {


  render() {
    return(
      <div>
        <div className="header-text"><p className='name'>Isabelle Miller</p> is a software engineer & policy professional.
        </div>
        <div className='about-text'>
          Hi, my name is Isabelle. I like to code, travel, write, bake, sing, and think about how tech can be harnessed to help the earth and to improve governance, social equality, and equity in education. I also hold a Master of Public Policy from the Hertie School of Governance in Berlin and speak German, Spanish, Thai, and rusty Portuguese. I prefer my coffee with milk and my cookies with chocolate.
          <br />
          <br />
          To contact me directly, feel free to reach out at isabelle [dot] k [dot] miller [at] gmail.com.
        </div>
      </div>
    )
  }
}

export default About