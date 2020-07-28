import
  React, {createContext, useReducer} from 'react';
import Reducer from './Reducers';
import Actions from './Actions';

// import user from '../data/tmp_user';

import menu from '../data/menu';
import intro from '../data/intro';
import genres from '../data/genres';
import stories from '../data/stories';
import authors from '../data/authors';
import libraryCard from '../data/libraryCard';

const initialState = {
  menu,
  intro,
  genres,
  stories,
  authors,
  libraryCard,
  [Actions.FULL_SCREEN]: false,
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);

export default Store;