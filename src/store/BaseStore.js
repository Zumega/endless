import React, {createContext, useReducer} from 'react';
import BaseReducers from './BaseReducers';

import menu from '../data/menu';
import intro from '../data/intro';
import genres from '../data/genres';
import stories from '../data/stories';
import authors from '../data/authors';

const initialState = {
  menu,
  intro,
  genres,
  stories,
  authors,
};

const BaseStore = ({children}) => {
  const [state, dispatch] = useReducer(BaseReducers, initialState);

  return (
    <BaseContext.Provider value={[state, dispatch]}>
      {children}
    </BaseContext.Provider>
  )
};

export const BaseContext = createContext(initialState);

export default BaseStore;