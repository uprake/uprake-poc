import Cookies from 'js-cookie';
import Browser from 'webextension-polyfill';

export const authScripts = () => {
  console.log('cookies auth', Cookies.getJSON()?.uprakeUser);
  const user = Cookies.getJSON()?.uprakeUser;

  Browser.runtime.sendMessage({
    action: 'setUser',
    user: user,
  });

  // if (user) {
  // Browser.tabs
  //   .query({ active: true, currentWindow: true })
  //   .then((tabs: any) => {
  //     Browser.tabs
  //       .sendMessage(tabs[0].id, {
  //         action: 'setUser',
  //         user: user,
  //       })
  //       .then((res: any) => {
  //         console.log(res);
  //       });
  //   });
  // }
};
