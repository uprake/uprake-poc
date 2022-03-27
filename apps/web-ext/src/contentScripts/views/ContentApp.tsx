import { useEffect, useState } from 'react';
import browser from 'webextension-polyfill';
import Menu from '../components/menu/Menu';

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEditor = (obj: any) => {
    setIsEditable((a) => !a);
  };
  useEffect(() => {
    browser.runtime.onMessage.addListener(toggleEditor);
  }, []);
  return (
    <>
      <div>Menu</div>
      <Menu isEditable={isEditable} />
    </>
  );
};
