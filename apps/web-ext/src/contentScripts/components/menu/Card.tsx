import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { IFrame } from '~/contentScripts/components/points/IFrame';
import Points from '~/contentScripts/components/points/Points';
import { ScreenShot } from '~/contentScripts/youtube-ss/ScreenShot';
import Button from '../buttons/Button';
import { cardStyle } from './card.style';

declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

const typeOptions = {
  tbr: 'TBR',
  mpr: 'MPR',
  point: 'POINT',
};

function Card({ isEditable, x = 0, y = 0 }: any) {
  const [videoEl, setVideoEl] = useState<HTMLElement>();
  const [editorType, setEditorType] = useState<keyof typeof typeOptions>('tbr');

  const [content, setContent] = useState(typeOptions);
  // content['tbr']

  // const [currentEditor , setCurrentEditor ] = useState('')

  const editorRef = useRef<any>();

  useEffect(() => {
    editorRef.current.updatePosition({ x: x, y: y });
  }, [x, y]);

  const toggleButton = (e: any) => {
    if (e.target.id != 'ss') {
      setEditorType(e.target.id);
    }
  };

  useEffect(() => {
    console.log(content[editorType]);
  }, [editorType]);
  return (
    <div>
      <Rnd
        // ref={c => { editorRef = c }}
        ref={editorRef}
        style={{ ...cardStyle.rnd, display: isEditable ? 'block' : 'none' }}
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
          <div style={cardStyle.header}>
            <Button id="tbr" onClick={toggleButton} title="TBR"></Button>
            <Button id="mpr" onClick={toggleButton} title="MPR"></Button>
            <Button id="point" onClick={toggleButton} title="Point"></Button>
            {/* <Button id="ss" onClick={toggleButton} title="ss"></Button> */}
            <ScreenShot />
          </div>
          <div>
            <div style={cardStyle.trackPad}>
              <Points type={editorType} />
            </div>
          </div>
        </IFrame>
      </Rnd>
    </div>
  );
}

export default Card;
