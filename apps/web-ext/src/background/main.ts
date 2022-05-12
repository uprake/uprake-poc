import { sendMessage } from 'webext-bridge';
import Browser from 'webextension-polyfill';
import browser, { Tabs } from 'webextension-polyfill';
import { bgListeners } from './bgListeners';
import { commandsListener } from './commandsListner';

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

browser.runtime.onMessage.addListener((data: any) => {
  if (data.type === 'content-script') {
    return Promise.resolve(data.msg + 'received thru background');
  }
  return;
});

// keyboard command listners
commandsListener();
// listners from bg-scripts
// bgListeners();

Browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab: any) {
  // read changeInfo data and do something with it
  // like send the new url to contentscripts.js
  // if (changeInfo.url) {
  console.log('changeInfo', changeInfo);
  if (changeInfo.url) {
    Browser.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs: any) => {
        Browser.tabs
          .sendMessage(tabs[0].id, {
            action: 'urlChanged',
            changeInfo: changeInfo,
          })
          .then((res: any) => {
            console.log(res);
          });
      });
  }

  // }
});

// Browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab: any) {
//   alert('updated from background');
// });
