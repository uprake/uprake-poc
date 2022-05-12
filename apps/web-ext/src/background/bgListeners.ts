import Browser from 'webextension-polyfill';

export const bgListeners = () => {
  //
  Browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab: any) {
    // read changeInfo data and do something with it
    // like send the new url to contentscripts.js
    if (changeInfo.url) {
      Browser.tabs.sendMessage(tabId, {
        action: 'urlChanged',
        url: changeInfo.url,
      });
    }
  });
};
