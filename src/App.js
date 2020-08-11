import React  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseStore from '../src/store/BaseStore';
import Store from '../src/store/Store';

import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Navigation/NavContainer';
import ContentContainer from './components/Content/ContentContainer';

const App = () => {
  return (
    <BaseStore>
      <Store>
        <Router>
          <div className="mainContainer container">
            <HeaderContainer />
            <div className="navBodyContainer row">
              <NavContainer />
              <ContentContainer />
            </div>
          </div>
        </Router>
      </Store>
    </BaseStore>
  );
};

export default App;
