import React, { useContext } from 'react';
import { Context } from "../../../store/Store";

const useStore = componentId => {
  const [store, dispatch] = useContext(Context);
  const data = {
    dispatch
  };

  switch (componentId) {
    case 'HeaderContainer':
      data.fullScreen = store.fullScreen;
      break;
    case 'ContentContainer':
      data.fullScreen = store.fullScreen;
      break;
    case 'NavContainer':
      data.menu = store.menu;
      data.fullScreen = store.fullScreen;
      break;
    case 'Story':
      data.story = store.story;
      break;
    default:
  }

  console.log('STORE:', store);

  return data;
};

export default useStore;