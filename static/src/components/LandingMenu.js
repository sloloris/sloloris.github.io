require('../../stylesheets/landingmenu.scss')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class LandingMenu extends Component {

  static propTypes = {
    currentViewIndex: PropTypes.number.isRequired,
    menuItems: PropTypes.array.isRequired,
    onClickRender: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onClickRender: console.log('hello there'),
    currentViewIndex: 0,
  }

  _getMenuItems = () => {
    return this.props.menuItems.map((menuItem, index) => {
      var isSelected = classnames ('menu-item', {
        'selected': this.props.currentViewIndex == index,
      })

      return (
        <div className={isSelected} key={index} 
            onClick={ () => {this.props.onClickRender(index)} }>
              { menuItem }
        </div>
      )
    })
  }


  render() {
    return(
      <div className='menu-item-list'>
        { this._getMenuItems() }
      </div>
    ) 
  }
}

export default LandingMenu