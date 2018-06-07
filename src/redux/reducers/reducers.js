// import { combineReducers } from 'redux';

// const newState = {
//     id: '',
//     subtopic: '',
//     user_id: '',
//     topic_id: '',
// };

const firstReducer = (state = [], action) => {

    if (action.type === 'ADD_SUBTOPIC') {
    //   state = { ...state, subtopic: action.payload };
    return action.payload;
      // } else if (action.type === 'REPLACE_USER') {
      //     console.log('userReducer replacing user',action);
      //     return action.payload;
      // } else if(action.type === "CLEAR_INPUT") {
    }
    return state;
    }
  

  export default firstReducer;
