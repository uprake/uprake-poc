import React from 'react';
import { tw } from 'twind';

function Button({ title, ...props }: any) {
  return (
    <button className={tw`cursor-pointer`} {...props}>
      {title}
    </button>
  );
}

export default Button;
