export * from "./typography";

import { create, style } from "twind/style";
import {virtualSheet} from 'twind/sheets'
import { twConfigExtend } from "..";

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



const sheet = virtualSheet()

const {tw} = create({
  sheet, 
  preflight: true, // do not include base style reset (default: use tailwind preflight)
  // mode: strict, // throw errors for invalid rules (default: warn)
  hash: true, // hash all generated class names (default: false)
  theme: {
    extend: {...twConfigExtend},
  }, // define custom theme values (default: tailwind theme)
  darkMode: "class", // use a different dark mode strategy (default: 'media')
})