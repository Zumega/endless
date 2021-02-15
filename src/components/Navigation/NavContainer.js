import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { useBaseStore } from '../Utility/Hooks/useBaseStore';
import { useStore } from '../Utility/Hooks/useStore';
import { MemoContainer } from '../MemoContainer';

export const NavContainer = () => {
  const { menu } = useBaseStore('NavContainer');
  const { fullScreen, libraryCard } = useStore('NavContainer');

  return (
    <MemoContainer data={[menu, fullScreen, libraryCard]}>
      <nav className={(fullScreen ? 'col-0' : 'col-4') + ' alpha omega'}>
        <ul>
          {menu.map(data => (
            <li key={data.id}>
              {data.url === 'library-card' && libraryCard ? (
                <NavLink to={'/author/' + libraryCard} activeClassName="active">
                  Profile
                </NavLink>
              ) : (
                <NavLink to={'/' + data.url} activeClassName="active">
                  {data.text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </MemoContainer>
  );
};
