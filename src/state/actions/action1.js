import * as types from '../types';

export const action1 = (x) => (dispatch) => {
  // you can put "async (dispatch)" if you want to "await" within action1 scope
  dispatch({
    type: types.TYPE1,
    payload: x,
  });
};
