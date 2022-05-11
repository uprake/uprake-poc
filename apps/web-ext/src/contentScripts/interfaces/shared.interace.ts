import { JSONContent } from '@tiptap/react';

// export interface INoteType {
//   noteType: 'tbr' | 'mpr' | 'point';
// }

export type INoteType = 'tbr' | 'mpr' | 'point';

// interface _INote {
export interface INote {
  id: number | string;
  noteType: INoteType;
  time: string | number;
  content: JSONContent;
}
// export type INote = _INote;
