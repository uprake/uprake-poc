import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { tw } from 'twind';
import Dragable from '../components/dragable/Dragable';
import List from '../components/List';
declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [currUrl, setCurrUrl] = useState('');
  //
  // const location = useLocation();

  // useEffect(() => {
  //   console.log('Location changed');
  // }, [location]);
  // //

  const toggleEditor = () => {
    setIsEditable((a) => !a);
  };

  useEffect(() => {
    document.onmousemove = (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };

    // setUrl first time page loaded
    setCurrUrl(window.location.href);

    // toggle-editor listner
    browser.runtime.onMessage.addListener(function (
      request: any,
      sender: any,
      sendResponse: any
    ) {
      // console.log('request-action', request);
      // if (request.action === 'toggleEditor') {
      //   toggleEditor();
      // }

      switch (request.action) {
        case 'urlChanged':
          console.log('url changed', request.changeInfo);
          // console.log(window.location.href);
          setCurrUrl(request.changeInfo.url);
          break;
        case 'toggleEditor':
          toggleEditor();
          break;
        default:
          console.log('onMEssage called');
      }
    });

    // url changed listner
  }, []);

  console.log('contentApp rerenderd');

  return (
    <div className={tw`text-[16px]`}>
      ContentApp
      {/* If the url changes then rerender the whole components anew */}
      <Dragable
        currUrl={currUrl}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        x={window.mouseX}
        y={window.mouseY}
      ></Dragable>
      <List></List>
    </div>
  );
};
