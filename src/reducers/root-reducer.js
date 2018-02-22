import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';
import { setMemberReducer, setMembersObj } from './setMemberReducer.js';

const rootReducer = combineReducers({
  houses: houseReducer,
  memberIds: setMemberReducer,
  members: setMembersObj
});


export default rootReducer;
