import { characters } from '../data/characters';
import { builds } from '../data/builds';
import type { BuildGuide, RouteId } from '../domain/models';
export const characterById = Object.fromEntries(characters.map(c => [c.id, c]));
export const characterName = (id: string) => characterById[id]?.nameZh ?? characterById[id]?.nameEn ?? id;
export function guideFor(id: string, route: RouteId): BuildGuide {
  return builds[id]?.[route] ?? builds[id]?.default ?? {
    paths: [{ stages: [{ classes: [], parts: [{ text: '沿当前主武器自然转职' }] }], purpose: 'default' }],
    reason: '当前资料不足以给出可靠的跨树最优解，优先保持武器熟练与实际战斗手感。', tag: '保守建议',
  };
}
