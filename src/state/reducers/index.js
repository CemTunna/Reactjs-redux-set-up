import { combineReducers } from 'redux'; // it combines all reducers
import reducer1 from './reducer1';

const rootReducer = combineReducers({
  firstReducer: reducer1, //reducer1 will be called as firstReducer in store
});
export default rootReducer;
