require('../../stylesheets/landingcarousel.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class LandingCarousel extends Component {
  static propTypes = {
    currentViewIndex: PropTypes.number.isRequired,
    viewItems: PropTypes.array.isRequired,
  }


  render() {

    var contents = this.props.viewItems[this.props.currentViewIndex]

    return(
      <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={300}>
        <div className='selected-item' key={uniqueId()}>
          { contents }
        </div>
      </ReactCSSTransitionGroup>
    )
    
  }
}

export default LandingCarousel