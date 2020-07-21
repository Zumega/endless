import Actions from './Actions';

const Reducers = (state, {type, payload}) => {
  switch (type) {
    case Actions.FULL_SCREEN: {
      return {
        ...state,
        [Actions.FULL_SCREEN]: payload
      }
    }
    case Actions.STORY: {
      return {
        ...state,
        [Actions.STORY]: payload
      }
    }
    case Actions.GENRE: {
      return {
        ...state,
        [Actions.GENRE]: payload
      }
    }
    default:
      return state
  }
};

export default Reducers;