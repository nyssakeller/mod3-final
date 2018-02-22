import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';
import { setMemberReducer } from './setMemberReducer.js';

const rootReducer = combineReducers({
  houses: houseReducer,
  memberIds: setMemberReducer 
});


export default rootReducer;
