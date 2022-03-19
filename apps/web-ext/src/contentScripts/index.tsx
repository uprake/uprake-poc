import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { setup, tw } from 'twind';
import { onMessage } from 'webext-bridge';
import { injectStylesExt, rootSelector } from '~/web-ext/utils';
import { db } from '../background/db';
import { ContentApp } from './views/ContentApp';

setup({
  preflight: false,
});
const rootStyle = `top-0 right-0 left-0 bottom-0 scroll-auto bg-blue-500 bg-opacity-75 fixed z-[100000]`;

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  console.info('[vitesse-webext] Hello world from content script');

  db.friends
    .bulkPut([
      { id: 1, name: 'Josephine', age: 21 },
      { id: 2, name: 'Per', age: 75 },
      { id: 3, name: 'Simon', age: 5 },
      // { id: 4, name: 'Sara', age: 50, notIndexedProperty: 'foo' },
    ])
    .then(() => {
      console.log(db.friends.where('age').between(0, 25).toArray());
    });

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data}"`);
  });

  // mount component to context window
  const container = document.createElement('div');
  container.setAttribute('class', tw`${rootStyle}`);
  // const root = document.createElement('div');
  const root = rootSelector();
  const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) ||
    container;
  injectStylesExt(['dist/contentScripts/style.css'], container);

  shadowDOM.prepend(root);
  document.body.prepend(container);

  ReactDOM.render(
    <StrictMode>
      <ContentApp />
    </StrictMode>,
    root
  );
})();
