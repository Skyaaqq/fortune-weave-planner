import { useState } from 'react';
import { routes } from '../data/routes';
import { rosterNotes } from '../data/roster-notes';
import { metaNotes } from '../data/meta';
import { replacements } from '../data/replacements';
import { characterById, characterName } from '../utils/catalog';
import { useRecruitmentProgress, progressKey } from '../hooks/useRecruitmentProgress';
import { Tabs, accentStyle } from './Tabs';
import { CharacterCard, cardMatches, categoryLabels } from './CharacterCard';
import type { Category, RouteId, RosterNote, SpoilerData } from '../domain/models';
const categories: Category[] = ['fixed', 'primary', 'merge'];
export function RoutePlanner({ spoilers }: { spoilers?: SpoilerData | null }) {
  const [routeId, setRoute] = useState<RouteId>('cai');
  const [selectedCategories, setCategories] = useState<Partial<Record<RouteId, Category>>>({});
  const [query, setQuery] = useState(''); const [mergeOnly, setMergeOnly] = useState(false);
  const progress = useRecruitmentProgress();
  const route = routes.find(r => r.id === routeId)!;
  const category = selectedCategories[routeId] ?? 'fixed';
  const filtered = !!query.trim() || mergeOnly;
  const done = (['primary', 'merge'] as const).flatMap(kind => route[kind].map(id => progress.values[progressKey(routeId, kind, id)])).filter(Boolean).length;
  const total = route.primary.length + route.merge.length;
  const replacementNote = (id: string): RosterNote => ({ ...Object.values(rosterNotes).flatMap(Object.entries).find(([key]) => key === `primary:${id}`)![1], reason: '莉利安成长不理想时的实战替补，不改变主归属分配。', tags: ['弓位替补'] });
  const visible = categories.map(kind => ({ kind, ids: route[kind].filter(id => cardMatches(id, routeId, rosterNotes[routeId][`${kind}:${id}`], kind, query, mergeOnly, spoilers)) })).filter(group => filtered || group.kind === category);
  const replacementIds = (replacements[routeId] ?? []).filter(id => !filtered || cardMatches(id, routeId, replacementNote(id), 'primary', query, mergeOnly, spoilers));
  return <section id="routes">
    <div className="planner-heading"><h2>四线阵容</h2><span className="small">招募条件 · 推荐职业 · 本地进度</span></div>
    {progress.error && <p role="alert">{progress.error}</p>}
    <Tabs label="路线选择" className="route" selected={routeId} onSelect={setRoute} panelId="route-panel" items={routes.map(r => ({ id: r.id, label: `${characterName(r.characterId)}（${characterById[r.characterId].nameEn}）`, color: r.color }))} />
    <div className="route-panel active" id="route-panel" role="tabpanel" aria-labelledby={`route-panel-tab-${routeId}`} style={accentStyle(route.color)}>
      <div className="route-head"><div className="swatch" /><div><div className="route-heading-line"><h3>{characterName(route.characterId)} · {route.theme}</h3><span className="route-summary-chip">主招门槛 {route.maxR}</span></div>
        <div className="progress-label"><span>主招 / 合流勾选进度</span><b>{done} / {total}</b></div>
        <div className="progress" role="progressbar" aria-label="招募进度" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}><i style={{ width: `${done / total * 100}%` }} /></div>
      </div></div>
      <div className="toolbar"><input id="search" className="search" aria-label="搜索角色" placeholder="搜名字、职业、条件或培养理由…" value={query} onChange={e => setQuery(e.target.value)} /><button type="button" className={`filter-btn ${!mergeOnly ? 'active' : ''}`} aria-pressed={!mergeOnly} onClick={() => setMergeOnly(false)}>当前分类</button><button type="button" className={`filter-btn ${mergeOnly ? 'active' : ''}`} aria-pressed={mergeOnly} onClick={() => setMergeOnly(true)}>只看合流对象</button></div>
      <Tabs label="阵容类别" className="category" panelId="category-panel" selected={category} onSelect={kind => setCategories(prev => ({ ...prev, [routeId]: kind }))} items={categories.map(kind => ({ id: kind, label: `${categoryLabels[kind]} ${route[kind].length}` }))} />
      <div id="category-panel" role="tabpanel" aria-labelledby={`category-panel-tab-${category}`}>
        {visible.map(({ kind, ids }) => ids.length > 0 && <div key={kind} className="roster-category active">{filtered && <h4>{categoryLabels[kind]}</h4>}<div className="roster">{ids.map(id => <CharacterCard key={`${routeId}:${kind}:${id}`} id={id} route={routeId} kind={kind} note={rosterNotes[routeId][`${kind}:${id}`]} checked={progress.values[progressKey(routeId, kind, id)] ?? false} onCheck={kind === 'fixed' ? undefined : checked => progress.setChecked(progressKey(routeId, kind, id), checked)} spoilers={spoilers} />)}</div></div>)}
        {!visible.some(group => group.ids.length) && !replacementIds.length && <p role="status">没有匹配的角色。</p>}
      </div>
      {replacementIds.length > 0 && <details open={filtered || undefined}><summary>弓位替补（不计入主要招募 8 人）</summary><div className="inside roster">{replacementIds.map(id => <CharacterCard key={id} id={id} route={routeId} kind="replacement" note={replacementNote(id)} spoilers={spoilers} />)}</div></details>}
      <details className="route-notes" key={routeId}><summary>本路线培养说明</summary><div className="inside">{metaNotes.find(n => n.routeId === routeId)?.summary}</div></details>
    </div>
  </section>;
}
