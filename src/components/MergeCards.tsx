import { merges } from '../data/merges';
import { characterById, characterName } from '../utils/catalog';
import { mergeVersion } from '../utils/strategy';
import { formatBuild } from '../utils/build';
import { Portrait } from './Portrait';
import type { MergePlan, SpoilerData } from '../domain/models';
function MergeCard({ plan, spoilers }: { plan: MergePlan; spoilers?: SpoilerData | null }) {
  const character = characterById[plan.characterId];
  return <article className="merge-card" data-character={plan.characterId}><div className="merge-top"><Portrait character={character} className="avatar-sm" /><div><div className="unit-name">{characterName(plan.characterId)} <span className="unit-en">({character.nameEn})</span></div><div className="tier">优先级 {plan.tier}</div></div></div>
    <div className="merge-routes">{plan.versions.map((version, index) => { const resolved = mergeVersion(plan, version); return <div key={version.routeId} data-route={version.routeId} className={`build build-${index}`}><b>{characterName(version.routeId)}</b><br />{resolved.goal}<br /><span className="small">职业：{formatBuild(resolved.paths, spoilers?.classes)}</span></div>; })}<div className="arrow">＋</div></div>
    <div className="details">{plan.reason}</div>{plan.historicalWarning && <p className="small">{plan.historicalWarning}</p>}
  </article>;
}
export function MergeCards({ spoilers }: { spoilers?: SpoilerData | null }) {
  return <section id="merge"><div className="section-title"><div><div className="eyebrow">MERGE CAUSALITY</div><h2>核心 8 人：两条时间线要故意练成“不一样”</h2></div><p>属性逐项取高值。不同 Build 才能产生互补；以下是玩家培养建议，跨树成本过高时优先保证实战可用。</p></div>
    <div className="merge-grid">{merges.filter(m => !m.optional).map(plan => <MergeCard key={plan.characterId} plan={plan} spoilers={spoilers} />)}</div>
    <details><summary>发烧友追加 3 人</summary><div className="inside merge-grid">{merges.filter(m => m.optional).map(plan => <MergeCard key={plan.characterId} plan={plan} spoilers={spoilers} />)}</div></details>
  </section>;
}
