import Paragraph from '@tiptap/extension-paragraph';
import { generateHTML } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect } from 'react';
import { tw } from 'twind';
import { INote } from '../interfaces/shared.interace';
import {
  setActiveNote,
  setActiveNoteId,
} from '../redux/features/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { styleGen } from './card/card.style';
import { getTimeInMins } from './utils/video.utils';

function List() {
  const notes = useAppSelector((state) => state.notes);
  const activeNote = useAppSelector((state) => state.notes.activeNote);
  const dispatch = useAppDispatch();
  const output = (note: INote) => {
    return generateHTML(note.content, [
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          style: 'margin : 3px',
        },
      }),
    ]);
  };
  const clickhandler = (note: INote) => {
    dispatch(setActiveNote(note));
  };

  return (
    <div>
      {notes.isVisible ? (
        <div>
          List
          {notes.notes.map((note: INote) => (
            <div
              key={note.id}
              style={styleGen.point({ noteType: note.noteType })}
              id={note.id.toString()}
              onClick={(e) => clickhandler(note)}
            >
              <div>
                <div>@ {getTimeInMins(note.time)}</div>

                <div dangerouslySetInnerHTML={{ __html: output(note) }} />
              </div>
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
