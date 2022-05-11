import React, { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import Card from '../card/Card';
import {
  getEditorPositionX,
  getEditorPositionY,
} from '../utils/elements.utils';
import { dragableStyle } from './dragable.style';

function Dragable({ isEditable, setIsEditable, x = 0, y = 0 }: any) {
  const editorRef = useRef<any>();

  useEffect(() => {
    editorRef.current.updatePosition({
      x: getEditorPositionX(x, editorRef),
      y: getEditorPositionY(y, editorRef),
    });
  }, [isEditable]);
  return (
    <div>
      Draggable
      <div style={{ fontSize: '14px' }}>
        <Rnd
          ref={editorRef}
          style={{
            ...dragableStyle.rnd,
            // display: isEditable ? 'block' : 'none',
          }}
          default={{
            x: x,
            y: y,
            width: '320',
            height: '320',
          }}
          minHeight="300"
          minWidth={320}
          bounds="window"
        >
          <Card isEditable={isEditable} setIsEditable={setIsEditable}></Card>
        </Rnd>
      </div>
    </div>
  );
}

export default Dragable;
