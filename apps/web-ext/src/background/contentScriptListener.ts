export const contentScriptListener = () => {
  browser.runtime.onMessage.addListener(function (
    request: any,
    sender: any,
    sendResponse: any
  ) {
    if (request.action == 'setUser') {
      console.log('request from contnet', request);

      localStorage.setItem('uprakeUser', request.user);
    }
  });
};
