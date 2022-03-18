export type ITokenFallbackStrategyDict = Record<
  string,
  (prefix: string, val: string | number) => string
>;
