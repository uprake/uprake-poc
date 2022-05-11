import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const activeNote: any = null;

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: <any>[],
    isVisible: false,
    updateMode: false,
    activeNoteId: -1,
    activeNote: activeNote,
  },
  reducers: {
    addNote: (state, { payload }) => {
      state.notes = [...state.notes, payload];
    },
    addToNotes: (state, { payload }) => {
      if (payload.content?.content[0].content) {
        const noteFound = state.notes.find((el: any) => el.id == payload.id);

        if (noteFound) {
          state.notes = [...state.notes, payload];
        } else {
          state.notes = [
            ...state.notes,
            {
              ...payload,
              id: state.notes.length,
            },
          ];
        }
      }
    },
    updateNote: (state, { payload }) => {
      // const note = state.notes.find((note: any) => note.id == payload.id);
      if (payload.content?.content[0].content) {
        console.log(payload);
        const index = state.notes.findIndex((el: any) => el.id == payload.id);
        console.log(state.notes[index]);
        state.notes[index] = payload;
      }

      //  sort the array
    },

    deleteNote: (state, action: PayloadAction<any>) => {
      state.notes.filter((note: any) => note != action.payload);
    },
    toggleVisible: (state) => {
      state.isVisible = !state.isVisible;
      console.log(state.isVisible);
    },
    setActiveNoteId: (state, { payload }) => {
      state.activeNoteId = payload;
    },
    setActiveNote: (state, { payload }) => {
      console.log('payload', payload);
      state.activeNote = payload;
    },
  },
});

export const {
  addNote,
  addToNotes,
  updateNote,
  deleteNote,
  toggleVisible,
  setActiveNoteId,
  setActiveNote,
} = notesSlice.actions;
export default notesSlice.reducer;
