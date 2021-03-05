import { useContext } from 'react';
import { BaseContext } from "../../../store/BaseStore";

const useBaseStore = componentId => {
  const [store] = useContext(BaseContext);
  let data = {};

  switch (componentId) {
    case 'Author':
      data.authors = store.authors;
      break;
    case 'AuthorInitial':
      data.authorsInitials = store.authorsInitials;
      break;
    case 'AuthorProfile':
      data.tmpAuthors = store.tmpAuthors;
      break;
    case 'Intro':
      data.intro = store.intro;
      break;
    case 'NavContainer':
      data.menu = store.menu;
      break;
    case 'Stories':
      data.stories = store.stories;
      break;
    case 'AuthorByInitial':
      data.authorsInitials = store.authorsInitials;
      break;
    case 'GenresContainer':
      data.genres = store.genres;
      break;
    default:
      data = {
        ...store
      }
  }

  // NULL out unused keys
  Object.keys(data).forEach(key => {
    data[key] = data[key] || null;
  });

  console.log('BaseSTORE:', store);

  return data;
};

export default useBaseStore;