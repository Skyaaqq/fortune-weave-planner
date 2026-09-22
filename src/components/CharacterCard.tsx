import type { Category, RouteId, RosterNote } from '../domain/models';
import { characterById, guideFor } from '../utils/catalog';
import { growths } from '../data/growths';
import { recruitment } from '../data/recruitment';
import { calculateBestOffGrowth } from '../utils/growth';
import { formatRequirement } from '../utils/recruitment';
import { formatBuild } from '../utils/build';
import { Portrait } from './Portrait';
import { BuildPath } from './BuildPath';
import { splitBuildPaths } from '../utils/strategy';
export const categoryLabels: Record<Category, string> = { fixed: '核心固定', primary: '建议主要招募', merge: '第二版本 / 合流培养' };
export function cardMatches(id: string, route: RouteId, note: RosterNote, kind: Category, query: string, mergeOnly: boolean) {
  const c = characterById[id], guide = guideFor(id, route);
  const text = [c.nameZh, c.nameEn, formatRequirement(recruitment[id]?.[route]), note.role, note.reason, guide.goal ?? note.goal, ...note.tags, formatBuild(guide.paths), guide.reason, categoryLabels[kind]].join(' ').toLowerCase();
  return text.includes(query.trim().toLowerCase()) && (!mergeOnly || kind === 'merge' || note.tags.some(t => t.includes('合流')) || guide.tag.includes('合流'));
}
export function CharacterCard({ id, route, kind, note, checked, onCheck }: { id: string; route: RouteId; kind: Category | 'replacement'; note: RosterNote; checked?: boolean; onCheck?: (checked: boolean) => void }) {
  const character = characterById[id];
  const guide = guideFor(id, route);
  const { alternatives } = splitBuildPaths(guide);
  return <article className={`unit roster-item kind-${kind === 'replacement' ? 'primary' : kind}`} data-character={id}>
    <Portrait character={character} />
    <div className="unit-body">
      <span className="card-kind">{kind === 'replacement' ? '弓位替补' : categoryLabels[kind]}</span>
      <h4 className="unit-name">{character.nameZh ?? character.nameEn}<span className="unit-en">{character.nameZh ? `(${character.nameEn})` : ''}</span></h4>
      <div className="meta unit-role">{note.role}</div>
    </div>
    <div className="recruitment-summary"><div><span className="field-label">{kind === 'fixed' ? '加入方式' : '招募条件'}</span><div className="condition">{kind === 'fixed' ? '固定核心 · 本路线加入' : formatRequirement(recruitment[id]?.[route])}</div></div>
      {onCheck && <label className="check"><input type="checkbox" checked={checked} onChange={e => onCheck(e.target.checked)} aria-label={`${character.nameZh ?? character.nameEn}已招募`} /> 已招募</label>}
    </div>
    <BuildPath guide={guide} />
    <details className="card-details"><summary>培养理由{alternatives.length > 0 ? '与备选方案' : '与成长详情'}</summary><div className="inside">
      <p className="growth">有效成长 {calculateBestOffGrowth(growths[id])}</p>
      {!guide.goal && note.goal && <p>培养目标：{note.goal}</p>}
      <p className="reason">{note.reason}</p><p className="class-why">{guide.reason}</p>
      {alternatives.map((path, index) => <div className="alternative-build" key={index}><b>{path.purpose === 'rng-fix' ? 'RNG 救火 · 按条件使用' : path.purpose === 'experimental' ? '实验方案' : '条件 / 备选方案'}</b><p>{formatBuild([path])}</p></div>)}
      <div>{note.tags.map(tag => <span key={tag} className={`tag ${tag.includes('合流') ? 'merge' : ''} ${tag.includes('独占') ? 'exclusive' : ''}`}>{tag}</span>)}</div>
      <p className="strategy-date">建议更新于 {guide.date}{guide.confidence === 'experimental' ? ' · 实验方案，按实际成长取舍' : ' · 玩家培养建议'}</p>
      {guide.sources?.length ? <div className="strategy-sources">核对资料：{guide.sources.map((url, index) => <a href={url} key={url} target="_blank" rel="noreferrer">来源 {index + 1}</a>)}</div> : null}
    </div></details>
  </article>;
}
