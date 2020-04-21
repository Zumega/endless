import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const HeaderContainer = () => {
  return (
    <header className="row">
      <h1 className="col-24">
        <Link to="/">Endless Story</Link>
      </h1>
    </header>
  );
};

export default HeaderContainer;