import { createSlice } from '@reduxjs/toolkit';
const emptyContent = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
    },
  ],
};
const emptyNote = {
  id: -1,
  noteType: 'tbr',
  time: 0,
  content: emptyContent,
};
const initialState: any = {
  id: -1,
  noteType: 'tbr',
  time: '0',
  content: emptyNote,
};

const noteSlice = createSlice({
  name: 'note',
  initialState: initialState,
  reducers: {
    // updateNote :
  },
});

export const {} = noteSlice.actions;
export default noteSlice.reducer;
