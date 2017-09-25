import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Authors.css';

class AuthorsContainer extends Component {
  render () {
    return (
      <div>
        <h2>Authors:</h2>
        <ul>
          <li>#</li>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
          <li>e</li>
        </ul>
      </div>
    );
  }
}

export default AuthorsContainer;