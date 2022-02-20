import React from 'react';
import { tw } from 'twind';

function ColorPallete({ code, shade }: any) {
  return (
    <div>
      <div
        className={tw`text-white bg-[${shade}] w-28 h-10 rounded mx-px p-2 text-center`}
      ></div>
      <div className={tw`flex justify-between px-1`}>
        <span className={tw`text-sm`}>{code}</span>
        <span className={tw`text-xs text-gray-600`}>{shade}</span>
      </div>
    </div>
  );
}

export default ColorPallete;
