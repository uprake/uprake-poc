import { useEffect, useState } from 'react';
import { tw } from 'twind';
import browser from 'webextension-polyfill';
import List from '../components/list/List';
import Card from '../components/menu/Card';
import ReactDraft from '../components/react-drafts/ReactDraft';
import {
  getCurrentVideo,
  getTimeInMins,
  getUTVideoIdFromUrl,
} from '../components/video/video.utils';

import { db } from '~/contentScripts/firebase';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { stringify } from 'querystring';
import { update } from 'lodash';

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
  const [currentTimeStamp, setCurrentTimeStamp] = useState<any>(0);
  const [note, setNote] = useState<any>();
  const [editorType, setEditorType] = useState<keyof typeof typeOptions>('tbr');
  const [allNotes, setAllNotes] = useState<NoteInterface[]>([]);
  const [showList, setShowList] = useState(false);
  const videoId = getUTVideoIdFromUrl() ?? '';
  // const notesCollectionRef = collection(db, videoId);

  const toggleEditor = (obj: any) => {
    console.log(isEditable);
    setIsEditable((a) => !a);
  };

  const appendNotes = async () => {
    if (note === '' || !note) {
      return;
    }
    const count = allNotes.length;
    const newNote: NoteInterface = {
      time: currentTimeStamp,
      type: editorType,
      note: note,
    };

    const videoNotesRef = doc(db, 'notes', 'id_' + getUTVideoIdFromUrl());
    const docSnap = await getDoc(videoNotesRef);

    if (docSnap.exists()) {
      await updateDoc(videoNotesRef, {
        notes: arrayUnion(newNote),
      });
    } else {
      await setDoc(videoNotesRef, {
        src: window.location.href,
        notes: [newNote],
      });
    }
    setAllNotes((notes: any) => {
      return [...notes, newNote];
    });
  };

  useEffect(() => {
    document.onmousemove = (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };
    browser.runtime.onMessage.addListener(toggleEditor);
  }, []);

  useEffect(() => {
    if (isEditable) {
      const currentVideo = document.getElementsByTagName('video')[0];
      console.log(currentVideo);
      console.log(currentVideo?.currentTime);
      setCurrentTimeStamp(currentVideo?.currentTime);
    }
  }, [isEditable]);

  useEffect(() => {
    if (allNotes.length > 0 && !showList) {
      setShowList(true);
    }
  }, [allNotes]);

  useEffect(() => {
    const videoNotesRef = doc(db, 'notes', 'id_' + getUTVideoIdFromUrl());
    getDoc(videoNotesRef)
      .then((res: any) => {
        setAllNotes(res.data().notes);
        console.log(res.data().notes);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={tw`w-[320px]`}>
      <div style={{ fontSize: '16px' }}>Menu</div>
      <Card
        isEditable={isEditable}
        toggleEditor={toggleEditor}
        x={window.mouseX}
        y={window.mouseY}
        initalContent={initalContent}
        note={note}
        setNote={setNote}
        appendNotes={appendNotes}
        editorType={editorType}
        setEditorType={setEditorType}
        setShowList={setShowList}
        currentTimeStamp={currentTimeStamp}
        setCurrentTimeStamp={setCurrentTimeStamp}
      />
      {showList ? (
        <List
          allNotes={allNotes}
          setCurrentTimeStamp={setCurrentTimeStamp}
          setAllNotes={setAllNotes}
          appendNotes={appendNotes}
          setNote={setNote}
          setEditorType={setEditorType}
          setInitalContent={setInitalContent}
        />
      ) : (
        ''
      )}
    </div>
  );
};
