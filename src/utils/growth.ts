import type { GrowthRates } from '../domain/models';
export const growthKeys = ['hp', 'str', 'mag', 'spd', 'dex', 'def', 'res', 'lck', 'cha'] as const;
export const calculateTotalGrowth = (g: GrowthRates) => growthKeys.reduce((total, key) => total + g[key], 0);
export const calculateAverageGrowth = (g: GrowthRates) => Math.round(calculateTotalGrowth(g) / 9 * 10) / 10;
export const calculateBestOffGrowth = (g: GrowthRates) => calculateTotalGrowth(g) - Math.min(g.str, g.mag);
export function growthColor(value: number) {
  const t = Math.max(0, Math.min(1, (value - 15) / 50));
  return `hsl(${210 - 192 * t} ${44 + 20 * t}% ${92 - 24 * t}%)`;
}
