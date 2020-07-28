import Actions from './Actions';

const Reducers = (state, {type, payload}) => {
  console.log('Reducers', type, payload);

  switch (type) {
    case Actions.AUTHOR:
    case Actions.FULL_SCREEN:
    case Actions.GENRE:
    case Actions.INITIAL:
    case Actions.STORY: {
      return {
        ...state,
        [type]: payload
      }
    }
    default:
      return state
  }
};

export default Reducers;