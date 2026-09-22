import { recruitment } from '../data/recruitment';
import type { RouteId } from '../domain/models';
import { formatRequirement, getRouteRecommendation, statusLabels } from '../utils/recruitment';
export function RecruitmentBadge({ id, route }: { id: string; route: RouteId }) {
  const status = getRouteRecommendation(id, route);
  return <span className={`grs ${status}`} title={formatRequirement(recruitment[id]?.[route])}>{statusLabels[status]}</span>;
}
