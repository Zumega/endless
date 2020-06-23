import React, { useContext }  from 'react';
import {Context} from '../../store/Store';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';


const NavContainer = () => {
  const [{menu, fullscreen}] = useContext(Context);

  const setClassName = () => {
    return (fullscreen ? 'col-0' : 'col-4') +  ' alpha omega';
  };

  return (
    <nav className={setClassName()}>
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
  );
};

export default NavContainer;