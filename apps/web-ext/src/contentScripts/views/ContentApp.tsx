import { useEffect, useState } from 'react';
import Browser from 'webextension-polyfill';
import Menu from '../components/menu/Menu';

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);
  // const [x, setX] = useState<any>(0);
  // const [y, setY] = useState<any>(0);

  const toggleEditor = (obj: any) => {
    setIsEditable((a) => !a);
  };

  useEffect(() => {
    document.onmousemove = (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    };
  }, []);

  useEffect(() => {
    Browser.runtime.onMessage.addListener(toggleEditor);
  }, []);
  return (
    <>
      <div>Menu</div>
      <Menu isEditable={isEditable} x={window.mouseX} y={window.mouseY} />
    </>
  );
};
