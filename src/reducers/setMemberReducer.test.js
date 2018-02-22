import { setMembers } from '../actions/index.js';
import { setMembersObj } from './setMemberReducer.js';

describe('houseReducer', () => {

  it('return default state', () => {
    const expected = [];
    expect(expected).toEqual(setMembersObj(undefined, {}));
  });

  it('return new state', () => {
    const members = undefined;
    const house = [{name: 'name'}];
    const expected = [{house, members}];

    expect(setMembersObj(undefined, setMembers(expected))).toEqual(expected);
  });

});