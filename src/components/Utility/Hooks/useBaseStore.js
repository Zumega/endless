import { useContext } from 'react';
import { BaseContext } from "../../../store/BaseStore";

const useStore = componentId => {
  const [store] = useContext(BaseContext);
  const data = {};

  switch (componentId) {
    case 'Intro':
      data.intro = store.intro;
      break;
    case 'NavContainer':
      data.menu = store.menu;
    case 'Stories':
      data.stories = store.stories;
      break;
    case 'AuthorInitial':
      data.authors = store.authors;
      break;
    case 'AuthorByInitial':
      data.authors = store.authors;
      break;
    case 'GenresContainer':
      data.genres = store.genres;
      break;
    default:
  }

  // NULL out unused keys
  Object.keys(data).forEach(key => {
    data[key] = data[key] || null;
  });

  console.log('BaseSTORE:', store);

  return data;
};

export default useStore;