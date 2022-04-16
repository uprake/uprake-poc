import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import List from '../components/list/List';
import Card from '../components/menu/Card';
import ReactDraft from '../components/react-drafts/ReactDraft';
import {
  getCurrentVideo,
  getTimeInMins,
  getUTVideoIdFromUrl,
} from '../components/video/video.utils';
interface NoteInterface {
  time: string;
  type: 'tbr' | 'mpr' | 'point';
  note: any;
}
const typeOptions = {
  tbr: 'TBR',
  mpr: 'MPR',
  point: 'POINT',
};

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [initalContent, setInitalContent] = useState<any>();
  const [currentTimeStamp, setCurrentTimeStampsetTimeStamp] = useState<any>(0);
  const [timeStamp, setTimeStamp] = useState<any>();
  const [note, setNote] = useState<any>();
  const [editorType, setEditorType] = useState<keyof typeof typeOptions>('tbr');
  const [allNotes, setAllNotes] = useState<NoteInterface[]>([]);
  const [showList, setShowList] = useState(false);
  const [destroyEditor, setDestroyEditor] = useState(false);

  const [currVideo, setCurrVideo] = useState<any>();

  // const [x, setX] = useState<any>(0);
  // const [y, setY] = useState<any>(0);

  const toggleEditor = (obj: any) => {
    console.log(isEditable);
    setIsEditable((a) => !a);
  };

  const appendNotes = () => {
    if (note === '' || !note) {
      return;
    }
    const count = allNotes.length;
    const newNote: NoteInterface = {
      time: getTimeInMins(currentTimeStamp),
      type: editorType,
      note: note,
    };
    console.log('before append ', newNote);
    setAllNotes(() => [...allNotes, newNote]);
  };

  useEffect(() => {
    document.onmousemove = (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };
  }, []);

  useEffect(() => {
    console.log('allNotes', allNotes);
  }, [allNotes]);

  useEffect(() => {
    console.log(showList);
  }, [showList]);

  useEffect(() => {
    browser.runtime.onMessage.addListener(toggleEditor);
  }, []);

  useEffect(() => {
    // console.log(getUTVideoIdFromUrl());
    // const currentVideo = getCurrentVideo();

    if (isEditable) {
      const currentVideo = document.getElementsByTagName('video')[0];
      console.log(currentVideo);
      console.log(currentVideo?.currentTime);
      setCurrentTimeStampsetTimeStamp(currentVideo?.currentTime);
    }
  }, [isEditable]);
  return (
    <>
      <div style={{ fontSize: '16px' }}>Menu</div>
      {/* <ReactDraft /> */}
      <Card
        isEditable={isEditable}
        toggleEditor={toggleEditor}
        x={window.mouseX}
        y={window.mouseY}
        // allNotes={allNotes}
        initalContent={initalContent}
        note={note}
        setNote={setNote}
        appendNotes={appendNotes}
        editorType={editorType}
        setEditorType={setEditorType}
        setShowList={setShowList}
        currentTimeStamp={currentTimeStamp}
        setCurrentTimeStampsetTimeStamp={setCurrentTimeStampsetTimeStamp}
        // destroyEditor
        // setDestroyEditor={setDestroyEditor}
      />

      {showList ? (
        <List
          allNotes={allNotes}
          setAllNotes={setAllNotes}
          appendNotes={appendNotes}
          setNote={setNote}
          setEditorType={setEditorType}
          setInitalContent={setInitalContent}
        />
      ) : (
        ''
      )}
    </>
  );
};
