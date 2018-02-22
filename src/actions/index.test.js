import * as actions from './index.js';

describe('setHouses', () => {

  it('return a type of HOUSE_DATA with houseData array', () => {
    const houseData = [{
      name: 'name',
      founded: 'founded',
      seats: 'seats',
      titles: 'titles',
      coatOfArms: 'coat of arms',
      ancestralWeapons: 'weapons',
      words: 'words'
    }];
    const expected = {
      type: 'HOUSE_DATA',
      houseData
    };

    expect(expected).toEqual(actions.setHouses(houseData));
  });

});

describe('setMembers', () => {

  it('return a type of HOUSE_DATA with houseData array', () => {
    const members = undefined;
    const house = [{name: 'name'}];
    const expected = {
      type: 'SET_MEMBERS',
      house,
      members
    };

    expect(expected).toEqual(actions.setMembers(house, members));    
  });

});