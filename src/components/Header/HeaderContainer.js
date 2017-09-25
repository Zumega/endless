import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

class HeaderContainer extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="/">Endless Story</Link>
        </h1>
      </header>
    );
  }
}

export default HeaderContainer;