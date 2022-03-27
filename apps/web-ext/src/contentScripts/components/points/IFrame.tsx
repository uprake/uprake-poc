import { useState } from 'react';
import { createPortal } from 'react-dom';

export const IFrame = ({ children, style, ...props }: any) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  contentRef?.contentWindow?.focus();

  return (
    <iframe
      {...props}
      style={{
        border: 0,
        boxSizing: 'content-box',
        background: 'transparent',
        ...style,
      }}
      ref={setContentRef}
    >
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};
