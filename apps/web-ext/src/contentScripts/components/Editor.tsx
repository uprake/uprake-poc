// import React from 'react'

import Paragraph from '@tiptap/extension-paragraph';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import { IFrame } from './IFrame';

interface PointsProp {
  type: 'tbr' | 'mpr' | 'point';
  isEditable: boolean;
}

function Editor({ editorContent, setCurrNote, isEditable }: any) {
  const [iframeRef, setIframeRef] = useState<any>(null);

  console.log('editor rendered');
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
      editor.commands.focus('end');
    },

    onFocus({}) {
      console.log('focused');
    },
    onBlur({}) {
      console.log('blured');
    },
    content: editorContent,
    onUpdate({ editor }: any) {
      //
      // save content in the browser storage\

      setCurrNote((note: any) => ({
        ...note,
        content: editor.getJSON(),
      }));
    },
  });

  useEffect(() => {
    console.log('focused');
    editor?.commands.focus('end');
  }, [isEditable]);

  useEffect(() => {
    editor?.commands.setContent(editorContent);
  }, [editorContent]);

  return (
    <>
      <IFrame
      //   iframeRef={iframeRef} setIframeRef={setIframeRef}
      >
        <div id="editorWrapper" style={{ height: '100%' }}>
          <EditorContent id="editorContent" editor={editor} />
        </div>
      </IFrame>
    </>
  );
}

export default Editor;
