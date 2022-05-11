import { JSONContent } from '@tiptap/react';
import { INote, INoteType } from '~/contentScripts/interfaces/shared.interace';
import { getCurrentTimeStamp } from '../utils/video.utils';

export const initialContent: JSONContent = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Example Text',
        },
      ],
    },
  ],
};
export const emptyContent: JSONContent = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
    },
  ],
};
export const intialNote: INote = {
  id: -2,
  noteType: 'tbr',
  time: 0,
  content: initialContent,
};
export const emptyNote: INote = {
  id: -1,
  noteType: 'tbr',
  time: 0,
  content: emptyContent,
};

export const getEmptyNote = (type: INoteType = 'tbr') => {
  return {
    id: -1,
    noteType: type,
    time: getCurrentTimeStamp(),
    content: emptyContent,
  };
};
