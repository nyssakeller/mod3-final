export const setHouses = (houseData) => ({
  type: 'HOUSE_DATA',
  houseData
});

export const setMembers = (house, members) => ({
  type: 'SET_MEMBERS',
  house,
  members
});


