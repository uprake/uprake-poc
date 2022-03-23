import { CSSProperties } from 'react';

export const style: Record<string, CSSProperties> = {
  point: {
    padding: 0,
    display: 'flex',
    background: 'rgba(255, 0, 0, 0.75)',
  },
  pointIcon: {
    width: '25px',
    padding: '15px 0px',
    paddingLeft: '10px',
  },
  pointEditor: {
    flexGrow: 1,
  },
};
