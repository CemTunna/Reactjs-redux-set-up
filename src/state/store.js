import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // it will automatically look for index.js so we dont need to specify like  ./reducers/index.js

const middleware = [thunk]; // you can put other packages if you want
const store = createStore(
  rootReducer, // this is index.js from reducers
  composeWithDevTools(applyMiddleware(...middleware)) //devtools to see whats happening in our storage via chrome react-redux extension
);
export default store;
