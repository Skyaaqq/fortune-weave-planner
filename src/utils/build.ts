import { classes } from '../data/classes';
import type { BuildPath, GameClass } from '../domain/models';
const classIndex = Object.fromEntries(classes.map(c => [c.id, c]));
export function visibleClassName(id: string, unlockedClasses: GameClass[] = []): string {
  const unlocked = unlockedClasses.find(item => item.id === id);
  if (unlocked) return unlocked.nameZh ?? unlocked.nameEn ?? '待核实职业';
  const item = classIndex[id];
  return item?.spoiler ? '后期职业（已隐藏）' : item?.nameZh ?? item?.nameEn ?? '待核实职业';
}
export function formatBuild(paths: BuildPath[], unlockedClasses: GameClass[] = []): string {
  return paths.map(path => (path.condition ? `${path.condition}：` : '') + path.stages.map(stage =>
    stage.parts.map(part => 'text' in part ? part.text : visibleClassName(part.classId, unlockedClasses)).join(''),
  ).join(' → ')).join('；');
}
