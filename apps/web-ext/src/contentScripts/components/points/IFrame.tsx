import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import IframeResizer from 'iframe-resizer-react';
import './iframe.style.css';
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

      // setTimeout(contentRef?.contentWindow?.focus(), 100);
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
          // padding: '10px 0 ',
          // ...style,
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

      {/* <IframeResizer
        id="up-iframe"
        // forwardRef={setContentRef}
        // heightCalculationMethod="lowestElement"
        // inPageLinks
        log
        // onMessage={onMessage}
        // onResized={onResized}
        width="100%"
        height="100%"
        frameBorder="0"
        // src="http://anotherdomain.com/iframe.html"
        // style={{ width: '1px', minWidth: '100%'}}
      >
        <div ref={setContentRef} {...props}>
          {mountNode && createPortal(children, mountNode)}
        </div>
      </IframeResizer> */}
    </>
  );
};
