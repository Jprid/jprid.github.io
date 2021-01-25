import { Injectable } from '@angular/core';
// https://mika-s.github.io/javascript/colors/hsl/2017/12/05/generating-random-colors-in-javascript.html
// Note: the examples provided on this site do not yield the colors included, providing a 100 to the lightness value always produces the color white.
// 
@Injectable({
  providedIn: 'root'
})
export class ColorGeneratorService {
  constructor() { }

  public generateHslaColors(amount: number): string[] {
    const [saturation, lightness, alpha] = [50, 40, 1];
    const colors = [];
    const divisor = amount >= 36 ? amount / 2 : amount;
    const huedelta = Math.trunc(360 / divisor);
    for (let i = 0; i < amount; i++) {
      const hue = i * huedelta;
      const saturationIncrement = i >= 36 ? i * 10 % 100 : saturation; 
      const lightnessIncrement = i >= 36 ? i * 15 % 75: lightness;
      colors.push(`hsla(${hue},${saturationIncrement}%,${lightnessIncrement}%,${alpha})`);
    }
    return colors;
  }
}
