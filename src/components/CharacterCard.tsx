import type { Category, RouteId, RosterNote } from '../domain/models';
import { characterById, guideFor } from '../utils/catalog';
import { growths } from '../data/growths';
import { recruitment } from '../data/recruitment';
import { calculateBestOffGrowth } from '../utils/growth';
import { formatRequirement } from '../utils/recruitment';
import { formatBuild } from '../utils/build';
import { Portrait } from './Portrait';
import { BuildPath } from './BuildPath';
export const categoryLabels: Record<Category, string> = { fixed: '核心固定', primary: '建议主要招募', merge: '第二版本 / 合流培养' };
export function cardMatches(id: string, route: RouteId, note: RosterNote, kind: Category, query: string, mergeOnly: boolean) {
  const c = characterById[id], guide = guideFor(id, route);
  const text = [c.nameZh, c.nameEn, formatRequirement(recruitment[id]?.[route]), note.role, note.reason, note.goal, ...note.tags, formatBuild(guide.paths), guide.reason, categoryLabels[kind]].join(' ').toLowerCase();
  return text.includes(query.trim().toLowerCase()) && (!mergeOnly || kind === 'merge' || note.tags.some(t => t.includes('合流')) || guide.tag.includes('合流'));
}
export function CharacterCard({ id, route, kind, note, checked, onCheck }: { id: string; route: RouteId; kind: Category | 'replacement'; note: RosterNote; checked?: boolean; onCheck?: (checked: boolean) => void }) {
  const character = characterById[id];
  return <article className={`unit roster-item kind-${kind === 'replacement' ? 'primary' : kind}`} data-character={id}>
    {onCheck && <label className="check"><input type="checkbox" checked={checked} onChange={e => onCheck(e.target.checked)} aria-label={`${character.nameZh ?? character.nameEn}已招募`} /> 已招</label>}
    <Portrait character={character} />
    <div className="unit-body">
      <span className="card-kind">{kind === 'replacement' ? '弓位替补' : categoryLabels[kind]}</span>
      <div className="unit-name">{character.nameZh ?? character.nameEn}<span className="unit-en">{character.nameZh ? `(${character.nameEn})` : ''}</span></div>
      <div className="meta condition"><b>{kind === 'fixed' ? '固定核心' : formatRequirement(recruitment[id]?.[route])}</b> · <span className="growth">有效成长 {calculateBestOffGrowth(growths[id])}</span></div>
      <div className="meta">{note.role}</div><div className="reason">{note.goal && `培养目标：${note.goal}。`}{note.reason}</div>
      <div>{note.tags.map(tag => <span key={tag} className={`tag ${tag.includes('合流') ? 'merge' : ''} ${tag.includes('独占') ? 'exclusive' : ''}`}>{tag}</span>)}</div>
    </div><BuildPath guide={guideFor(id, route)} />
  </article>;
}
