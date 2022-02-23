export interface ResponsiveConfig {
  default?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  '2xl'?: string | number;
}

export type ResponsiveDecorator = keyof ResponsiveConfig;
