import { nanoid } from '@reduxjs/toolkit';
import { JSONContent } from '@tiptap/react';
import React, { useEffect, useState } from 'react';
import { tw } from 'twind';
import { getAllNotesFromFirebase } from '~/contentScripts/firebase/firebase.utils';
import { INote } from '~/contentScripts/interfaces/shared.interace';
import {
  addNote,
  setActiveNote,
  setMultipleNotes,
  toggleVisible,
  updateNote,
} from '../../redux/features/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { emptyContent, emptyNote, getEmptyNote } from '../data/note.data';
import Editor from '../editor/Editor';
import {
  getCurrentTimeStamp,
  getTimeInMins,
  skipVideoToTime,
} from '../utils/video.utils';
import { ICardProps } from './card.interface';
import { styleGen } from './card.style';

function Card({ isEditable, setIsEditable }: ICardProps) {
  const [currNote, setCurrNote] = useState<INote>(emptyNote);
  const [editorContent, setEditorContent] = useState<JSONContent>(emptyContent);
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const activeNote = useAppSelector((state) => state.notes.activeNote);

  /***************************/
  // onclick of the video status bar
  // create a new note
  // also with the time at that moment

  const addNewNoteHandler = () => {
    if (
      currNote.content?.content?.length &&
      currNote.content?.content[0].content
    ) {
      const new_note = {
        ...currNote,
        id: nanoid(),
      };

      dispatch(addNote(new_note));
      setEditorContent({ ...emptyContent });
      setCurrNote(getEmptyNote());
    } else {
      alert('Empty note');
    }
  };

  const upateNoteHandler = () => {
    if (
      currNote.content?.content?.length &&
      currNote.content?.content[0].content
    ) {
      dispatch(updateNote(currNote));
    }

    cancelNote();
  };

  const addNoteHandler = () => {
    if (currNote.id == -1) {
      addNewNoteHandler();
    } else {
      // don't directly updateNoteHandler as at the end of this functn it will again setActiveNote .

      // if (
      //   currNote.content?.content?.length &&
      //   currNote.content?.content[0].content
      // ) {
      dispatch(updateNote(currNote));
      // }
      setCurrNote(activeNote);
      setEditorContent({ ...activeNote.content });
    }
  };
  const toggleNoteType = (e: any) => {
    if (e.target.id != 'ss') {
      setCurrNote((note: INote) => ({
        ...note,
        noteType: e.target.id,
      }));
    }
  };
  const syncTimeHandler = () => {
    setCurrNote((note: INote) => ({
      ...note,
      time: getCurrentTimeStamp(),
    }));
  };

  const showList = () => {
    dispatch(toggleVisible());
  };

  const clearNote = () => {
    setCurrNote((note: INote) => ({
      ...note,
      content: emptyContent,
    }));
    setEditorContent({ ...emptyContent });
  };
  const cancelNote = () => {
    setEditorContent({ ...emptyContent });
    dispatch(setActiveNote(null));
    setCurrNote(getEmptyNote());
  };

  useEffect(() => {
    if (
      currNote.content?.content?.length &&
      currNote.content?.content[0].content
    ) {
      addNoteHandler();
    }
    if (activeNote) {
      setCurrNote(activeNote);
      setEditorContent({ ...activeNote.content });
      skipVideoToTime(activeNote.time);
    }
  }, [activeNote]);

  useEffect(() => {
    getAllNotesFromFirebase().then((res: any) => {
      dispatch(setMultipleNotes(res));
    });
  }, []);
  return (
    <div>
      Card
      <div>
        <button id="tbr" onClick={toggleNoteType}>
          TBR
        </button>
        <button id="mpr" onClick={toggleNoteType}>
          MPR
        </button>
        <button id="point" onClick={toggleNoteType}>
          POINT
        </button>
        <button id="ss">SS</button>
        <button id="sync" onClick={syncTimeHandler}>
          sync
        </button>
        <button onClick={cancelNote}>Cancel</button>
      </div>
      <div>Time @ {getTimeInMins(currNote.time)}</div>
      <div
        className={tw`h-full w-full py-5`}
        style={styleGen.point({ noteType: currNote.noteType })}
      >
        <Editor
          editorContent={editorContent}
          setCurrNote={setCurrNote}
          isEditable={isEditable}
        ></Editor>
      </div>
      <div>
        <button onClick={showList}>List</button>
        <button onClick={clearNote}>Clear</button>
        {activeNote ? (
          <button onClick={upateNoteHandler}>Update</button>
        ) : (
          <button onClick={addNewNoteHandler}>Create New</button>
        )}
      </div>
    </div>
  );
}

export default Card;
