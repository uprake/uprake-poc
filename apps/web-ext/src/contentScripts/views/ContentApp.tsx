import { style } from './style';

import Menu from '../components/menu/Menu';
import { useEffect, useState } from 'react';
import Browser from 'webextension-polyfill';

export const ContentApp = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEditor = (obj: any) => {
    setIsEditable((a) => !a);
  };
  useEffect(() => {
    Browser.runtime.onMessage.addListener(toggleEditor);
  }, []);
  return (
    <>
      <div>Menu</div>
      <Menu isEditable={isEditable} />
    </>
  );
};
