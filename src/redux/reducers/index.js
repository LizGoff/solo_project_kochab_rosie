import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import firstReducer from './reducers';

const store = combineReducers({
  user,
  login,
  firstReducer,
});

export default store;
