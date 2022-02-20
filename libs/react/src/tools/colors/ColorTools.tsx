import React from 'react';
import ColorGenerator from './ColorGenerator';
import ColorRange from './ColorRange';

interface Props {
  colors: string[];
  strategy?: 'extrema' | 'shades';
}

function findMid(len: number) {
  if (len == 0) return 0;
  return Math.floor((len + 1) / 2) - 1;
}

function ColorTools({ colors, strategy }: Props) {
  if (strategy == 'extrema') {
    return <ColorRange colors={colors} />;
  } else {
    return <ColorGenerator color={colors[findMid(colors.length)]} />;
  }
}

ColorTools.defaultProps = {
  strategy: 'extrema',
};

export default ColorTools;
