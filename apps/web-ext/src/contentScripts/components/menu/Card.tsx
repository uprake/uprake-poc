import { fontSizeToken } from 'libs/ui/src';
import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { tw } from 'twind';
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

function Card({ isEditable, toggleEditor, x = 0, y = 0 }: any) {
  const [videoEl, setVideoEl] = useState<HTMLElement>();
  const [editorType, setEditorType] = useState<keyof typeof typeOptions>('tbr');

  const [content, setContent] = useState(typeOptions);
  // content['tbr']

  // const [currentEditor , setCurrentEditor ] = useState('')

  const editorRef = useRef<any>();

  // useEffect(() => {
  //   editorRef.current.updatePosition({ x: x, y: y });
  // }, [x, y]);

  const toggleButton = (e: any) => {
    if (e.target.id != 'ss') {
      setEditorType(e.target.id);
    }
  };

  const closeEditor = () => {
    console.log('clicked');
    toggleEditor();
  };

  const dropDownlist = () => {
    console.log('list clicked');
  };

  useEffect(() => {
    console.log(content[editorType]);
  }, [editorType]);

  useEffect(() => {
    console.log('runs evry time');
  });
  useEffect(() => {
    console.log('dependenices changes');
  }, [isEditable, toggleEditor, x, y]);
  return (
    <div>
      <button onClick={() => console.log('111')}>111</button>

      {/* <Rnd
        // ref={c => { editorRef = c }}
        ref={editorRef}
        style={{ ...cardStyle.rnd, display: isEditable ? 'block' : 'none' }}
        default={{
          x: x,
          y: y,
          width: '400',
          height: '400',
        }}
        minHeight="300"
        minWidth={320}
        bounds="window"
        className={tw` bg-red-400 relative`}
      > */}
      <div className={tw`h-full w-full flex flex-col `}>
        <button onClick={() => console.log('222')}>222</button>

        {/* <div className={tw`absolute right-[-5px] top-[-5px] z-[100000000]`}>
            <button onClick={closeEditor}>x</button>
          </div> */}
        <div className={tw` w-full flex`}>
          <button onClick={() => console.log('333')}>333</button>

          <Button id="tbr" onClick={toggleButton} title="TBR"></Button>
          <Button id="mpr" onClick={toggleButton} title="MPR"></Button>
          <Button id="point" onClick={toggleButton} title="Point"></Button>
          <ScreenShot />
        </div>
        <div className={tw`h-full w-full py-3 `}>
          {/* <DemoFrame></DemoFrame> */}
          <Points type={editorType} isEditable={isEditable}></Points>
        </div>
        <div className={tw`mt-2`} style={{ fontSize: '14px' }}>
          This is the footer
          <div>List</div>
          <button onClick={() => console.log('sdfosdoifsof')}>List</button>
        </div>
      </div>
      {/* </Rnd> */}
    </div>
  );
}

export default Card;
