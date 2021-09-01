import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action1 } from './state/actions/action1';
const Component1 = () => {
  const dispatch = useDispatch(); // dispatch is needed to use our actions over state
  const firstReducer = useSelector((state) => state.firstReducer); // gets data from reducer
  const a = 'some random text from reducer';
  useEffect(() => {
    dispatch(action1(a)); // send action1 to our reducers
  }, []); // "[]" to stop re-render
  return (
    <Fragment>
      <h1>{firstReducer}</h1>
    </Fragment>
  );
};

export default Component1;
