export const setMemberReducer = (state=[], action) => {
  switch (action.type) {
  case 'SET_MEMBER_IDS':
    return [...action.memberIds];
  default:
    return state;
  }
};