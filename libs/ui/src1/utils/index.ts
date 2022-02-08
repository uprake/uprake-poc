export function getKeys<T extends string>(object: Record<T, any>): Array<T> {
  return Object.keys(object) as Array<T>;
}
