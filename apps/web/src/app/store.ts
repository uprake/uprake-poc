import { configureStore } from '@reduxjs/toolkit';
import { createDocStore } from '@syncstate/core';
import counterReducer from '../features/counter/counter.slice';

export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export const store = createDocStore(reduxStore.getState());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch;
