import { setMembers } from '../actions/index.js';
import { setMembersObj } from './setMemberReducer.js';

describe('houseReducer', () => {

  it('return default state', () => {
    const expected = [];
    expect(expected).toEqual(setMembersObj(undefined, {}));
  });

  it('return new state', () => {
    const expected = [{
      name: 'name'
    }];

    expect(setMembersObj(undefined, setMembers(...expected))).toEqual(expected);
  });

});