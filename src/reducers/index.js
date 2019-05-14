import {combineReducers} from 'redux';

const messages = (state = [], action) => {
  switch(action.type){
    case 'MESSAGES_INCREMENT':
      return [...state, action.message];
    default:
      return state;
  }
}

const messageCounter = (state = 0, action) => {
  switch(action.type){
    case 'MESSAGES_INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

const userCharCounter = (state = 0, action) => {
  switch(action.type){
    case 'MESSAGES_INCREMENT':
      if (action.message.from === 'user'){
      	return state + action.message.message.length;
      }
      return state;
    default:
      return state;
    }
}

const rootReducer = combineReducers({
  messages,
  messageCounter,
  userCharCounter
})

export default rootReducer;
