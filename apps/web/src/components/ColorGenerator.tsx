import { colorPallete } from '@zoratrox/ui';
import React, { useEffect, useState } from 'react';
import { tw } from 'twind';

function ColorGenerator() {
  const [color, setColor] = useState('#d946ef');
  const [shades, setShades] = useState<string[]>([]);

  function genShades(color: string) {
    const pallete = colorPallete(color);
    console.log(pallete);
    setShades(pallete);
  }

  useEffect(() => {
    if (color) {
      genShades(color);
    }
    return () => {
      setShades([]);
    };
  }, [color]);

  return (
    <div>
      <input
        type="text"
        className={tw`border-1 border-gray-700 m-3 w-80 px-3 py-2 rounded`}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <div className={tw`flex`}>
        {shades.map((shade, index) => (
          <div key={shade.slice(1) + index}>
            <div
              className={tw`text-white bg-[${shade}] w-28 h-10 rounded mx-px p-2 text-center`}
            ></div>
            <div className={tw`flex justify-between px-1`}>
              <span className={tw`text-sm`}>{(index + 1) * 100}</span>
              <span className={tw`text-xs text-gray-600`}>{shade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorGenerator;
