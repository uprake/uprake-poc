import { createSlice, current } from '@reduxjs/toolkit';
import {
  addNoteToFirebase,
  updateNotesInFirebase,
} from '~/contentScripts/firebase/firebase.utils';

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

      addNoteToFirebase(payload);
      state.notes.sort(function (a: any, b: any) {
        return a.time - b.time;
      });
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

        state.notes.sort(function (a: any, b: any) {
          return a.time - b.time;
        });

        updateNotesInFirebase(current(state.notes));
      }
    },
    updateNote: (state, { payload }) => {
      if (payload.content?.content[0].content) {
        const index = state.notes.findIndex((el: any) => el.id == payload.id);
        state.notes[index] = payload;
      }
      // console.log(current(state.notes));
      state.notes.sort(function (a: any, b: any) {
        return a.time - b.time;
      });

      updateNotesInFirebase(current(state.notes));
    },
    setMultipleNotes: (state, { payload }) => {
      console.log('payload', payload);
      state.notes = payload;
      state.notes.sort(function (a: any, b: any) {
        return a.time - b.time;
      });
    },

    deleteNote: (state, { payload }) => {
      (state.notes = state.notes.filter((note: any) => note.id != payload.id)),
        state.notes.sort(function (a: any, b: any) {
          return a.time - b.time;
        });

      updateNotesInFirebase(state.notes);
    },
    toggleVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
    setActiveNoteId: (state, { payload }) => {
      state.activeNoteId = payload;
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload;
    },
  },
});

export const {
  addNote,
  addToNotes,
  updateNote,
  setMultipleNotes,
  deleteNote,
  toggleVisible,
  setActiveNoteId,
  setActiveNote,
} = notesSlice.actions;
export default notesSlice.reducer;
