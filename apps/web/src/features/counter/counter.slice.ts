import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  counter: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state, {}: any) => {
      state.counter += 1;
    },
  },
});

export const counterActions = slice.actions;

export default slice.reducer;
