require('../../stylesheets/portfolio.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Portfolio extends Component {


  render() {
    return(
      <ul className='project-list'>
        <li><b>FriendKeeper</b> - a simple email-automation app to help you stay in touch with friends and family with minimal effort. Stack: React/Redux, JS, Python, Flask, Postgres, Google APIs, OAuth2.0. 
            <br />
            <a href='https://github.com/sloloris/hb-final-project' target='_blank'>See it on Github.</a>
        </li>

      </ul>
    )
  }
}

export default Portfolio