import React, { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { tw } from 'twind';
import Points from '~/contentScripts/components/points/Points';
import { ScreenShot } from '~/contentScripts/youtube-ss/ScreenShot';
import Button from '../buttons/Button';
import ReactDraft from '../react-drafts/ReactDraft';
import { getTimeInMins } from '../video/video.utils';
import { cardStyle } from './card.style';

declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

function Card({
  isEditable,
  toggleEditor,
  x = 0,
  y = 0,
  initalContent,
  note,
  setNote,
  editorType,
  setEditorType,
  appendNotes,
  setShowList,
  setDestroyEditor,
  currentTimeStamp,
  setCurrentTimeStamp,
  destroyEditor,
}: any) {
  const [videoEl, setVideoEl] = useState<HTMLElement>();
  const editorRef = useRef<any>();

  useEffect(() => {
    editorRef.current.updatePosition({ x: x, y: y });
  }, [isEditable]);

  const toggleButton = (e: any) => {
    if (e.target.id != 'ss') {
      setEditorType(e.target.id);
    }
  };

  const closeEditor = () => {
    console.log('clicked');
    toggleEditor();
  };

  const openList = () => {
    console.log('list clicked');
    setShowList((a: any) => !a);
  };

  const createNote = () => {
    appendNotes();
    setNote('New_note');
  };
  const clearNote = () => {
    console.log('cancled');

    // destroy editor
    setNote('New_note');
  };

  const syncTimeStamp = () => {
    const video = document.getElementsByTagName('video')[0];
    setCurrentTimeStamp(video.currentTime);
  };

  console.log('rerender card');
  return (
    <div style={{ fontSize: '14px' }}>
      <Rnd
        ref={editorRef}
        style={{
          ...cardStyle.rnd,
          display: isEditable ? 'block' : 'none',
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
        <div className={tw`h-full w-full flex flex-col relative`}>
          <button
            className={tw`absolute top-[-15px] right-[-15px] z-[10000000]`}
            onClick={closeEditor}
          >
            x
          </button>
          <div className={tw`w-full flex`}>
            <Button id="tbr" onClick={toggleButton} title="TBR"></Button>
            <Button id="mpr" onClick={toggleButton} title="MPR"></Button>
            <Button id="point" onClick={toggleButton} title="POINT"></Button>
            <ScreenShot />
            <button onClick={syncTimeStamp}> sync</button>
          </div>
          <hr />

          <div>Time @ {getTimeInMins(currentTimeStamp)}</div>
          <div className={tw`h-full w-full py-5`}>
            <Points
              type={editorType}
              isEditable={isEditable}
              initalContent={initalContent}
              note={note}
              setNote={setNote}
              destroyEditor
              setDestroyEditor={setDestroyEditor}
            ></Points>
          </div>
          <div style={{ fontSize: '14px' }}>
            <footer>footer</footer>
            <div>
              <button onClick={openList}>list</button>
              <button onClick={clearNote}>Clear</button>
              <button onClick={createNote}>Create</button>
            </div>
          </div>
        </div>
      </Rnd>
    </div>
  );
}

export default Card;
