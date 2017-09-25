import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Navigation/NavContainer';
import ContentContainer from './components/Content/ContentContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderContainer />
          <NavContainer />
          <ContentContainer />
        </div>
      </Router>
    );
  }
}

export default App;
