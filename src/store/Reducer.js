import Actions from './Actions';

const Reducer = (state, {type, payload}) => {
  setTimeout(() => {console.log(state)}, 10);

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

export default Reducer;