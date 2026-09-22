import { classes } from '../data/classes';
import type { BuildPath } from '../domain/models';
const classIndex = Object.fromEntries(classes.map(c => [c.id, c]));
export function formatBuild(paths: BuildPath[]): string {
  return paths.map(path => (path.condition ? `${path.condition}：` : '') + path.stages.map(stage =>
    stage.parts.map(part => 'text' in part ? part.text : classIndex[part.classId]?.nameZh ?? classIndex[part.classId]?.nameEn ?? part.classId).join(''),
  ).join(' → ')).join('；');
}
