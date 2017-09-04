require('../../stylesheets/landingcarousel.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          transitionAppear={true} // for transition at component mount
          transitionAppearTimeout={500}
          transitionEnterTimeout={700}
          transitionLeaveTimeout={300}>
        <div className='selected-item' key={this.props.currentViewIndex}>
          { contents }
        </div>
      </ReactCSSTransitionGroup>
    )
    
  }
}

export default LandingCarousel