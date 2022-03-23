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
