require('../../stylesheets/experience.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Education extends Component {


  render() {
    return(
      <div>
        <div className='education-section'>
          <div className='section-header'>
            Education
          </div>
          <div className='list education-list'>
            <span className='bold-text'>Software Engineering Fellowship, Hackbright Academy (2017)</span> - a 12-week fullstack web development intensive course for women. The curriculum included Command Line, Git, Python, Flask, PostgreSQL, SQLAlchemy, JavaScript, HTML/CSS, and computer science fundamentals.
            <br />
            <br />
              <span className='bold-text'>Master of Public Policy, Hertie School of Governance (2016)</span> - two-year Master's program with a focus on statistical policy analysis in Berlin, Germany. Extracurricular activities during that time included running communications for the <a href='http://www.policyleadershipinstitute.org/events/eppc-2015-european-public-policy-conference-warsaw' target='_blank'>2015 student-organized European Public Policy Conference</a> in Warsaw; organizing seminars and workshops on topics related to social innovation and the European tech scene for the Hertie Social Impact Collaborative, a student-alumni initiative associated with and funded by the Hertie Foundation; and volunteering at an emergency refugee shelter of the Berliner Stadtsmission during and after the 2015-2016 refugee crisis.
            <br />
            <br />
              <span className='bold-text'>Bachelor of Arts, International Relations and Linguistics, Tulane University (2012)</span> - Presidential Scholarship ($24k/year), minor in Architecture, Fall 2012 study abroad at the University of Buenos Aires. Extracurricular activities included English teaching and tutoring as well as integration classes for immigrants with the Catholic Archdiocese of New Orleans and German Club.
              <br />
              <br />
              <span className='bold-text'>High School Exchange, American Field Service</span> - spent senior year of high school in Lago Puelo, Argentina living with a host family and attending a local high school.
          </div>
        </div>
        <br />
    </div>
    )
  }
}

export default Education