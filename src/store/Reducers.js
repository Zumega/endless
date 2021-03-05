import Actions from './Actions';
import { useHistory } from "react-router-dom";

const Reducers = (state, {type, payload}) => {
  const history = useHistory();
  console.log('Reducers', type, payload);

  const data = {
    ...state,
    [type]: payload
  };

  switch (type) {
    case Actions.AUTHOR:
    case Actions.FULL_SCREEN:
    case Actions.GENRE:
    case Actions.INITIAL:
    case Actions.LIBRARY_CARD:
      // TODO: look up, verify user

      // why no work?
      history.push(`/author/${payload}`);

      // return data;
    case Actions.RESET:
      return { // TODO: more resets
        ...state,
        [Actions.AUTHOR]: payload,
        [Actions.GENRE]: payload,
        [Actions.INITIAL]: payload,
        [Actions.STORY]: payload
      };
    case Actions.STORY:
      return { // TODO: more resets
        ...data,
        [Actions.GENRE]: null,
        [Actions.INITIAL]: null
      };
    case Actions.STORY_EDIT:
      // TODO; navigate to `/author/${payload.userId}/edit/${payload.storyId}`}>
      const { inEdit } = state.author.stories;
      const story = Object.keys(inEdit).reduce(() => {
        // TODO: pull out story using storyId
      }, []);

      return {
        ...data,
        [Actions.STORY_EDIT]: payload
      };
    default:
      return state;
  }
};

export default Reducers;