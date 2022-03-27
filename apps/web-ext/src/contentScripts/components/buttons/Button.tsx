import React from 'react';

function Button({ title, ...props }: any) {
  return <button {...props}>{title}</button>;
}

export default Button;
