import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import Card from '../components/menu/Card';

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);
  // const [x, setX] = useState<any>(0);
  // const [y, setY] = useState<any>(0);

  const toggleEditor = (obj: any) => {
    console.log(isEditable);
    setIsEditable((a) => !a);
  };

  useEffect(() => {
    document.onmousemove = (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };
  }, []);

  useEffect(() => {
    browser.runtime.onMessage.addListener(toggleEditor);
  }, []);
  return (
    <>
      <div>Menu</div>
      <Card
        isEditable={isEditable}
        toggleEditor={toggleEditor}
        x={window.mouseX}
        y={window.mouseY}
      />
    </>
  );
};
