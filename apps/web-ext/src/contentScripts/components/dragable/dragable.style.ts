import { CSSProperties } from 'react';

export const dragableStyle: Record<string, CSSProperties> = {
  rnd: {
    background: 'red',
    boxShadow: ' 0 0 1rem 0 rgba(0, 0, 0, .2)',
    borderRadius: '5px ',
    // backgroundColor: ' rgba(255, 255, 255, .15)',
    backgroundColor: ' hsla(0, 0%, 100%, .7)',
    backdropFilter: 'saturate(180%) blur(10px)',

    font: '30px',
    padding: '10px',
    width: '100%',
    // height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  trackPad: {
    // background: 'white',
    fontSize: '16px',
    // minHeight: '300px',
    // minWidth: '300px',
    // height: '100%',
    // width: '100%',
  },
};
