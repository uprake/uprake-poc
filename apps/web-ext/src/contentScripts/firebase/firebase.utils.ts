import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getUTVideoIdFromUrl } from '../components/utils/video.utils';
import { INote } from '../interfaces/shared.interace';
import { db } from './firebase';

export const addNoteToFirebase = async (currNote: INote) => {
  const videoNotesRef = doc(db, 'notes', 'id-' + getUTVideoIdFromUrl());
  const docSnap = await getDoc(videoNotesRef);

  if (docSnap.exists()) {
    await updateDoc(videoNotesRef, {
      notes: arrayUnion(currNote),
    });
  } else {
    await setDoc(videoNotesRef, {
      src: window.location.href,
      notes: [currNote],
    });
  }
};

export const updateNotesInFirebase = async (notes: INote[]) => {
  console.log('notes', notes);
  const videoNotesRef = doc(db, 'notes', 'id-' + getUTVideoIdFromUrl());
  console.log('hi 1');
  const docSnap = await getDoc(videoNotesRef);

  if (docSnap.exists()) {
    console.log('hi 2');

    await updateDoc(videoNotesRef, {
      notes: [...notes],
    });

    console.log('hi 3');
  } else {
    await setDoc(videoNotesRef, {
      src: window.location.href,
      notes: notes,
    });
  }
};

export const getAllNotesFromFirebase = () => {
  const videoNotesRef = doc(db, 'notes', 'id-' + getUTVideoIdFromUrl());

  return getDoc(videoNotesRef)
    .then((res: any) => {
      //   setAllNotes(res.data().notes);
      return res.data()?.notes ?? [];
    })
    .catch((err: any) => {
      console.log(err);
      return err;
    });
};
