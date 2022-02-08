export type variantCb = (varaint: string | number) => any;

export function variantGen(
  variants: Array<string | number>,
  cb: variantCb
): Record<string, any> {
  return variants.reduce(
    (config: any, variant: string | number) => ({
      ...config,
      [variant]: cb(variant),
    }),
    {}
  );
}

export function variantGenerator<T extends string>(
  variants: T[],
  cb: (variant: T) => any
): Record<T, any> {
  return variants.reduce((config: any, variant: T) => {
    config[variant] = cb(variant);
    return config;
  }, {});
}
