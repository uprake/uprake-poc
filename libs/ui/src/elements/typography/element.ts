import { style } from 'twind/style';
import { fontToken } from '../../tokens';
import { tokenClean } from '../../utils/token.utils';

export const typographyEl = style({
  base: tokenClean([fontToken({})]),
  variants: {
    h1: tokenClean([fontToken({ size: '5xl' })]),
    h2: tokenClean([fontToken({ size: '4xl' })]),
    h3: tokenClean([fontToken({ size: '2xl' })]),
    h4: tokenClean([fontToken({ size: 'xl' })]),
    h5: tokenClean([fontToken({ size: 'base' })]),
    h6: tokenClean([fontToken({ size: 'sm' })]),
  },
  defaults: {},
});
