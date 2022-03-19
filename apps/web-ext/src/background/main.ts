import { sendMessage } from 'webext-bridge';
import browser, { Tabs } from 'webextension-polyfill';

// db.friends
//   .bulkPut([
//     { id: 1, name: 'Josephine', age: 21 },
//     { id: 2, name: 'Per', age: 75 },
//     { id: 3, name: 'Simon', age: 5 },
//     // { id: 4, name: 'Sara', age: 50, notIndexedProperty: 'foo' },
//   ])
//   .then(() => {
//     console.log(db.friends.where('age').between(0, 25).toArray());
//   });

console.log('hi there');

// only on dev mode
if (import.meta.hot) {
  // @ts-expect-error for background HMR
  import('/@vite/client');
  // load latest content script
  import('./contentScriptHMR');
}

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Extension installed');
});

let previousTabId = 0;

// communication example: send previous tab title from background page
// see shim.d.ts for type declaration
browser.tabs.onActivated.addListener(async ({ tabId }) => {
  if (!previousTabId) {
    previousTabId = tabId;
    return;
  }

  let tab: Tabs.Tab;

  try {
    tab = await browser.tabs.get(previousTabId);
    previousTabId = tabId;
  } catch {
    return;
  }

  // eslint-disable-next-line no-console
  console.log('previous tab', tab);
  sendMessage(
    'tab-prev',
    { title: tab.title },
    { context: 'content-script', tabId }
  );
});

// onMessage("get-current-tab", async () => {
//   try {
//     const tab = await browser.tabs.get(previousTabId);
//     return {
//       title: tab?.id,
//     };
//   } catch {
//     return {
//       title: undefined,
//     };
//   }
// });
