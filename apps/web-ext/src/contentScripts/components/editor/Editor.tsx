// import React from 'react'

import Paragraph from '@tiptap/extension-paragraph';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import { IFrame } from '../IFrame';
import { IEditorProps } from './editor.interface';

interface PointsProp {
  type: 'tbr' | 'mpr' | 'point';
  isEditable: boolean;
}

function Editor({ editorContent, setCurrNote, isEditable }: IEditorProps) {
  const [iframeRef, setIframeRef] = useState<any>(null);

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
        style:
          'height : 100% ; outline: none ; white-space : pre-wrap ;word-wrap: break-word',
      },
    },
    autofocus: 'end',
    // onEnter ,
    // setScrolling,
    onCreate({ editor }: any) {
      editor.commands.focus('end');
    },

    onFocus({}) {
      // console.log('focused');
    },
    onBlur({}) {
      // console.log('blured');
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
    editor?.commands.focus('end');
  }, [isEditable]);

  useEffect(() => {
    editor?.commands.setContent(editorContent);
  }, [editorContent]);

  return (
    <>
      <IFrame
      //
      // iframeRef={iframeRef}
      // setIframeRef={setIframeRef}
      >
        <div id="editorWrapper" style={{ height: '100%' }}>
          <EditorContent id="editorContent" editor={editor} />
        </div>
      </IFrame>
    </>
  );
}

export default Editor;
