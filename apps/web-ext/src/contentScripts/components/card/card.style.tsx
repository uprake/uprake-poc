import { CSSProperties } from 'react';
import { INoteType } from '~/contentScripts/interfaces/shared.interace';
import { pointVariantConfig } from './card.data';

export const style: Record<string, CSSProperties> = {
  // mpr: pointGen({ variant: 'mpr' }),
  // tbr: pointGen({ variant: 'tbr' }),
  // point: pointGen({ variant: 'point' }),
  pointIcon: {
    width: '25px',
    padding: '15px 0px',
    paddingLeft: '10px',
  },
  pointEditor: {
    // flexGrow: 1,
    width: '85%',
    height: '100%',
    paddingTop: '10px',
  },
};

interface IPointGenArgs {
  noteType: INoteType;
}

function pointGen({ noteType }: IPointGenArgs): CSSProperties {
  const styles: CSSProperties = {
    padding: 0,
    display: 'flex',
    // height: '100%',
    border: '1.5px solid ',
    color: 'blue',
    borderRadius: '5px',
    fontSize: '15px',
  };

  styles.backgroundColor = pointVariantConfig[noteType].bg;
  // styles.borderColor = pointVariantConfig[variant].border;

  return styles;
}

interface IFrameGenArgs {}

function frameGen({}: IFrameGenArgs): CSSProperties {
  const styles: CSSProperties = {
    // width: '100%',
    // height: '100%',
    // boxSizing: 'content-box',
  };

  return styles;
}

export const styleGen = {
  point: pointGen,
  frame: frameGen,
};
