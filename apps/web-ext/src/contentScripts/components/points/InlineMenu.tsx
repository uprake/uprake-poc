import { BubbleMenu } from '@tiptap/react';
import { RiBold, RiItalic, RiStrikethrough } from 'react-icons/ri';

function InlineMenu({ editor }: any) {
  return (
    editor && (
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        BUBBLEMENU
        <div
          style={{
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
          }}
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            <RiBold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <RiItalic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <RiItalic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            <RiStrikethrough />
          </button>
        </div>
      </BubbleMenu>
    )
  );
}

export default InlineMenu;
