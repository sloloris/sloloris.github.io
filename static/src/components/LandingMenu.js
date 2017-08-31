import React, { Component, PropTypes } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LandingMenu extends Component {

  static propTypes = {
    currentViewIndex = PropTypes.numbers.isRequired,
    menuItems = PropTypes.array.isRequired,
    onClickRender: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onClick: console.log('onClick oops')
  }

  _getMenuItems = () => {
    return this.props.menuItems.map((menuItem, index) => {
      var isSelected = classnames ({
        'selected': this.props.currentViewIndex == index
      })

      return (
        <li className={isSelected} key={index} onClick={this.props.onClick.bind(this,index)}>
          <div className='menu-item'>{ menuItem }</div>
        </li>
      )
    })
  }


  render() {
    return(
      <div className='menu'>
        <ul className='menu-item-list'>
          { this._getMenuitems() }
        </ul>
      </div>
    ) 
  }
}

export default LandingMenu