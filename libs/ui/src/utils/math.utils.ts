export function mod(value: number, min: number = 0, max: number = 1) {
  return ((value + Math.floor(Math.abs(value)) * (max - min)) % max) + min;
}
