export const houseReducer = (state=[], action) => {
  switch (action.type) {
  case 'HOUSE_DATA':
    return [...action.houseData];
  default:
    return state;
  }
};
