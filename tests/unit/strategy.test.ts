import { describe, expect, it } from 'vitest';
import { builds } from '../../src/data/builds';
import { merges } from '../../src/data/merges';
import { rosterNotes } from '../../src/data/roster-notes';
import { guideFor } from '../../src/utils/catalog';
import { mergeVersion, splitBuildPaths } from '../../src/utils/strategy';
import { cardMatches } from '../../src/components/CharacterCard';

describe('sourced Ultand correction (2026-09-23)', () => {
  it('uses lance / white magic on Cai and by default, with flight as an experimental second build', () => {
    for (const route of ['cai', 'default'] as const) {
      const guide = builds.ultand[route]!;
      expect(guide.paths[0].stages.flatMap(stage => stage.classes)).toEqual(['diviner', 'priest', 'guardian']);
      expect(guide.goal).toBe('枪术 / 白魔 / RES · 主版本');
      expect(guide.confidence).toBe('medium');
    }
    const flight = guideFor('ultand', 'dietrich');
    expect(flight.paths[0].stages.flatMap(stage => stage.classes)).toEqual(['ornius-rider', 'wing-soldier', 'dragoon']);
    expect(flight.goal).toBe('物理 / 飞行机动 · 第二版本实验');
    expect(flight.confidence).toBe('experimental');
    for (const guide of Object.values(builds.ultand)) {
      expect(guide.date).toBe('2026-09-23');
      expect(guide.sources).toContain('https://gamewith.jp/fefw/577319');
      expect(guide.sources).toContain('https://www.reddit.com/r/FE_Fortunes_Weave/comments/1wmx3c1/how_are_you_guys_using_ultand/');
    }
  });
  it('shares goals across roster, merge plans and search, without stale reversed goals', () => {
    const plan = merges.find(plan => plan.characterId === 'ultand')!;
    expect(plan.historicalWarning).toBeUndefined();
    expect(plan.confidence).toBe('experimental');
    for (const version of plan.versions) {
      const guide = guideFor('ultand', version.routeId);
      expect(version.goal).toBeUndefined();
      expect(mergeVersion(plan, version)).toEqual({ goal: guide.goal, paths: guide.paths });
      const note = rosterNotes[version.routeId]['merge:ultand'];
      expect(note.goal).toBeUndefined();
      expect(cardMatches('ultand', version.routeId, note, 'merge', guide.goal!, false)).toBe(true);
      expect(cardMatches('ultand', version.routeId, note, 'merge', 'MAG / RES / 魔法技能', false)).toBe(false);
    }
    expect(rosterNotes.cai['fixed:ultand'].goal).toBeUndefined();
  });
});

describe('progressive build details', () => {
  it('preserves every conditional path while keeping the first choice distinct', () => {
    const guide = guideFor('cai', 'cai');
    const result = splitBuildPaths(guide);
    expect(result.recommended[0].purpose).toBe('default');
    expect(result.alternatives[0]).toMatchObject({ condition: '若MAG成长优秀', purpose: 'rng-fix' });
    expect([...result.recommended, ...result.alternatives]).toEqual(guide.paths);
    const experiment = guideFor('ultand', 'dietrich');
    expect(splitBuildPaths(experiment).recommended).toEqual(experiment.paths);
    expect(experiment.confidence).toBe('experimental');
  });
  it('retains legacy merge overrides and unresolved warning records', () => {
    const plan = merges.find(plan => plan.characterId === 'ninae')!;
    const alternate = plan.versions.find(version => version.alternatePaths)!;
    expect(mergeVersion(plan, alternate)).toEqual({ goal: alternate.goal, paths: alternate.alternatePaths });
    expect(plan.historicalWarning).toBeTruthy();
  });
});
