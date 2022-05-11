import React, { useEffect, useState } from 'react';
import { tw } from 'twind';
import {
  addNote,
  setActiveNote,
  toggleVisible,
  updateNote,
} from '../../redux/features/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import Editor from '../Editor';
import {
  getCurrentTimeStamp,
  getTimeInMins,
  skipVideoToTime,
} from '../utils/video.utils';
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
  const [editorContent, setEditorContent] = useState<any>(emptyContent);
  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const activeNote = useAppSelector((state) => state.notes.activeNote);

  /***************************/
  // onclick of the video status bar
  // create a new note
  // also with the time at that moment

  const addNewNoteHandler = () => {
    console.log('addnewnotehandler');
    console.log('currNote', currNote);
    console.log('editorContent', editorContent);

    if (currNote.content?.content[0].content) {
      dispatch(
        addNote({
          ...currNote,
          id: notes.notes.length,
        })
      );
      setEditorContent({ ...emptyContent });
      setCurrNote(getEmptyNote());
    } else {
      alert('Empty note');
    }
  };

  const upateNoteHandler = () => {
    console.log(currNote);
    if (currNote.content?.content[0].content) {
      dispatch(updateNote(currNote));
    }

    cancelNote();
  };

  const addNoteHandler = () => {
    console.log('addnotehandler called');

    if (currNote.id == -1) {
      addNewNoteHandler();
    } else {
      // don't directly updateNoteHandler as at the end of this functn it will again setActiveNote .
      if (currNote.content?.content[0].content) {
        dispatch(updateNote(currNote));
      }
      setCurrNote(activeNote);
      setEditorContent({ ...activeNote.content });
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
    setEditorContent({ ...emptyContent });
  };
  const cancelNote = () => {
    setEditorContent({ ...emptyContent });
    dispatch(setActiveNote(null));
    setCurrNote(getEmptyNote());
  };

  useEffect(() => {
    if (currNote.content?.content[0].content) {
      addNoteHandler();
    }
    if (activeNote) {
      setCurrNote(activeNote);
      setEditorContent({ ...activeNote.content });
      skipVideoToTime(activeNote.time);
    }
  }, [activeNote]);

  useEffect(() => {
    console.log('editorContent ', editorContent);
    console.log('currNote ', currNote);
    if (currNote.content == editorContent) {
      console.log('same');
    } else {
      console.log('different');
    }
  }, [editorContent, currNote]);
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
        style={styleGen.point({ variant: currNote.noteType })}
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
