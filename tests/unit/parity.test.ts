import { describe, expect, it } from 'vitest';
import baseline from '../fixtures/prototype.json';
import { characters } from '../../src/data/characters';
import { spoilerData } from '../../src/data/spoilers';
import { growths } from '../../src/data/growths';
import { recruitment } from '../../src/data/recruitment';
import { routes } from '../../src/data/routes';
import { builds } from '../../src/data/builds';
import { growthKeys, calculateTotalGrowth, calculateAverageGrowth, calculateBestOffGrowth } from '../../src/utils/growth';
import { getRouteRecommendation } from '../../src/utils/recruitment';
import { formatBuild } from '../../src/utils/build';
import type { RouteId, RouteRecommendationStatus } from '../../src/domain/models';
const allCharacters = [...characters, ...spoilerData.characters];
const allGrowths = { ...growths, ...spoilerData.growths };
describe('parity against immutable prototype 1e8425c', () => {
  it('retains all 53 identities, nine stats, order and derived growth values', () => {
    for (const row of baseline.growthRows) {
      const c = allCharacters.find(c => c.nameEn === row[2])!;
      expect(c, String(row[2])).toBeDefined(); expect(c.nameZh).toBe(row[1]); expect(c.rank).toBe(row[0]);
      const g = allGrowths[c.id];
      expect(growthKeys.map(k => g[k])).toEqual(row.slice(3, 12));
      expect([calculateTotalGrowth(g), calculateAverageGrowth(g), calculateBestOffGrowth(g)]).toEqual(row.slice(12));
    }
  });
  it('derives all 212 route statuses without maintaining a second matrix', () => {
    const codes: Record<string, RouteRecommendationStatus> = { fixed: 'fixed', primary: 'primary', merge: 'merge', replacement: 'replacement', easy: 'easy', can: 'available', no: 'unavailable', late: 'spoiler' };
    for (const [en, matrix] of Object.entries(baseline.recruitMatrix)) {
      const c = allCharacters.find(c => c.nameEn === en)!;
      for (const route of routes) {
        expect(getRouteRecommendation(c.id, route.id), `${en}/${route.id}`).toBe(codes[matrix[route.id].code]);
        const sr = matrix[route.id].detail.match(/S(\d+)\/R(\d+)/);
        if (sr) expect(recruitment[c.id][route.id]).toMatchObject({ support: Number(sr[1]), renown: Number(sr[2]) });
      }
    }
  });
  it('retains original guides except the sourced Ultand correction covered by strategy tests', () => {
    const normalize = (value: string) => value.replace(/\s/g, '');
    for (const [zh, entries] of Object.entries(baseline.classGuides)) {
      const c = characters.find(c => c.nameZh === zh)!;
      if (c.id === 'ultand') continue; // Explicit correction: docs/research/ultand-2026-09-23.md.
      for (const [key, original] of Object.entries(entries)) {
        const guide = builds[c.id][key as RouteId | 'default']!;
        expect(normalize(formatBuild(guide.paths)), `${zh}/${key}`).toBe(normalize(original.path));
        expect(guide.reason).toBe(original.why); expect(guide.tag).toBe(original.tag);
      }
    }
  });
});
