require('../../stylesheets/about.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Experience extends Component {


  render() {
    return(
      <div>
        <div className="header-text"><p className='name'>Isabelle Miller</p> is a software engineer <a href='https://www.linkedin.com/in/isabelle-miller/' target='_blank'>for hire</a> based in SF, CA.</div>
        <div className='about-text'>
          Hi, my name is Isabelle. I like to code, travel, write, bake, paint, sing (currently <a href='http://www.sfchoral.org/site/' target='_blank'>here</a>), and think about how tech can be harnessed to improve governance, social equality, equity in education, and quality of life in the developing world. I also hold a Master of Public Policy from the Hertie School of Governance in Berlin and speak German, Spanish, Thai, and rusty Portuguese. I prefer my coffee with milk and my cookies with chocolate.
          <br />
          <br />
          To contact me directly, feel free to reach out at me @ isabellekmiller.com.
        </div>
      </div>
    )
  }
}

export default Experience