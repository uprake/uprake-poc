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

  const deleteNote = (index: any, note: any) => {
    console.log(index);
    // delete note by timestamp
    // setAllNotes((notes: any) => {
    //   const temp = notes.filter((a: any) => a.time != note.time);
    //   console.log(temp);
    //   return temp;
    // });
    // delete note by index(key)
    setAllNotes((notes: any) => {
      const temp = notes.filter((a: any, idx: any) => idx != index);
      console.log(index);

      return temp;
    });
    // const notes = allNotes.splice(index, 1);
    // setAllNotes(() => notes);
    // setAllNotes((notes: any) => {
    //   notes.splice(index, 1);
    //   console.log(notes);
    //   return notes;
    // });
  };
  return (
    <div>
      <div>All NOTES</div>
      {allNotes.map((note: any, key: any) => (
        <div key={key}>
          <div id={note.time} onClick={() => onClick(note)}>
            <ListPoint note={note}></ListPoint>
          </div>
          <div>
            <button onClick={() => deleteNote(key, note)}>x</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
