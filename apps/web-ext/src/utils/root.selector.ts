import { tw } from 'twind';

const rootStyle = `top-0 right-0 left-0 bottom-0 scroll-auto bg-blue-500 fixed z-[1000]`;

export function rootSelector() {
  const rootEl = document.querySelector('#uprake-xyz');
  if (rootEl) {
    return rootEl;
  }
  const root = document.createElement('div');
  root.setAttribute('class', tw`${rootStyle}`);
  root.id = 'uprake-xyz';
  // document.body.prepend(root);

  return root;
}
