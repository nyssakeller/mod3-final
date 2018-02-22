export const setMembersObj = (state=[], action) => {
  switch (action.type) {
  case 'SET_MEMBERS':
    return [...state, {
      house: action.house,
      members: action.members
    }]
  default:
    return state;
  }
};

