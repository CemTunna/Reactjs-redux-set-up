import * as types from '../types'; //types are imported
const initialState = []; //initiate initial state
export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case types.TYPE1:
      return [...state, payload]; // you can do here whatever you what
    default:
      return state;
  }
}
