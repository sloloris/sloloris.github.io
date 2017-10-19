require('../../stylesheets/experience.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Projects extends Component {


  render() {
    return(
      <div>
        <div className='project-section'>
          <div className='list project-list'>
            <span className='bold-text'><a href='https://neuland21.github.io/' target='_blank'>Neuland21</a></span> - As a remote cofounder of a think tank focused on revitalizing rural Germany, I dedicate several hours of free time a week to helping develop the organization's values and activities - and its website (in progress). <a href='https://github.com/Neuland21/neuland21.github.io' target='_blank'>See the code on Github.</a>
            <br />
            <br />
            <span className='bold-text'>FriendKeeper</span> - a simple email-automation app to help you stay in touch with friends and family with minimal effort. Stack: React/Redux, JS, Python, Flask, Postgres, Google APIs, OAuth2.0. 
              <br />
              <a href='https://github.com/sloloris/hb-final-project' target='_blank'>See the code on Github</a> or a <a href='http://isabellekmiller.com/friendkeeper-demo/'>demo (frontend only) here.</a>
            <br />
            <br />
            <span className='bold-text'><a href='http://isabellekmiller.com/IsabelleandDiegosFinalResearchProject/'>Ethnic Diversity and Political Rights</a></span> - my very first foray into coding, this page is simply a presentation of a basic pooled model examining the effect of ethnic fractionalization on the political rights of participation across 65 countries, completed with a friend for a graduate school class on R for quantitative social science analysis. Created as a learning experience for coding in R and meant to be completely reproducible. <a href='https://github.com/sloloris/IsabelleandDiegosFinalResearchProject/tree/gh-pages/Assignment3' target='_blank'>Click here</a> to view the R code used to scrape, clean, and reshape the data, to produce the graphs and charts using R libraries such as ggmap, stargazer, rworldmap, & others, and to run the final analysis.
          </div>
        </div>
        <br />
    </div>
    )
  }
}

export default Projects