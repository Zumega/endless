import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './Content.css';
import Intro from './Intro/Intro';
import AboutContainer from './About/AboutContainer';
import StoriesContainer from './Stories/StoriesContainer';

class ContentContainer extends Component {
  render() {
    return (
      <div className="contentContainer left">
        <section>
          <Route exact={true} path="/" render={() => (<Intro />)} />
          <Route exact={true} path="/about" render={() => (<AboutContainer />)} />
          <Route exact={true} path="/stories" render={() => (<StoriesContainer />)} />
        </section>
      </div>
    );
  }
}

ContentContainer.propType = {}

export default ContentContainer;