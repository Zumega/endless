import React  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Navigation/NavContainer';
import ContentContainer from './components/Content/ContentContainer';
import './components/Utility/Services';

const App = () => {
  // const [error, setError] = useState(null);
  const error = '';

  return (
    <Router>
      <div className="mainContainer row wrap">
        <HeaderContainer />
        <div className="navBodyContainer row">
          <NavContainer />
          <ContentContainer error={error} />
        </div>
      </div>
    </Router>
  );
};

export default App;
