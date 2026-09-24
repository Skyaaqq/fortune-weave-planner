import { describe, expect, it } from 'vitest';
import { classes } from '../../src/data/classes';
import { spoilerClasses } from '../../src/data/spoilers/classes';
import { classUnlockDetails } from '../../src/data/spoilers/class-unlocks';
import { formatBuild } from '../../src/utils/build';

describe('class reference evidence and spoiler boundary', () => {
  const byId = Object.fromEntries(classes.map(item => [item.id, item]));

  it('keeps zero, negative and unresolved modifiers distinct', () => {
    expect(byId['wing-soldier'].growthModifiers?.spd).toBe(0);
    expect(byId.diviner.growthModifiers?.str).toBe(-5);
    expect(byId.guardian.growthModifiers?.lck).toBeUndefined();
    expect(byId.caladrius.growthModifiers).toBeNull();
    expect(byId.caladrius.nameZh).toBeUndefined();
  });

  it('keeps late names and chapter details in the gated module', () => {
    const lateIds = classes.filter(item => item.spoiler).map(item => item.id);
    expect(lateIds).toEqual(spoilerClasses.map(item => item.id));
    for (const id of lateIds) {
      expect(byId[id].nameZh).toBeUndefined();
      expect(byId[id].examAndUnlock).toBeUndefined();
      expect(spoilerClasses.find(item => item.id === id)?.nameZh).toBeTruthy();
    }
    const path = [{ purpose: 'default' as const, stages: [{ classes: ['druid'], parts: [{ classId: 'druid' }] }] }];
    expect(formatBuild(path)).toBe('后期职业（已隐藏）');
    expect(formatBuild(path, spoilerClasses)).toBe('德鲁伊');
  });

  it('preserves class restrictions and extra unlocks', () => {
    expect(byId['wing-soldier'].restriction).toBe('女性专用');
    expect(byId.dancer.restriction).toBe('蕾达限定');
    expect(byId.dragoon.requiresUnlock).toBe(true);
    expect(byId.dragoon.unlock).toBeUndefined();
    expect(byId.guardian.unlock).toBeUndefined();
    expect(classUnlockDetails.dragoon).toContain('欧若拉');
    expect(classUnlockDetails.guardian).toContain('第9章');
  });
});
