import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import Menu from '../components/menu/Menu';

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);
  // const [x, setX] = useState<any>(0);
  // const [y, setY] = useState<any>(0);

  const toggleEditor = (obj: any) => {
    console.log('called');
    // setX(() => window.mouseX);
    // setY(() => window.mouseY);
    setIsEditable((a) => !a);
  };

  useEffect(() => {
    document.onmousemove = (e) => {
      // console.log(e.clientX, x, y);
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };
  }, []);

  // console.log(x, y);
  // useEffect(() => {
  //   console.log(x, y);
  // }, [isEditable]);

  useEffect(() => {
    browser.runtime.onMessage.addListener(toggleEditor);
  }, []);
  return (
    <>
      <div>Menu</div>
      <Menu isEditable={isEditable} x={window.mouseX} y={window.mouseY} />
    </>
  );
};
