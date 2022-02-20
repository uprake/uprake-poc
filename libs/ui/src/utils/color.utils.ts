import chroma from 'chroma-js';

export function colorPallete(baseColor: string) {
  if (chroma.valid(baseColor)) {
    // const pallete: Record<string, string> = {};
    const minColor = clrAdj('min', baseColor);
    const maxColor = clrAdj('max', baseColor);
    console.log('minColor', minColor);
    console.log('maxColor', maxColor);
    return chroma
      .scale([minColor, baseColor, maxColor])
      .colors(11)
      .slice(1, -1);
  }
  return [];
}

export function colorPalleteRange(colors: string[], stop: number = 9) {
  return chroma.scale(colors).colors(stop);
}

function clrAdj(val: 'min' | 'max', baseColor: string) {
  let base = chroma(baseColor);
  const temp = base.temperature();
  // const baseHue = base.get('hsv.h');
  // const baseSat = base.get('hsv.s');
  // const baseVal = base.get('hsv.v');
  // console.log(baseHue);

  // const hue = { min: 0.9 * baseHue, max: 1.1 * baseHue };
  // const saturation = { min: -5, max: 5 };
  // const value = { min: 0.9 * baseVal, max: 1.1 * baseVal };

  base = val == 'min' ? base.brighten(3) : base.darken(3);
  if (val == 'max') {
    // base = base.saturate(0.1);
  }
  // return base
  // .set('hsv.h', `*${hue[val]}`)
  // .set('hsv.s', `${saturation[val]}`)
  // .set('hsv.v', `*${value[val]}`);
  console.log(base.hsv());
  return base.hex();
}
