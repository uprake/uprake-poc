export * from "./typography";

import { style } from "twind/style";

export const spacingToken = style({
  base: "py-2 px-4",
  variants: {
    size: {
      sm: `py-1.5 px-3`,
      md: `py-2 px-4`,
      lg: `py-3 px-5`,
    },
  },
  defaults: {
    size: "sm",
  },
});

export const buttonToken = style(spacingToken, {
  base: `rounded`,
  variants: {
    color: {
      blue: `bg-blue-500 hover:bg-blue-600 text-blue-100`,
      red: `bg-red-500 hover:bg-red-600 text-red-100`,
    },
  },
  defaults: {
    color: "red",
  },
});
