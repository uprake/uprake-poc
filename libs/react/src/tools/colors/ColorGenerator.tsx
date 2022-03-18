import { colorPallete } from '@uprake/ui';
import React from 'react';
import { tw } from 'twind';
import CopySnippet from '../../components/CopySnippet';
import ColorPallete from './ColorPallete';

interface Props {
  color: string;
}
function ColorGenerator({ color }: Props) {
  const shades = colorPallete(color);

  let snippet: Record<string, string> = {};
  for (let i = 0; i < shades.length; i++) {
    snippet[(i + 1) * 100] = shades[i];
  }
  return (
    <div>
      <div className={tw`flex`}>
        {shades.map((shade, index) => (
          <ColorPallete code={(index + 1) * 100} shade={shade} />
        ))}
      </div>
      <CopySnippet snippet={JSON.stringify(snippet)} />
    </div>
  );
}

ColorGenerator.defaultProps = {
  color: '#d946ef',
};

export default ColorGenerator;
