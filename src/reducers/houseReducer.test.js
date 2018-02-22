// import * as actions from '../actions/index.js';
import { setHouses } from '../actions/index.js';
import { houseReducer } from './houseReducer.js';

describe('houseReducer', () => {

  it('return default state', () => {
    const expected = [];
    expect(expected).toEqual(houseReducer(undefined, {}));
  });

  it('return new state', () => {
    const expected = [{
      name: 'name',
      founded: 'founded',
      seats: 'seats',
      titles: 'titles',
      coatOfArms: 'coat of arms',
      ancestralWeapons: 'weapons',
      words: 'words'
    }];

    expect(houseReducer(undefined, setHouses(expected))).toEqual(expected);
  });

});