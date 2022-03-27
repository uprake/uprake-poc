import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { IFrame } from '~/contentScripts/components/points/IFrame';
import Points from '~/contentScripts/components/points/Points';
import Button from '../buttons/Button';
import { menuStyle } from './menu.style';

declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

function Menu({ isEditable, x, y }: any) {
  const [videoEl, setVideoEl] = useState<HTMLElement>();

  const [editorType, setEditorType] = useState<any>('tbr');
  console.log(x, y);

  const editorRef = useRef<any>();

  useEffect(() => {
    editorRef.current.updatePosition({ x: x, y: y });
  }, [x, y]);
  console.log(editorRef.current);

  return (
    <div>
      <Rnd
        // ref={c => { editorRef = c }}
        ref={editorRef}
        style={{ ...menuStyle.rnd, display: isEditable ? 'block' : 'none' }}
        default={{
          x: x,
          y: y,
          width: '320',
          height: '320',
        }}
        minHeight="320"
        minWidth={320}
        bounds="window"
      >
        <IFrame>
          <div style={menuStyle.header}>
            <Button className="bg-blue-500" title="TBR"></Button>
            <Button title="MPR"></Button>
            <Button title="SS"></Button>
          </div>
          <div>
            <div style={menuStyle.trackPad}>
              <Points type={editorType} />
            </div>
          </div>
        </IFrame>
      </Rnd>
    </div>
  );
}

export default Menu;
