import { growthSlots } from '../data/growth-slots';
import { growths } from '../data/growths';
import { routes } from '../data/routes';
import { characterById, characterName } from './catalog';
import { calculateAverageGrowth, calculateBestOffGrowth, calculateTotalGrowth, growthKeys } from './growth';
import { getRouteRecommendation, statusLabels } from './recruitment';
import type { Character, GrowthRates, SpoilerData } from '../domain/models';
export interface GrowthRow { rank: number; character?: Character; growth?: GrowthRates }
export function getGrowthRows(spoilers: SpoilerData | null): GrowthRow[] {
  return growthSlots.map(slot => {
    const character = slot.characterId ? characterById[slot.characterId] : spoilers?.characters.find(c => c.rank === slot.rank);
    return { rank: slot.rank, character, growth: character ? growths[character.id] ?? spoilers?.growths[character.id] : undefined };
  });
}
export const growthHeaders = ['#', '角色', 'UNIT', ...growthKeys.map(k => k.toUpperCase()), 'TOTAL', 'AVG', 'TOTAL (BEST OFF.)', ...routes.map(r => characterName(r.characterId))];
export function growthExportRows(spoilers: SpoilerData | null): (string | number)[][] {
  return [growthHeaders, ...getGrowthRows(spoilers).map(({ rank, character: c, growth: g }) => c && g ?
    [rank, c.nameZh ?? c.nameEn, c.nameEn, ...growthKeys.map(k => g[k]), calculateTotalGrowth(g), calculateAverageGrowth(g), calculateBestOffGrowth(g), ...routes.map(r => statusLabels[getRouteRecommendation(c.id, r.id)])] :
    [rank, '🔒 后期角色', '', ...Array<string>(16).fill('🔒')])];
}
