import { recruitment } from '../data/recruitment';
import { routes } from '../data/routes';
import { replacements } from '../data/replacements';
import type { RecruitmentRequirement, RouteId, RouteRecommendationStatus } from '../domain/models';
export const statusLabels: Record<RouteRecommendationStatus, string> = {
  fixed: '固定', primary: '主招', merge: '合流', replacement: '弓替补', easy: '顺手', available: '可', unavailable: '不可', spoiler: '🔒',
};
export function getRouteRecommendation(characterId: string, routeId: RouteId): RouteRecommendationStatus {
  const requirement = recruitment[characterId]?.[routeId];
  if (!requirement) return 'spoiler';
  if (!requirement.available) return 'unavailable';
  const route = routes.find(r => r.id === routeId)!;
  if (route.fixed.includes(characterId)) return 'fixed';
  if (route.primary.includes(characterId)) return 'primary';
  if (route.merge.includes(characterId)) return 'merge';
  if (replacements[routeId]?.includes(characterId)) return 'replacement';
  return requirement.support === 1 ? 'easy' : 'available';
}
export function formatRequirement(requirement?: RecruitmentRequirement): string {
  if (!requirement) return '后期相关信息已锁定';
  if (!requirement.available) return '该路线不可招募';
  const parts = [requirement.automatic ? '固定 / 自动加入' : requirement.support !== undefined ? `S${requirement.support} / R${requirement.renown}` : '可招募'];
  if (requirement.money !== undefined) parts.push(`${requirement.money} gold`);
  parts.push(...(requirement.items ?? []));
  if (requirement.quest) parts.push(requirement.quest);
  if (requirement.notes) parts.push(requirement.notes);
  return parts.join(' · ');
}
