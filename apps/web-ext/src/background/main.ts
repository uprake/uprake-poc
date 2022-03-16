import { onMessage, sendMessage } from 'webext-bridge';
import { Tabs } from 'webextension-polyfill';
import browser from 'webextension-polyfill';
import { resolve } from 'path';

console.log('background');

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
  // console.log('tabbed');
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

browser.runtime.onMessage.addListener((data: any) => {
  if (data.type === 'content-script') {
    return Promise.resolve(data.msg + 'received thru background');
  }
  return;
});
