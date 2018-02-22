import * as actions from '../actions/index.js';
import { houseReducer } from './houseReducer.js';

describe('houseReducer', () => {

  it('return default state', () => {
    const expected = [];
    expect(expected).toEqual(houseReducer(undefined, {}));
  });

});