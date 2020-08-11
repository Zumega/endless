import Actions from './Actions';

const Reducers = (state, {type, payload}) => {
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
      return {
        ...data
      };
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
    default:
      return state;
  }
};

export default Reducers;