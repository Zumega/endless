import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Navigation.css';
import { MainMenuConstent } from '../../Constant';
import { NavLink } from 'react-router-dom';

class NavContainer extends Component {
  constructor(props) {
    super(props);

    this.menu = MainMenuConstent();
  }

  render() {
    return (
      <nav className="mainNavContainer left">
        <ul>
          {
            this.menu.map(data => (
              <li key={data.id}>
                <NavLink to={'/' + data.url} activeClassName="active">{data.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}

NavContainer.propType = {}

export default NavContainer;