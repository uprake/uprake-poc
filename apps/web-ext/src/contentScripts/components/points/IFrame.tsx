import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { child } from 'winston';
import './iframe.style.css';
export const IFrame = ({ children, style, ...props }: any) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  contentRef?.contentWindow?.focus();
  useEffect(() => {
    // contentRef && (contentRef.contentWindow.document.body.style.margin = '0');
    if (contentRef) {
      // not focusing properly
      mountNode.style.margin = '0';
      // setTimeout(contentRef?.contentWindow?.focus(), 100);
    }
  }, [contentRef]);
  return (
    <iframe
      id="up-iframe"
      {...props}
      style={{
        border: 0,
        boxSizing: 'content-box',
        background: 'transparent',
        ...style,
      }}
      className={'p-0'}
      ref={setContentRef}
    >
      {/* <style type="text/css">
        {`body , html {
          padding: 0 ;
          margin : 0 

        }`}
      </style> */}
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};
