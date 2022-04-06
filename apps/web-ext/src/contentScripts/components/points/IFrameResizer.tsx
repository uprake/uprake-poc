import React, { useEffect, useRef, useState } from 'react';
import IframeResizer from 'iframe-resizer-react';
import { createPortal } from 'react-dom';

function IFrameResizer({ children, style, ...props }: any) {
  const iframeRef = useRef(null);

  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  useEffect(() => {
    console.log('called');
    console.log(children);
  }, [children, props]);
  return (
    <>
      <IframeResizer
        forwardRef={iframeRef}
        ref={setContentRef}
        heightCalculationMethod="lowestElement"
        src="https://embed.tiptap.dev/preview/Examples/Drawing"
      >
        <div ref={setContentRef}></div>
        {mountNode && createPortal(children, mountNode)}
      </IframeResizer>
    </>
  );
}

export default IFrameResizer;
