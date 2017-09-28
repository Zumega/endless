import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class NavContainer extends Component {
  constructor() {
    super();

    this.state = {
      menu: null
    }

    axios.get('api/constants.json')
      .then(response => {
        this.setState(prevState => ({
          ...prevState,
          menu: response.data
        }));
      })
      .catch(error => {
        console.log(error, 'needs universal error handling');
      });

    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu () {
    if (this.state.menu) {
      return this.state.menu.map(data => (
          <li key={data.id}>
            <NavLink to={'/' + data.url} activeClassName="active">{data.text}</NavLink>
          </li>
        ));
    }

    // TODO: make better loading message
    return <span>LOADING</span>
  }

  render() {
    return (
      <nav className="mainNavContainer left">
        <ul>
          { this.handleMenu() }
        </ul>
      </nav>
    );
  }
}

NavContainer.propType = {}

export default NavContainer;