import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDg0TxLxOQW-QqLOmcJODCiuB3gF4cpAoo',
  authDomain: 'up-rake.firebaseapp.com',
  projectId: 'up-rake',
  storageBucket: 'up-rake.appspot.com',
  messagingSenderId: '1064703552400',
  appId: '1:1064703552400:web:b8fae59d72dfecd5892115',
  measurementId: 'G-29PTXJXCV1',
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
