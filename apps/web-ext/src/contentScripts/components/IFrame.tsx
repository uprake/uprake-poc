import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const IFrame = ({
  children,
  style,
  iframeRef,
  setIframeRef,
  ...props
}: any) => {
  //   const [iframeRef, setIframeRef] = useState<any>(null);
  const mountNode = iframeRef?.contentWindow?.document?.body;

  console.log('iframe rendered');

  useEffect(() => {
    console.log(iframeRef);
    iframeRef && (iframeRef.contentWindow.document.body.style.margin = '0');
    if (iframeRef) {
      // not focusing properly
      mountNode.style.margin = '0';
      iframeRef?.contentWindow?.focus();
    }
  }, [iframeRef]);
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
        ref={setIframeRef}
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
