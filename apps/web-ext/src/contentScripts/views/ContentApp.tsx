import { useEffect, useState } from 'react';
import { tw } from 'twind';
import Dragable from '../components/dragable/Dragable';
declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEditor = () => {
    setIsEditable((a) => !a);
  };

  useEffect(() => {
    document.onmousemove = (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };

    browser.runtime.onMessage.addListener(function (
      request: any,
      sender: any,
      sendResponse: any
    ) {
      if (request.action === 'toggleEditor') {
        toggleEditor();
      }
    });
  }, []);

  return (
    <div className={tw`text-[16px]`}>
      ContentApp
      {isEditable ? (
        <Dragable
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          x={window.mouseX}
          y={window.mouseY}
        ></Dragable>
      ) : (
        <div>Non Editable</div>
      )}
    </div>
  );
};
