// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';

// export const IFrame = ({
//   children,
//   style,
//   iframeRef,
//   setIframeRef,
//   ...props
// }: any) => {
//   //   const [iframeRef, setIframeRef] = useState<any>(null);
//   const mountNode = iframeRef?.contentWindow?.document?.body;

//   useEffect(() => {
//     iframeRef && (iframeRef.contentWindow.document.body.style.margin = '0');
//     if (iframeRef) {
//       // not focusing properly
//       mountNode.style.margin = '0';
//       iframeRef?.contentWindow?.focus();
//     }
//   }, [iframeRef]);
//   return (
//     <>
//       <iframe
//         id="up-iframe"
//         {...props}
//         style={{
//           boxSizing: 'content-box',
//           background: 'transparent',
//           width: '100%',
//           height: '100%',
//           overflow: 'auto',
//           fontSize: '26px !important',
//         }}
//         ref={setIframeRef}
//       >
//         <style type="text/css">
//           {`body , html {
//           padding: 0 ;
//           margin : 0

//         }`}
//         </style>
//         {mountNode && createPortal(children, mountNode)}
//       </iframe>
//     </>
//   );
// };

// import { useEffect, useState } from 'react';

import { textInputRule } from '@tiptap/react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { TTAdditionalStyle } from './ttAditional.style';
import { TTDefaultStyle } from './ttDefault.style';

export function createStyleTag(style: string, head: HTMLElement): void {
  const tipTapStyleTag: any = document.querySelector(
    'style[data-tiptap-style]'
  );

  if (tipTapStyleTag) {
    head.appendChild(tipTapStyleTag);
  } else {
    const styleNode = document.createElement('style');
    styleNode.setAttribute('data-tiptap-style', '');
    styleNode.innerHTML = TTDefaultStyle;
    head.appendChild(styleNode);
  }

  console.log('tttag', tipTapStyleTag);

  const addStyle = document.createElement('style');
  addStyle.innerHTML = TTAdditionalStyle;
  head.appendChild(addStyle);
  console.log('tt', addStyle);
}

export const IFrame = ({ children, ...props }: any) => {
  const [iframeBody, setIframeBody] = useState<any>(null);

  const handleLoad = (e: any) => {
    setIframeBody(e.target.contentDocument.body);
    createStyleTag(TTDefaultStyle, e.target.contentDocument.head);
  };

  return (
    <iframe
      id="up-edior-iframe`"
      srcDoc={`<!DOCTYPE html>`}
      {...props}
      onLoad={handleLoad}
      style={{
        boxSizing: 'content-box',
        // background: 'transparent',
        width: '100%',
        // background: 'red',
        height: '100%',
        // overflow: 'auto',
        // fontSize: '26px !important',
      }}
    >
      <style type="text/css">
        {`body , html {
         padding: 0 ;
        margin : 0
        }`}
      </style>

      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  );
};
