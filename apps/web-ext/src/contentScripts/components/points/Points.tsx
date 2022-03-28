// import React from 'react'

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { IFrame } from './IFrame';
import InlineMenu from './InlineMenu';
import { style, styleGen } from './style';

interface PointsProp {
  type: 'tbr' | 'mpr' | 'point';
}

function Points({ type }: PointsProp) {
  const [content, setContent] = useState('');
  const editor = useEditor({
    extensions: [StarterKit],
    injectCSS: false,
    editorProps: {
      attributes: {
        style: 'outline: none',
      },
    },
    content: 'Hi there ',
    onUpdate({ editor }: any) {
      //
      setContent(editor.getHTML());
      // console.log(editor.getHTML());
    },
  });

  return (
    <IFrame style={styleGen.frame({})}>
      <div style={styleGen.point({ variant: type })}>
        <div style={style.pointIcon}>
          <IoWarningOutline />
        </div>
        <div style={style.pointEditor}>
          <InlineMenu editor={editor} />
          <EditorContent editor={editor} />
        </div>
      </div>
    </IFrame>
  );
}

export default Points;
