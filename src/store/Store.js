import React, {createContext, useReducer} from 'react';
import Reducers from './Reducers';
import Actions from './Actions';

const initialState = {
  [Actions.FULL_SCREEN]: false,
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);

export default Store;