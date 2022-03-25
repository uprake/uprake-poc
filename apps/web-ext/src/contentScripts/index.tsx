/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { setup, tw } from 'twind';
import { onMessage } from 'webext-bridge';
import browser from 'webextension-polyfill';
import { ContentApp } from './views/ContentApp';

setup({
  preflight: false,
});
// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.info('[vitesse-webext] Hello world from content script');

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data}"`);
  });

  const style = 'right-0 left-0 top-0 fixed  z-[10000000] ';

  // mount component to context window
  const container = document.createElement('div');
  container.setAttribute('class', tw`${style}`);
  const root = document.createElement('div');
  const styleEl = document.createElement('link');
  const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) ||
    container;
  styleEl.setAttribute('rel', 'stylesheet');
  styleEl.setAttribute(
    'href',
    browser.runtime.getURL('dist/contentScripts/style.css')
  );
  shadowDOM.appendChild(styleEl);
  shadowDOM.appendChild(root);
  document.body.prepend(container);

  ReactDOM.render(
    <React.StrictMode>
      <ContentApp />
    </React.StrictMode>,
    root
  );
})();
