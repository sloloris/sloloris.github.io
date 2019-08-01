require('../../stylesheets/experience.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Experience extends Component {


  render() {
    return(
      <div>
        <div className='see-linkedin bold-text'>
          To see information on my work experience, please <a href='https://www.linkedin.com/in/isabelle-miller/' target='_blank'>see my LinkedIn</a> or <a href='/IMiller_resume.pdf' target="_blank">click here to download my resume.</a>
        </div>
    </div>
    )
  }
}

export default Experience