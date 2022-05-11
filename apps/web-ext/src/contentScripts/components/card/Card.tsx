import React, { useEffect, useState } from 'react';
import {
  addNote,
  setActiveNote,
  toggleVisible,
  updateNote,
} from '../../redux/features/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

import Editor from '../Editor';
import { getCurrentTimeStamp, skipVideoToTime } from '../utils/video.utils';
import { IFrame } from '../IFrame';
import { tw } from 'twind';
import { isDev } from 'apps/web-ext/scripts/utils';
import { styleGen } from './card.style';

const initialContent = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Example Text',
        },
      ],
    },
  ],
};

const emptyContent = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
    },
  ],
};
const intialNote = {
  id: -2,
  noteType: 'tbr',
  time: 0,
  content: initialContent,
};
const emptyNote = {
  id: -1,
  noteType: 'tbr',
  time: 0,
  content: emptyContent,
};

const getEmptyNote = (type: any = 'tbr') => {
  return {
    id: -1,
    noteType: 'tbr',
    time: getCurrentTimeStamp(),
    content: emptyContent,
  };
};

function Card({ isEditable, setIsEditable }: any) {
  const [currNote, setCurrNote] = useState<any>(emptyNote);
  const [editorContent, setEditorContent] = useState<any>(initialContent);
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const activeNote = useAppSelector((state) => state.notes.activeNote);

  /***************************/
  // onclick of the video status bar
  // create a new note
  // also with the time at that moment

  const addNewNoteHandler = () => {
    console.log('addnewnotehandler');
    if (currNote.content?.content[0].content) {
      dispatch(
        addNote({
          ...currNote,
          id: notes.notes.length,
        })
      );
    } else {
      alert('Empty note');
    }
    setCurrNote(getEmptyNote());
    setEditorContent(emptyContent);
  };

  const upateNoteHandler = () => {
    console.log(currNote);
    if (currNote.content?.content[0].content) {
      dispatch(updateNote(currNote));
    }
    // setCurrNote(getEmptyNote());
    cancelNote();
  };

  const addNoteHandler = () => {
    console.log('addnotehandler called');

    if (currNote.id == -1) {
      addNewNoteHandler();
    } else {
      // don't directly updateNoteHandler as at the end of this fun it will again setActiveNote .
      if (currNote.content?.content[0].content) {
        dispatch(updateNote(currNote));
      }
      setCurrNote(activeNote);
      setEditorContent(activeNote.content);
    }
  };
  const toggleNoteType = (e: any) => {
    console.log(e.target.id);
    if (e.target.id != 'ss') {
      setCurrNote((note: any) => ({
        ...note,
        noteType: e.target.id,
      }));
    }
  };
  const syncTimeHandler = () => {
    console.log(getCurrentTimeStamp());
    setCurrNote((note: any) => ({
      ...note,
      time: getCurrentTimeStamp(),
    }));
  };

  const showList = () => {
    dispatch(toggleVisible());
  };

  const clearNote = () => {
    setCurrNote((note: any) => ({
      ...note,
      content: emptyContent,
    }));
    setEditorContent(emptyContent);
  };
  const cancelNote = () => {
    dispatch(setActiveNote(null));
    setCurrNote(getEmptyNote());
    setEditorContent(emptyContent);
  };

  useEffect(() => {
    if (currNote.content?.content[0].content) {
      addNoteHandler();
    }
    if (activeNote) {
      setCurrNote(activeNote);
      setEditorContent(activeNote.content);
      skipVideoToTime(activeNote.time);
    }
  }, [activeNote]);

  useEffect(() => {
    console.log(currNote);
  }, [currNote]);
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
      <div
        className={tw`h-full w-full py-5`}
        style={styleGen.point({ variant: currNote.noteType })}
      >
        <Editor
          content={editorContent}
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
