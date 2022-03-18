import { colorPalleteRange } from '@uprake/ui';
import React, { useEffect, useState } from 'react';
import { tw } from 'twind';
import CopySnippet from '../../components/CopySnippet';
import ColorPallete from './ColorPallete';

interface Props {
  colors: string[];
}

function ColorRange({ colors }: Props) {
  const shades = colorPalleteRange(colors);

  let snippet: Record<string, string> = {};
  for (let i = 0; i < shades.length; i++) {
    snippet[(i + 1) * 100] = shades[i];
  }

  return (
    <div>
      <h3>Color Shades Generators using extremas</h3>
      <div className={tw`flex`}>
        {shades.map((shade, index) => (
          <ColorPallete code={(index + 1) * 100} shade={shade} />
        ))}
      </div>
      <CopySnippet snippet={JSON.stringify(snippet)} />
    </div>
  );
}

ColorRange.defaultProps = {
  colors: ['#f3e8ff', '#a855f7', '#581c87'],
};

export default ColorRange;
