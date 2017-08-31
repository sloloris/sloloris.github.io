import React, { Component, PropTypes } from 'react';
import LandingMenu from './LandingMenu';
import LandingContents from './LandingContents';

class Home extends Component {
  static propTypes = {
    currentViewIndex = PropTypes.numbers.isRequired,
    menuItems = PropTypes.array.isRequired,
    onClickRender: PropTypes.func.isRequired,
  }

  render() {
    return()
    
  }
}

export default Home