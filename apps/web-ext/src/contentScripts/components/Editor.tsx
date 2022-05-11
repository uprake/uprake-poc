// import React from 'react'

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';

import { IFrame } from './IFrame';

import Paragraph from '@tiptap/extension-paragraph';
import { style, styleGen } from './card/card.style';

interface PointsProp {
  type: 'tbr' | 'mpr' | 'point';
  isEditable: boolean;
}

function Editor({ content, setCurrNote, isEditable }: any) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          style: 'margin : 3px',
        },
      }),
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
      // console.log('created');
      // editor.commands.focus('end');
    },

    onFocus({}) {
      console.log('focused');
    },
    onBlur({}) {
      console.log('blured');
    },
    content: content,
    onUpdate({ editor }: any) {
      //
      // save content in the browser storage\

      setCurrNote((note: any) => ({
        ...note,
        content: editor.getJSON(),
      }));
    },
  });

  // useEffect(()=>{

  // } , [note])

  console.log('rerender points');
  useEffect(() => {
    editor?.commands.focus('end');
    editor?.commands;
  }, [isEditable]);

  useEffect(() => {
    editor?.commands.setContent(content);
  }, [content]);

  // useEffect(()=>{
  //   if(destroyEditor){
  //     editor?.commands.destroy()
  //   }
  // } , [destroyEditor])
  return (
    <>
      <IFrame>
        <div id="editorWrapper">
          <EditorContent id="editorContent" editor={editor} />
        </div>
      </IFrame>
    </>
  );
}

export default Editor;
