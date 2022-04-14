import React from 'react';
import ListPoint from './ListPoint';

function List({
  allNotes,
  setAllNotes,
  appendNotes,
  setNote,
  setEditorType,
  setInitalContent,
}: any) {
  const onClick = (note: any) => {
    // appendNotes();
    console.log(note);
    setNote(note.note);
    setEditorType(note.type);
    setInitalContent(note.note);
  };

  const deleteNote = (note: any) => {
    setAllNotes((notes: any) => {
      const temp = notes.filter((a: any) => a.time != note.time);
      console.log(temp);
      return temp;
    });
  };
  return (
    <div>
      <div>All NOTES</div>
      {allNotes.map((note: any, key: any) => (
        <div>
          <div key={key} id={note.time} onClick={() => onClick(note)}>
            <ListPoint note={note}></ListPoint>
          </div>
          <div>
            <button onClick={() => deleteNote(note)}>x</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
