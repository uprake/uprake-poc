import Paragraph from '@tiptap/extension-paragraph';
// import React from 'react'
import { EditorContent, generateHTML, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useMemo } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { style, styleGen } from '../points/style';
import Document from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import { RiDivideFill } from 'react-icons/ri';
import { tw } from 'twind';
import { FiClock } from 'react-icons/fi';
import { getTimeInMins } from '../video/video.utils';

function ListPoint({ note }: any) {
  const output = useMemo(() => {
    return generateHTML(note.note, [
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          style: 'margin : 3px',
        },
      }),
    ]);
  }, [note.note]);

  return (
    <div
      className={tw`my-3 w-[300px] overflow-hidden h-[83px] `}
      style={styleGen.point({ variant: note.type })}
    >
      <div className={tw`p-3`}>
        <div>
          <span>
            <FiClock />
          </span>
          <span> {getTimeInMins(note.time)}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
}

export default ListPoint;
