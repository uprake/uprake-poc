// import React from 'react'

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { style } from './style';
import { IoWarningOutline } from 'react-icons/io5';
import InlineMenu from './InlineMenu';
import { useEffect, useState } from 'react';

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
    <div style={style[type]}>
      <div style={style.pointIcon}>
        <IoWarningOutline />
      </div>
      <div style={style.pointEditor}>
        <InlineMenu editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default Points;
