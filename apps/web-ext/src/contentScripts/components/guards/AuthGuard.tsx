import React, { useEffect } from 'react';
import Browser from 'webextension-polyfill';

function AuthGuard({ children }: any) {
  // console.log(browser.loca)
  //   browser.storage.local.set({ first: 'storage from background scripts' });

  console.log('auth guard');
  console.log(localStorage.getItem('content-2'));
  useEffect(() => {
    

  });
  return <div>{children}</div>;
}

export default AuthGuard;
