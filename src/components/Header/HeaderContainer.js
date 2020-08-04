import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStore from "../Utility/Hooks/useStore";

import "./Header.scss";
import MemoContainer from "../MemoContainer";
import Actions from "../../store/Actions";

const HeaderContainer = () => {
  const {fullScreen, dispatch} = useStore('HeaderContainer');
  const {pathname} = useLocation();

  useEffect(() => {
    if(pathname === '/') {
      dispatch({type: Actions.RESET, payload: null})
    }
  }, [pathname]);

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