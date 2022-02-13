export interface FontTokenConfig {
  family?: string;
  size?: string;
  weight?: string;
  italics?: boolean;
  antialiased?: boolean;
}

type FontDecoration =
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'no-underline';

type FontTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'normal-case';
export interface FontStyleTokenConfig {
  weight?: string;
  italics?: 'italic' | 'not-italic';
  decoration?: FontDecoration;
  transform?: FontTransform;
}

export interface FontSpacingTokenConfig {
  letterSpacing?: string;
  lineHeight?: string;
}
