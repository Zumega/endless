import React, { useEffect } from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import { Actions } from '../../store/Actions';
import { useStore } from '../Utility/Hooks/useStore';
import { MemoContainer } from '../MemoContainer';

export const HeaderContainer = () => {
  const { fullScreen, dispatch } = useStore('HeaderContainer');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      dispatch({ type: Actions.RESET, payload: null });
    }
  }, [pathname, dispatch]);

  return (
    <MemoContainer data={[fullScreen]}>
      <header data-id="HeaderContainer" className="row">
        <h1 className="col-24" style={{ fontSize: fullScreen ? '16pt' : 'inherit' }}>
          <Link to="/">Endless Story</Link>
        </h1>
      </header>
    </MemoContainer>
  );
};
