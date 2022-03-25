/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { setup, tw } from 'twind';
import { onMessage } from 'webext-bridge';
import { ContentApp } from './views/ContentApp';

setup({
  preflight: false,
});
const containerStyle =
  'bottom-0 right-0 left-0 bg-opacity-75 z-[100000] fixed ';
// const rootStyle = 'text-xl';
// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.info('[vitesse-webext] Hello world from content script');

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data}"`);
  });

  const style = 'right-0 left-0 top-0 fixed bg-blue-300 z-[10000000] ';

  // mount component to context window
  const container = document.createElement('div');
  const root = document.createElement('div');
  root.id = 'uprake-xyz';
  // const styleEl = document.createElement('link');
  const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) ||
    container;
  // styleEl.setAttribute('rel', 'stylesheet');
  // styleEl.setAttribute(
  //   'href',
  //   browser.runtime.getURL('dist/contentScripts/style.css')
  // );

  // container.style.zIndex = '1000000';
  container.setAttribute('class', tw`${containerStyle}`);
  // root.setAttribute('class', tw(rootStyle));
  // shadowDOM.appendChild(styleEl);
  shadowDOM.appendChild(root);
  document.body.prepend(container);

  ReactDOM.render(
    <React.StrictMode>
      <ContentApp />
    </React.StrictMode>,
    root
  );
})();
