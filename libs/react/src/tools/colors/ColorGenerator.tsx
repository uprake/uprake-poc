import { colorPallete } from '@zoratrox/ui';
import React from 'react';
import { tw } from 'twind';
import ColorPallete from './ColorPallete';

interface Props {
  color: string;
}
function ColorGenerator({ color }: Props) {
  const shades = colorPallete(color);

  return (
    <div>
      <div className={tw`flex`}>
        {shades.map((shade, index) => (
          <ColorPallete code={(index + 1) * 100} shade={shade} />
        ))}
      </div>
    </div>
  );
}

ColorGenerator.defaultProps = {
  color: '#d946ef',
};

export default ColorGenerator;
