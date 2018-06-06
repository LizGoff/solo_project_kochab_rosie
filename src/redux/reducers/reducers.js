// import { combineReducers } from 'redux';

const newState = {
    id: '',
    subtopic: '',
    user_id: '',
    topic_id: ''
};

const firstReducer = (state = newState, action) => {
    console.log('I am the firstReducer!');

    if (action.type === 'ADD_SUBTOPIC') {
      state = { ...state, subtopic: action.payload };
      return state;
      // } else if (action.type === 'REPLACE_USER') {
      //     console.log('userReducer replacing user',action);
      //     return action.payload;
      // } else if(action.type === "CLEAR_INPUT") {
    } else {
    return state;
    }
  }

  export default firstReducer;
