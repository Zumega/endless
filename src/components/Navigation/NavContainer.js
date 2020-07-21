import React from 'react';
import { NavLink } from 'react-router-dom';
import useStore from "../Utility/Hooks/useStore";
import './Navigation.scss';

import MemoContainer from '../MemoContainer';

const NavContainer = () => {
  const {menu, fullScreen} = useStore('NavContainer');

  return (
    <MemoContainer data={[menu, fullScreen]}>
      <nav className={(fullScreen ? 'col-0' : 'col-4') +  ' alpha omega'}>
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