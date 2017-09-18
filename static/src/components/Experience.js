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
          <div className='list project-list'>
              FriendKeeper - a simple email-automation app to help you stay in touch with friends and family with minimal effort. Stack: React/Redux, JS, Python, Flask, Postgres, Google APIs, OAuth2.0. 
                <br />
                <a href='https://github.com/sloloris/hb-final-project' target='_blank'>See it on Github.</a>
            <br />
            <br />
            <a href='http://isabellekmiller.com/IsabelleandDiegosFinalResearchProject/'>Ethnic Diversity and Political Rights</a> - my very first foray into coding, this page is simply a presentation of a very basic pooled model examining the effect of ethnic fractionalization on the political rights of participation across 65 countries, completed with a friend for a graduate school class on R for quantitative social science analysis. Created as a learning experience for coding in R and meant to be completely reproducible. <a href='https://github.com/sloloris/IsabelleandDiegosFinalResearchProject/tree/gh-pages/Assignment3' target='_blank'>Click here</a> to view the R code used to scrape, clean, and reshape the data, to produce the graphs and charts using R libraries such as ggmap, stargazer, rworldmap, & others, and to run the final analysis.
          </div>

        <div className='education-section'>
          <div className='experience-section-header'>
            Education
          </div>
          <div className='list education-list'>
            Software Engineering Fellowship, Hackbright Academy (2017) - a 12-week fullstack web development intensive course for women. The curriculum included Command Line, Git, Python, Flask, PostgreSQL, SQLAlchemy, JavaScript, HTML/CSS, and computer science fundamentals.
            <br />
            <br />
              Master of Public Policy, Hertie School of Governance (2016) - two-year Master's program with a focus on statistical policy analysis in Berlin, Germany. Extracurricular activities during that time included running communications for the <a href='http://www.policyleadershipinstitute.org/events/eppc-2015-european-public-policy-conference-warsaw' target='_blank'>2015 student-organized European Public Policy Conference</a> in Warsaw; organizing seminars and workshops on topics related to social innovation and the European tech scene for the Hertie Social Impact Collaborative, a student-alumni initiative associated with and funded by the Hertie Foundation; and volunteering at an emergency refugee shelter of the Berliner Stadtsmission during and after the 2015-2016 refugee crisis.
            <br />
            <br />
              Bachelor of Arts, International Relations and Linguistics, Tulane University (2012) - Presidential Scholarship ($24k/year), minor in Architecture, Fall 2012 study abroad at the University of Buenos Aires. Extracurricular activities included English teaching and tutoring as well as integration classes for immigrants with the Catholic Archdiocese of New Orleans and German Club.
              <br />
              <br />
              High School Exchange, American Field Service - spent senior year of high school in Lago Puelo, Argentina living with a host family and attending a local high school.
          </div>
          <div className='see-linkedin'>
            For more information on my work experience, please <a href='https://www.linkedin.com/in/isabelle-miller/' target='_blank'>see my LinkedIn</a> or <a href='/IMiller_resume.pdf' target="_blank">click here to download my resume.</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Experience