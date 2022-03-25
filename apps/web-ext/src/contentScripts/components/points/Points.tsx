// import React from 'react'

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { style } from './style';
import { IoWarningOutline } from 'react-icons/io5';
import InlineMenu from './InlineMenu';

function Points() {
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
    <div style={style.mpr}>
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
