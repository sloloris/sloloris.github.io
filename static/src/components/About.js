require('../../stylesheets/about.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Experience extends Component {


  render() {
    return(
      <div>
        <div><p className='name'>Isabelle Miller</p> is a software engineer <a href='https://www.linkedin.com/in/isabelle-miller/' target='_blank'>for hire</a> based in SF, CA.</div>
        <div className='about-text'>
          Hi, my name is Isabelle. I like to code, travel, write, bake, paint, and think about how tech can be harnessed to improve governance, social equality, equity in education, and quality of life in the developing world. I prefer my coffee with milk and my cookies with chocolate.
          <br />
          <br />
          To contact me directly, feel free to reach out at me @ isabellekmiller.com.
        </div>
      </div>
    )
  }
}

export default Experience