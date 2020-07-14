import React, { useContext }  from 'react';
import {Context} from '../../store/Store';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';
import MemoContainer from '../MemoContainer';

const NavContainer = () => {
  const [{menu, fullscreen}] = useContext(Context);

  return (
    <MemoContainer data={[menu, fullscreen]}>
      <nav className={(fullscreen ? 'col-0' : 'col-4') +  ' alpha omega'}>
        <ul>
          {
            menu.map(data => (
              <li key={data.id}>
                <NavLink to={'/' + data.url} activeClassName="active">{data.text}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </MemoContainer>
  );
};

export default NavContainer;