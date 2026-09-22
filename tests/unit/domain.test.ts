import { describe, expect, it } from 'vitest';
import { growths } from '../../src/data/growths';
import { characters } from '../../src/data/characters';
import { recruitment } from '../../src/data/recruitment';
import { routes } from '../../src/data/routes';
import { builds } from '../../src/data/builds';
import { classes } from '../../src/data/classes';
import { spoilerData } from '../../src/data/spoilers';
import { calculateTotalGrowth, calculateAverageGrowth, calculateBestOffGrowth } from '../../src/utils/growth';
import { formatRequirement, getRouteRecommendation } from '../../src/utils/recruitment';
import { growthExportRows, getGrowthRows } from '../../src/utils/growth-table';
import { delimited } from '../../src/utils/export';
describe('growth calculations', () => {
  it('calculates total, rounded average and best offense without double counting STR/MAG', () => {
    expect(calculateTotalGrowth(growths.nuzzuo)).toBe(310);
    expect(calculateAverageGrowth(growths.nuzzuo)).toBe(34.4);
    expect(calculateBestOffGrowth(growths.nuzzuo)).toBe(295);
    expect(calculateBestOffGrowth(growths.tialla)).toBe(305);
    expect(calculateBestOffGrowth(growths.ultand)).toBe(345);
  });
});
describe('canonical recruitment', () => {
  it('preserves Nuzzuo / Theodora support, renown and items', () => {
    expect(recruitment.nuzzuo.theodora).toMatchObject({ available: true, support: 1, renown: 6, items: ['3x Iron Bows'] });
    expect(formatRequirement(recruitment.nuzzuo.theodora)).toBe('S1 / R6 · 3x Iron Bows');
  });
  it('models Seteth / Dietrich as unavailable', () => {
    expect(recruitment.seteth.dietrich).toEqual({ available: false });
  });
  it.each([
    ['theodora', 'theodora', 'fixed'], ['noctula', 'theodora', 'primary'],
    ['sirocco', 'theodora', 'merge'], ['nuzzuo', 'theodora', 'replacement'],
    ['nuzzuo', 'dietrich', 'easy'], ['nuzzuo', 'leda', 'available'],
    ['seteth', 'dietrich', 'unavailable'], ['troy', 'cai', 'spoiler'],
  ] as const)('%s on %s derives %s', (id, route, status) => expect(getRouteRecommendation(id, route)).toBe(status));
});
describe('data integrity and spoiler boundaries', () => {
  it('keeps 32 unique primary assignments and the original route counts', () => {
    expect(new Set(routes.flatMap(r => r.primary)).size).toBe(32);
    expect(routes.map(r => r.fixed.length)).toEqual([4, 4, 5, 5]);
    expect(routes.map(r => r.merge.length)).toEqual([4, 5, 5, 7]);
    expect(routes.every(r => r.primary.length === 8)).toBe(true);
    const ids = new Set(characters.map(c => c.id));
    for (const route of routes) for (const id of [...route.fixed, ...route.primary, ...route.merge]) expect(ids.has(id)).toBe(true);
  });
  it('every structured class reference resolves', () => {
    const ids = new Set(classes.map(c => c.id));
    for (const entries of Object.values(builds)) for (const guide of Object.values(entries))
      for (const path of guide.paths) for (const stage of path.stages) for (const id of stage.classes) expect(ids.has(id), id).toBe(true);
  });
  it('retains 53 rows but hides all late identities and growths until confirmed', () => {
    expect(getGrowthRows(null)).toHaveLength(53);
    expect(getGrowthRows(null).filter(r => !r.character)).toHaveLength(3);
    expect(getGrowthRows(spoilerData).every(r => r.character && r.growth)).toBe(true);
    expect(characters.every(c => !c.spoiler)).toBe(true);
    const locked = delimited(growthExportRows(null), ',');
    for (const c of spoilerData.characters) expect(locked).not.toContain(c.nameEn);
    expect(delimited(growthExportRows(spoilerData), ',')).toContain('Eshmel');
  });
});
describe('CSV and TSV', () => {
  it('quotes delimiters, quotes and line breaks correctly', () => {
    expect(delimited([['a,b', 'say "hi"', 'line\nbreak']], ',')).toBe('"a,b","say ""hi""","line\nbreak"');
    expect(delimited([['a\tb', 'c'], [1, 2]], '\t')).toBe('"a\tb"\tc\r\n1\t2');
  });
  it('keeps locked and unlocked exports rectangular', () => {
    for (const data of [null, spoilerData]) {
      const rows = growthExportRows(data);
      expect(rows).toHaveLength(54);
      expect(rows.every(row => row.length === 19)).toBe(true);
    }
  });
});
