/* eslint-disable no-console */
import Cookies from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setup, tw } from 'twind';
import { onMessage } from 'webext-bridge';
import Browser, { cookies } from 'webextension-polyfill';
import AuthGuard from './components/guards/AuthGuard';
import { store } from './redux/store/store';
import { ContentApp } from './views/ContentApp';

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
setup({
  preflight: false,
  prefix: true,
  // hash: (a: string) => 'up-' + hash(a),
});
(() => {
  console.info('[vitesse-webext] Hello world from content script');

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data}"`);
  });

  const style = ' left-0 top-0 fixed  z-[10000000] ';

  // mount component to context window
  // const container = document.createElement("div");
  // const root = document.createElement("div");
  // const styleEl = document.createElement("link");
  // const shadowDOM =
  //   container.attachShadow?.({ mode: __DEV__ ? "open" : "closed" }) ||
  //   container;
  // styleEl.setAttribute("rel", "stylesheet");
  // styleEl.setAttribute(
  //   "href",
  //   browser.runtime.getURL("dist/contentScripts/style.css")
  // );
  // shadowDOM.appendChild(styleEl);
  // shadowDOM.appendChild(root);
  // document.body.appendChild(container);

  // ReactDOM.render(
  //   <React.StrictMode>
  //     <ContentApp />
  //   </React.StrictMode>,
  //   root
  // );
  // mount component to context window
  const container = document.createElement('div');
  container.setAttribute('class', tw`${style}`);
  const root = document.createElement('div');
  container.appendChild(root);
  document.body.prepend(container);

  //

  localStorage.setItem('content-2', window.location.href);
  // script for cookies n auth
  // Browser?.cookies
  //   .getAllCookieStores()
  //   .then((res: any) => {
  //     console.log(res);
  //   })
  //   .catch((err: any) => {
  //     console.log(err);
  //   });

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthGuard>
          <ContentApp />
        </AuthGuard>
      </Provider>
    </React.StrictMode>,
    root
  );
})();
