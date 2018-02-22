import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';

const rootReducer = combineReducers({
  houses: houseReducer 
});


export default rootReducer;
