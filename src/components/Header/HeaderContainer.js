import React from 'react';
import { Link } from 'react-router-dom';
import useStore from "../Utility/Hooks/useStore";

import "./Header.scss";

const HeaderContainer = () => {
  const {fullScreen} = useStore('HeaderContainer');

  return (
    <header className="row">
      <h1 className="col-24" style={{fontSize: fullScreen ? '16pt' : 'inherit'}}>
        <Link to="/">Endless Story</Link>
      </h1>
    </header>
  );
};

export default HeaderContainer;