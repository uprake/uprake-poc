import { CSSProperties } from 'react';

const pointVariantConfig = {
  mpr: {
    bg: 'rgba(244, 63, 94, 1)',
    border: '#e11d48',
  },
  tbr: {
    bg: '#BA77F9',
    border: '#A855F7',
  },
  point: {
    bg: '#A855F7',
    border: '#8815F4',
  },
};

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
  },
};

interface IPointGenArgs {
  variant: keyof typeof pointVariantConfig;
}

function pointGen({ variant }: IPointGenArgs): CSSProperties {
  const styles: CSSProperties = {
    padding: 0,
    display: 'flex',
    // height: '100%',
    // border: '1.5px solid ',
    color: 'white',
    borderRadius: '5px',
  };

  styles.backgroundColor = pointVariantConfig[variant].bg;
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
