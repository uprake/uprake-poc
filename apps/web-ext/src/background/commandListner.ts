import Browser from 'webextension-polyfill';

export const commandListener = () => {
  Browser.commands.onCommand.addListener(function (command) {
    if (command === 'toggle-editor') {
      console.log('toggle-editor called');
      // open new editor instance
      // console.log()
      // open old instance

      //   const toggleEditor = (tabs: any) => {
      //     Browser.tabs.sendMessage(
      //       tabs[0].id,
      //       { greeting: 'hello' },
      //       function (response) {
      //         console.log(response.farewell);
      //       }
      //     );
      //   };
      Browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs: any) => {
          Browser.tabs
            .sendMessage(tabs[0].id, {
              action: 'toggleEditor',
              tabsObj: tabs,
            })
            .then((res: any) => {
              console.log(res);
            });
        });
    }
  });
};
