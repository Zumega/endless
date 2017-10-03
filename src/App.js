import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Navigation/NavContainer';
import ContentContainer from './components/Content/ContentContainer';
import './components/Utility/Services';

class App extends Component {
  constructor() {
    super();

    this.state = {
      error: null
    }
  }

  render() {
    return (
      <Router>
        <div>
          <HeaderContainer />
          <NavContainer />
          <ContentContainer error={this.state.error} />
        </div>
      </Router>
    );
  }
}

export default App;
