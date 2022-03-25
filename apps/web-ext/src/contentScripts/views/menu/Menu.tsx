import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { createReducerContext } from 'react-use';
import Editor from '../editor/Editor';
import { menuStyle } from './menu.style';
import VerticalMenu from './VerticalMenu';

function Menu() {
  const [videoEl, setVideoEl] = useState<HTMLElement>();

  const [x, setX] = useState<any>(0);
  const [y, setY] = useState<any>(0);

  const [isEditble, setIsEditable] = useState(false);

  useEffect(() => {
    document.onmousemove = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    const newNote = (event: any) => {
      console.log(event.code);
      if (event.code == 'KeyM') {
        setIsEditable((a) => !a);
        console.log('matched');
      }
    };

    document.addEventListener('keydown', newNote);
  }, []);

  useEffect(() => {
    console.log(isEditble);
  }, [isEditble]);

  return (
    <div>
      {isEditble ? (
        <Rnd
          style={menuStyle.root}
          default={{
            x: 0,
            y: 0,
            width: 300,
            height: 300,
          }}
        >
          <div>
            <div>
              <div>TBR</div>
              <div>MPR</div>
              <div>SS</div>
            </div>
            <div>
              {/* <Editor /> */}
              <input type="text" placeholder="type here ...." />
            </div>
          </div>
        </Rnd>
      ) : (
        ''
      )}
    </div>
  );
}

export default Menu;
