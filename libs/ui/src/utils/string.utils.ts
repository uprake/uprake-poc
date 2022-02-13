export function cleanSpace(str: string) {
  str = str.trim();
  return str.replace(/\s{2,}/, ' ');
}
