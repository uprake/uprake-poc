import browser from 'webextension-polyfill';

export function injectStyleExt(style: string) {
  const styleEl = document.createElement('link');
  styleEl.setAttribute('rel', 'stylesheet');
  styleEl.setAttribute('href', browser.runtime.getURL(style));
  return styleEl;
}

export function injectStylesExt(styles: string[], container: Element) {
  styles.forEach((style) => {
    container.prepend(injectStyleExt(style));
  });
  return container;
}
