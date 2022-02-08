
import { keys } from "lodash";
import { style, theme } from "twind/style";
import { variantKeysGen } from "../../generators/theme.gen";
import { variantGen } from "../../utils/variant.util";
import { fontTokenConfig } from "./config";

const weights = keys(theme("fontWeight"));


export const consoleFn = () => {
  console.log(variantGen(
    variantKeysGen(fontTokenConfig.fontSize, "fontSize"),
    (token) => `text-${token}`
  ),)
}

// color is the
export const fontToken = style({
  base: "text-base subpixel-antialiased",
  variants: {
    font: variantGen(
      variantKeysGen(fontTokenConfig.fontFamily, "fontFamily"),
      (token) => `font-${token}`
    ),
    weight: variantGen(weights, (token) => `font-${token}`),
    size: variantGen(
      variantKeysGen(fontTokenConfig.fontSize, "fontSize"),
      (token) => `text-${token}`
    ),
    spacing: variantGen(
      variantKeysGen({}, "letterSpacing"),
      (token) => `tracking-${token}`
    ),
  },

  defaults: {
    font: "default",
    size: '2xl', 
    weight: "normal",
  },
});
