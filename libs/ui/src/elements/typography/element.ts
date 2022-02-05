import { style } from "twind/style";
import { fontToken } from "../../tokens/typography";
import { fontVariantConfig } from "../../tokens/typography/config";
import { getKeys } from '../../utils';
import { variantGenerator } from "../../utils/variant.util";

type ITypographyElVariant = keyof typeof fontVariantConfig;

export const typographyEl = style(fontToken, {
  variants: {
    type: variantGenerator<ITypographyElVariant>(
      getKeys<ITypographyElVariant>(fontVariantConfig),
      (token: ITypographyElVariant) => fontToken(fontVariantConfig[token])
    ),
  },
  defaults: {
    type: "body",
  },
});
