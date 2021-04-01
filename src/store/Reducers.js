import { Actions } from './Actions';

export const Reducers = (state, { type, payload }) => {
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
    case Actions.EDIT_STORY:
    case Actions.OPENED_CLOSED:
      return data;
    case Actions.RESET:
      // TODO: more resets
      return {
        ...state,
        [Actions.AUTHOR]: payload,
        [Actions.GENRE]: payload,
        [Actions.INITIAL]: payload,
        [Actions.STORY]: payload,
        [Actions.EDIT_STORY]: payload,
        [Actions.FULL_SCREEN]: false
      };
    case Actions.STORY:
      return {
        // TODO: more resets
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
    case Actions.URL_PARAMS:
      console.log('PAYLOAD', payload);
      return data;
    default:
      return state;
  }
};
