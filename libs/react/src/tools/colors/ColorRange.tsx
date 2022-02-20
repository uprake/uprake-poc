import { colorPalleteRange } from '@zoratrox/ui';
import React, { useEffect, useState } from 'react';
import { tw } from 'twind';
import ColorPallete from './ColorPallete';

interface Props {
  colors: string[];
}

function ColorRange({ colors }: Props) {
  const shades = colorPalleteRange(colors);

  return (
    <div>
      <h3>Color Shades Generators using extremas</h3>
      <div className={tw`flex`}>
        {shades.map((shade, index) => (
          <ColorPallete code={(index + 1) * 100} shade={shade} />
        ))}
      </div>
    </div>
  );
}

ColorRange.defaultProps = {
  colors: ['#f3e8ff', '#a855f7', '#581c87'],
};

export default ColorRange;
