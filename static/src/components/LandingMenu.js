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
    onClickRender: console.log('oops'),
    currentViewIndex: 0,
  }

  _getMenuItems = () => {
    return this.props.menuItems.map((menuItem, index) => {
      var isSelected = classnames ({
        'selected': this.props.currentViewIndex == index
      })

      return (
        <li className={isSelected} key={index} 
            onClick={ () => {this.props.onClickRender(index)} }>
          <div className='menu-item'>{ menuItem }</div>
        </li>
      )
    })
  }


  render() {
    return(
      <div className='menu'>
        <ul className='menu-item-list'>
          { this._getMenuItems() }
        </ul>
      </div>
    ) 
  }
}

export default LandingMenu