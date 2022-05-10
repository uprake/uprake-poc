import { collection } from 'firebase/firestore';
import { db } from '~/contentScripts/firebase';
import { getUTVideoIdFromUrl } from '../video/video.utils';

class NoteService {
  videoId = getUTVideoIdFromUrl() ?? '';
  notesCollectionRef = collection(db, this.videoId);

  addNotes = (note: any) => {
    //   return
  };
}
