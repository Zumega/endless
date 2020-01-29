import React, { useState, useEffect }  from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const NavContainer = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (menu) return;

    axios.get('api/constants.json')
      .then(response => {
        setMenu(response.data);
      })
      .catch(error => {
        console.log(error, 'needs universal error handling');
      });
  }, [menu]);

  const handleMenu = () => {
    if (menu) {
      return menu.map(data => (
          <li key={data.id}>
            <NavLink to={'/' + data.url} activeClassName="active">{data.text}</NavLink>
          </li>
        ));
    }

    // TODO: make better loading message
    return <span>LOADING</span>
  };

  return (
    <nav className="cell-4">
      <ul>
        { handleMenu() }
      </ul>
    </nav>
  );
};

NavContainer.propType = {};

export default NavContainer;