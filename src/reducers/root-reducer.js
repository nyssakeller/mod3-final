import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';
import { setMembersObj } from './setMemberReducer.js';

const rootReducer = combineReducers({
  houses: houseReducer,
  members: setMembersObj
});


export default rootReducer;
