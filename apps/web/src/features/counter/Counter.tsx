import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { counterActions } from './counter.slice';

/* eslint-disable-next-line */
export interface CounterProps {}

export function Counter(props: CounterProps) {
  const counter = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome to Counter!: {counter}</h1>
      <button onClick={() => dispatch(counterActions.addCounter({}))}>+</button>
    </div>
  );
}

export default Counter;
