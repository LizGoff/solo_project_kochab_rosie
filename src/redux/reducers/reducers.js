// import { combineReducers } from 'redux';

const firstReducer = (state = {}, action) => {
    console.log('I am the firstReducer!');
    if (action.type === 'ADD_SUBTOPIC') {
      state = { ...state, subtopic: action.payload };
      return state;
      // } else if (action.type === 'REPLACE_USER') {
      //     console.log('userReducer replacing user',action);
      //     return action.payload;
      // } else if(action.type === "CLEAR_INPUT") {
    }
    return state;
  }

  export default firstReducer;
