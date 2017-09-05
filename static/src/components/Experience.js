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
            <br />
            <br />
            <li><a href='http://isabellekmiller.com/IsabelleandDiegosFinalResearchProject/'>Ethnic Diversity and Political Rights</a> - my very first foray into coding, this page is simply a presentation of a pooled OLS model examining the effect of ethnic fractionalization on the political rights of participation across 65 countries, completed with a friend for a graduate school class on R for quantitative social science analysis. It is meant to be completely reproducible. <a href='https://github.com/sloloris/IsabelleandDiegosFinalResearchProject/tree/gh-pages/Assignment3' target='_blank'>Click here</a> to view the R code used to scrape, clean, and reshape the data, to produce the graphs and charts using R libraries such as ggmap, stargazer, rworldmap, & others, and to run the final analysis.
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