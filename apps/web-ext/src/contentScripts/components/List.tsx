import Paragraph from '@tiptap/extension-paragraph';
import { generateHTML } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import { INote } from '../interfaces/shared.interace';
import { deleteNote, setActiveNote } from '../redux/features/notes/notesSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import { styleGen } from './card/card.style';
import { getTimeInMins } from './utils/video.utils';

function List() {
  console.log('List rendered');
  const notes = useAppSelector((state) => state.notes);
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
  const deleteNoteHandler = (note: INote) => {
    console.log('delete called');
    dispatch(deleteNote(note));
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
                <div>
                  <div>@ {getTimeInMins(note.time)}</div>
                  <button onClick={(e: any) => deleteNoteHandler(note)}>
                    X
                  </button>
                </div>

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
