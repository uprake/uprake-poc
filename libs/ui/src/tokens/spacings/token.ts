import { style } from "twind/style";
import { variantKeysGen } from "../../generators/theme.gen";
import { variantGen } from "../../utils/variant.util";
import { spacingTokenConfig } from "./config";

export const spacingToken = style({
  base: "",
  variants: {
    margin: variantGen(
      variantKeysGen(spacingTokenConfig.spacing, "spacing"),
      (token) => `font-${token}`
    ),
  },
});
