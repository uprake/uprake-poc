// import React from 'react'

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { style, styleGen } from './style';
import { IoWarningOutline } from 'react-icons/io5';
import InlineMenu from './InlineMenu';
import { IFrame } from './IFrame';

interface PointsProp {
  type: 'tbr' | 'mpr' | 'point';
}

function Points({ type }: PointsProp) {
  const editor = useEditor({
    extensions: [StarterKit],
    injectCSS: false,
    editorProps: {
      attributes: {
        style: 'outline: none',
      },
    },
    content: '<p>Hello World!</p>',
  });

  return (
    <div style={styleGen.frame({})}>
      <div style={styleGen.point({ variant: type })}>
        <div style={style.pointIcon}>
          <IoWarningOutline />
        </div>
        <div style={style.pointEditor}>
          <InlineMenu editor={editor} />
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
}

export default Points;
