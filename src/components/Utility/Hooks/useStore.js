import { useContext } from 'react';
import { Context } from "../../../store/Store";
import Actions from "../../../store/Actions";

const useStore = componentId => {
  const [store, dispatch] = useContext(Context);
  const data = {
    dispatch
  };

  switch (componentId) {
    case 'Author':
      data[Actions.AUTHOR] = store[Actions.AUTHOR];
      break;
    case 'AurthorProfile':
      data[Actions.AUTHOR] = store[Actions.AUTHOR];
      break;
    case 'HeaderContainer':
      data[Actions.FULL_SCREEN] = store[Actions.FULL_SCREEN];
      break;
    case 'ContentContainer':
      data[Actions.FULL_SCREEN] = store[Actions.FULL_SCREEN];
      break;
    case 'LibraryCard':
      data[Actions.LIBRARY_CARD] = store[Actions.LIBRARY_CARD];
      break;
    case 'NavContainer':
      data[Actions.LIBRARY_CARD] = store[Actions.LIBRARY_CARD];
      data[Actions.FULL_SCREEN] = store[Actions.FULL_SCREEN];
      break;
    case 'Story':
      data[Actions.STORY] = store[Actions.STORY];
      break;
    case 'StoryActions':
      data[Actions.STORY] = store[Actions.STORY];
      data[Actions.FULL_SCREEN] = store[Actions.FULL_SCREEN];
      data[Actions.FLAG_STORY] = store[Actions.FLAG_STORY];
      data[Actions.STORY_THUMB_UP] = store[Actions.STORY_THUMB_UP];
      data[Actions.STORY_THUMB_DOWN] = store[Actions.STORY_THUMB_DOWN];
      break;
    case 'Stories':
      data[Actions.GENRE] = store[Actions.GENRE];
      break;
    case 'AuthorsContainer':
      data[Actions.INITIAL] = store[Actions.INITIAL];
      break;
    case 'AuthorByInitial':
      data[Actions.INITIAL] = store[Actions.INITIAL];
      break;
    default:
  }

  // NULL out unused keys
  Object.keys(data).forEach(key => {
    data[key] = data[key] || null;
  });

  console.log('STORE:', store);

  return data;
};

export default useStore;