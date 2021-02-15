import React, { createContext, useReducer } from 'react';
import { BaseReducers } from './BaseReducers';

import menu from '../data/menu';
import intro from '../data/intro';
import genres from '../data/genres';
import stories from '../data/stories';
import authorsInitials from '../data/authorsInitials';
import authors from '../data/author/data';

const initialState = {
  menu,
  intro,
  genres,
  stories,
  authors,
  authorsInitials
};

export const BaseContext = createContext(initialState);

export const BaseStore = ({ children }) => {
  const [state] = useReducer(BaseReducers, initialState);

  return (
    <BaseContext.Provider
      value={[
        state,
        () => {
          console.error('NO DISPATCH');
        }
      ]}
    >
      {children}
    </BaseContext.Provider>
  );
};
