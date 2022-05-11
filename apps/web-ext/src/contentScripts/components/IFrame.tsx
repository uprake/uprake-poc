import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const IFrame = ({ children, style, ...props }: any) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  useEffect(() => {
    console.log(contentRef);
    contentRef && (contentRef.contentWindow.document.body.style.margin = '0');
    if (contentRef) {
      // not focusing properly
      mountNode.style.margin = '0';
      contentRef?.contentWindow?.focus();
    }
  }, [contentRef]);
  return (
    <>
      <iframe
        id="up-iframe"
        {...props}
        style={{
          boxSizing: 'content-box',
          background: 'transparent',
          width: '100%',
          height: '100%',
          overflow: 'auto',
          fontSize: '26px !important',
        }}
        ref={setContentRef}
      >
        <style type="text/css">
          {`body , html {
          padding: 0 ;
          margin : 0 

        }`}
        </style>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
    </>
  );
};
