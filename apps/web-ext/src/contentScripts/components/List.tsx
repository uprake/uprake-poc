import Paragraph from '@tiptap/extension-paragraph';
import { generateHTML } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect } from 'react';
import {
  setActiveNote,
  setActiveNoteId,
} from '../redux/features/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { styleGen } from './card/card.style';

function List() {
  const notes = useAppSelector((state) => state.notes);
  const activeNote = useAppSelector((state) => state.notes.activeNote);
  const dispatch = useAppDispatch();
  const output = (note: any) => {
    return generateHTML(note.content, [
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          style: 'margin : 3px',
        },
      }),
    ]);
  };
  const clickhandler = (id: any, note: any) => {
    dispatch(setActiveNote(note));
  };
  useEffect(() => {
    console.log(activeNote);
  }, [activeNote]);
  return (
    <div>
      {notes.isVisible ? (
        <div>
          List
          {notes.notes.map((note: any) => (
            <div
              key={note.id}
              style={styleGen.point({ variant: note.noteType })}
              id={note.id}
              onClick={(e) => clickhandler(note.id, note)}
            >
              <div>@{note.time}</div>
              <div dangerouslySetInnerHTML={{ __html: output(note) }} />
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default List;
