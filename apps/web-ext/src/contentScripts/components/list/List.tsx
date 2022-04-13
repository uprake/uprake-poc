import React from 'react';
import ListPoint from './ListPoint';

function List({ allNotes }: any) {
  const onClick = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <div>All NOTES</div>
      {allNotes.map((note: any, key: any) => (
        <div key={key} id={note.time} onClick={onClick}>
          <ListPoint note={note}></ListPoint>
        </div>
      ))}
    </div>
  );
}

export default List;
