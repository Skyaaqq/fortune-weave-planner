import type { BuildGuide, MergePlan } from '../domain/models';
import { guideFor } from './catalog';

export function splitBuildPaths(guide: BuildGuide) {
  // The first path is the guide's chosen route, even when the entire build is experimental.
  return { recommended: guide.paths.slice(0, 1), alternatives: guide.paths.slice(1) };
}

export function mergeVersion(plan: MergePlan, version: MergePlan['versions'][number]) {
  const guide = guideFor(plan.characterId, version.routeId);
  return { goal: guide.goal ?? version.goal ?? guide.tag, paths: version.alternatePaths ?? guide.paths };
}
