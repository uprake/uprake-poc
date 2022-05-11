export function elementChain(query: string) {
  const els = Array.from(document.querySelectorAll(query));

  const chain = {
    isVisible() {
      els.filter((el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      });
      return chain;
    },

    toArray() {
      return els;
    },
  };

  return chain;
}

export function getEditorPositionX(x: any, editor: any) {
  // console.log('before x ', x);

  if (x < 0) {
    return 0;
  }
  if (x + parseInt(editor.current.resizable.state.width) > window.innerWidth) {
    // console.log(window.innerWidth - editor.current.resizable.state.width);
    return window.innerWidth - editor.current.resizable.state.width;
  }

  return x;
}

export function getEditorPositionY(y: any, editor: any) {
  // console.log('before y  ', y);
  // console.log(editor.current.resizable.state.height);
  // console.log(y + editor.current.resizable.state.height);
  // console.log(window.innerHeight);
  if (y < 0) {
    // console.log(0);
    return 0;
  }
  if (
    y + parseInt(editor.current.resizable.state.height) >
    window.innerHeight
  ) {
    // console.log(window.innerHeight - editor.current.resizable.state.height);
    return window.innerHeight - editor.current.resizable.state.height;
  }

  return y;
}
