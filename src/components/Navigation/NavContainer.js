import React, { useState }  from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import menu from '../../data/menu';

const NavContainer = () => {
  return (
    <nav className="col-4 alpha omega">
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

NavContainer.propType = {};

export default NavContainer;