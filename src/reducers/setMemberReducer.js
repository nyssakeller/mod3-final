export const setMembersObj = (state=[], action) => {
  switch (action.type) {
  case 'SET_MEMBERS':

    return [...state, action.members];
  default:
    return state;
  }
};

