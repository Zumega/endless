export const BaseReducers = (state, { type, payload }) => {
  const data = {
    ...state,
    [type]: payload
  };

  switch (type) {
    default:
      return data;
  }
};
