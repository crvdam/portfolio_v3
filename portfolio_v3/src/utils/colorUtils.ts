export const parseRGB = (rgbString: string): { r: number; g: number; b: number } => {
  const match = rgbString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
    };
  }
  return { r: 0, g: 0, b: 0 };
};

export const interpolateRGB = (
  color1: string,
  color2: string,
  factor: number,
): string => {
  const rgb1 = parseRGB(color1);
  const rgb2 = parseRGB(color2);
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
  return `rgb(${r}, ${g}, ${b})`;
};