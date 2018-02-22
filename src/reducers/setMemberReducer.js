export const setMemberReducer = (state=[], action) => {
  switch (action.type) {
  case 'SET_MEMBER_IDS':
    return [...action.memberIds];
  default:
    return state;
  }
};

export const setMembersObj = (state=[], action) => {
  switch (action.type) {
  case 'SET_MEMBERS':

    return [...state, action.members];
  default:
    return state;
  }
};

