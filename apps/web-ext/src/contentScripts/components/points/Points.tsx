// import React from 'react'

import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { IFrame } from './IFrame';
import InlineMenu from './InlineMenu';
import { style, styleGen } from './style';
import Paragraph from '@tiptap/extension-paragraph';

interface PointsProp {
  type: 'tbr' | 'mpr' | 'point';
  isEditable: boolean;
}

function Points({ type, isEditable }: PointsProp) {
  const [content, setContent] = useState('');
  const editor = useEditor({
    extensions: [
      StarterKit,
      // Paragraph.configure({
      //   HTMLAttributes: {
      //     class: ' m-0',
      //   },
      // }),
    ],
    injectCSS: false,
    editorProps: {
      attributes: {
        style: 'outline: none',
      },
    },
    autofocus: 'end',
    // onEnter ,
    // setScrolling,
    onCreate({ editor }: any) {
      console.log('created');
      // editor.commands.focus('end');
    },

    onFocus({}) {
      console.log('focused');
    },
    onBlur({}) {
      console.log('blured');
    },
    content: 'Hi there ',
    onUpdate({ editor }: any) {
      //
      setContent(editor.getHTML());
      // console.log(editor.getHTML());
    },
  });

  useEffect(() => {
    editor?.commands.focus('end');
    editor?.commands;
  }, [isEditable]);
  return (
    <>
      <IFrame
      // style={styleGen.frame({}) }
      >
        <div style={styleGen.point({ variant: type })}>
          <div style={style.pointIcon}>
            <IoWarningOutline />
          </div>
          <div id="editorWrapper" style={style.pointEditor}>
            <InlineMenu editor={editor} />
            <EditorContent id="editorContent" editor={editor} />
          </div>
        </div>
      </IFrame>
      <hr />
      <hr />
      <hr />
    </>
  );
}

export default Points;
