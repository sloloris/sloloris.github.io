require('../../stylesheets/experience.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Experience extends Component {


  render() {
    return(
      <div>
        <div className='project-section'>
          <div className='experience-section-header'>
            Projects
          </div>
          <ul className='list'>
            <li>FriendKeeper - a simple email-automation app to help you stay in touch with friends and family with minimal effort. Stack: React/Redux, JS, Python, Flask, Postgres, Google APIs, OAuth2.0. 
                <br />
                <a href='https://github.com/sloloris/hb-final-project' target='_blank'>See it on Github.</a>
            </li>
          </ul>
        </div>
        <div className='see-linkedin'>
          For information on my educational background and work experience, please <a href='https://www.linkedin.com/in/isabelle-miller/' target='_blank'>see my LinkedIn.</a>
        </div>
      </div>
    )
  }
}

export default Experience