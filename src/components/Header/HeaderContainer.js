import React from 'react';
import { Link } from 'react-router-dom';
import useStore from "../Utility/Hooks/useStore";

import "./Header.scss";
import MemoContainer from "../MemoContainer";

const HeaderContainer = () => {
  const {fullScreen} = useStore('HeaderContainer');

  return (
    <MemoContainer data={[fullScreen]}>
      <header className="row">
        <h1 className="col-24" style={{fontSize: fullScreen ? '16pt' : 'inherit'}}>
          <Link to="/">Endless Story</Link>
        </h1>
      </header>
    </MemoContainer>
  );
};

export default HeaderContainer;