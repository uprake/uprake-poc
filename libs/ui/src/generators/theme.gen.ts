import { keys, merge } from "lodash";
import { Theme, theme } from "twind";

export function variantKeysGen(config: any, name?: keyof Theme) {
  const defaults = name ? theme(name) : {};
  return keys(merge(defaults, config));
}
