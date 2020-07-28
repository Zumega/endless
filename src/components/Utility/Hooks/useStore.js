import { useContext } from 'react';
import { Context } from "../../../store/Store";

const useStore = componentId => {
  const [store, dispatch] = useContext(Context);
  const data = {
    dispatch
  };

  switch (componentId) {
    case 'Author':
      data.author = store.author;
      break;
    case 'AurthorProfile':
      data.author = store.author;
      break;
    case 'Intro':
      data.intro = store.intro;
      break;
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
    case 'Stories':
      data.stories = store.stories;
      data.genre = store.genre;
      break;
    case 'AuthorsContainer':
      data.selectedInitial = store.selectedInitial;
      break;
    case 'AuthorInitial':
      data.authors = store.authors;
      break;
    case 'AuthorByInitial':
      data.authors = store.authors;
      data.selectedInitial = store.selectedInitial;
      break;
    case 'GenresContainer':
      data.genres = store.genres;
      break;
    default:
  }

  Object.keys(data).forEach(key => {
    data[key] = data[key] || null;
  });

  console.log('STORE:', store);

  return data;
};

export default useStore;