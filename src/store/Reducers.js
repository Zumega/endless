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
      return {
        ...data
      };
    case Actions.RESET:
      return {
        ...state,
        [Actions.AUTHOR]: payload,
        [Actions.GENRE]: payload,
        [Actions.INITIAL]: payload,
        [Actions.STORY]: payload
      };
    case Actions.STORY:
      return {
        ...data,
        [Actions.GENRE]: null, // TODO: more resets
        [Actions.INITIAL]: null
      };
    default:
      return state;
  }
};

export default Reducers;