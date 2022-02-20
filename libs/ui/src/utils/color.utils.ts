import chroma from 'chroma-js';

export function colorPallete(baseColor: string) {
  if (chroma.valid(baseColor)) {
    // const pallete: Record<string, string> = {};
    const minColor = clrAdj('min', baseColor);
    const maxColor = clrAdj('max', baseColor);

    const scale = chroma.scale([minColor, baseColor, maxColor]);
    return scale.colors(11).slice(1, -1);
  }
  return [];
}

export function colorPalleteRange(colors: string[], stop: number = 9) {
  const scale = chroma.scale(colors);
  return scale.colors(stop);
}

function clrAdj(val: 'min' | 'max', baseColor: string) {
  let base = chroma(baseColor);
  base = val == 'min' ? base.brighten(3) : base.darken(3);
  return base.hex();
}
