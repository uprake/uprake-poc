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

function Points({
  type,
  isEditable,
  initalContent,
  note,
  setNote,
  inList,
  destroyEditor,
  setDestroyEditor,
}: any) {
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
    content: note,
    onUpdate({ editor }: any) {
      //
      // save content in the browser storage\

      setNote(editor.getJSON());
      // console.log(editor.getHTML());
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
    if (note === 'New_note') {
      editor?.commands.clearContent();
      setNote('');
    }
  }, [note]);

  useEffect(() => {
    editor?.commands.setContent(initalContent);
  }, [initalContent]);

  // useEffect(()=>{
  //   if(destroyEditor){
  //     editor?.commands.destroy()
  //   }
  // } , [destroyEditor])
  return (
    <>
      <IFrame
      // style={styleGen.frame({}) }
      >
        <div style={styleGen.point({ variant: type })}>
          <div style={style.pointIcon}>
            <IoWarningOutline />
          </div>
          <div id="editorWrapper">
            <InlineMenu editor={editor} />
            <EditorContent id="editorContent" editor={editor} />
          </div>
        </div>
      </IFrame>
    </>
  );
}

export default Points;
