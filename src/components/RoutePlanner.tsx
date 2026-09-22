import { useState } from 'react';
import { routes } from '../data/routes';
import { rosterNotes } from '../data/roster-notes';
import { metaNotes } from '../data/meta';
import { replacements } from '../data/replacements';
import { characterById, characterName } from '../utils/catalog';
import { useRecruitmentProgress, progressKey } from '../hooks/useRecruitmentProgress';
import { Tabs, accentStyle } from './Tabs';
import { CharacterCard, cardMatches, categoryLabels } from './CharacterCard';
import type { Category, RouteId, RosterNote } from '../domain/models';
const categories: Category[] = ['fixed', 'primary', 'merge'];
export function RoutePlanner() {
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
  const visible = categories.map(kind => ({ kind, ids: route[kind].filter(id => cardMatches(id, routeId, rosterNotes[routeId][`${kind}:${id}`], kind, query, mergeOnly)) })).filter(group => filtered || group.kind === category);
  const replacementIds = (replacements[routeId] ?? []).filter(id => !filtered || cardMatches(id, routeId, replacementNote(id), 'primary', query, mergeOnly));
  return <section id="routes">
    <div className="section-title"><div><div className="eyebrow">ROSTER BUILDER</div><h2>四条线最终阵容</h2></div><p>勾选角色后会在浏览器本地保存进度。可搜索角色，也可以只看某条路线。</p></div>
    <div className="notice"><b>9月21日实战Meta刷新：</b>先用职业成长修补短板，再回最终定位：速度慢的角色可短暂骑乘/飞行，力量不足的远程可借战车兵修正，天然够硬的前排则优先补速度与移动。</div>
    <div className="notice"><b>9月22日兵种数据校正：</b>自然主线 / RNG救火 / 第二版本合流分别展示。皮特鲁默认狙击手，只有STR长歪时才转战车兵；米迦艾拉默认勇士，只有SPD落后时才短转飞鸵兵。</div>
    <div className="toolbar"><input id="search" className="search" aria-label="搜索角色" placeholder="搜索中文名 / 英文名 / 职业 / 条件…" value={query} onChange={e => setQuery(e.target.value)} /><button type="button" className={`filter-btn ${!mergeOnly ? 'active' : ''}`} aria-pressed={!mergeOnly} onClick={() => setMergeOnly(false)}>当前分类</button><button type="button" className={`filter-btn ${mergeOnly ? 'active' : ''}`} aria-pressed={mergeOnly} onClick={() => setMergeOnly(true)}>只看合流对象</button></div>
    {progress.error && <p role="alert">{progress.error}</p>}
    <Tabs label="路线选择" className="route" selected={routeId} onSelect={setRoute} panelId="route-panel" items={routes.map(r => ({ id: r.id, label: `${characterName(r.characterId)}（${characterById[r.characterId].nameEn}）`, detail: r.theme, color: r.color }))} />
    <div className="route-panel active" id="route-panel" role="tabpanel" aria-labelledby={`route-panel-tab-${routeId}`} style={accentStyle(route.color)}>
      <div className="route-head"><div className="swatch" /><div><h3>{characterName(route.characterId)}（{characterById[route.characterId].nameEn}）</h3><p>{route.theme}</p>
        <div className="route-summary-row">{categories.map(kind => <span key={kind} className="route-summary-chip">{categoryLabels[kind]} {route[kind].length}</span>)}<span className="route-summary-chip">主归属门槛 {route.maxR}</span></div>
        <div className="progress" role="progressbar" aria-label="招募进度" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}><i style={{ width: `${done / total * 100}%` }} /></div>
        <div className="category-note">{metaNotes.find(n => n.routeId === routeId)?.summary}</div>
      </div></div>
      <Tabs label="阵容类别" className="category" panelId="category-panel" selected={category} onSelect={kind => setCategories(prev => ({ ...prev, [routeId]: kind }))} items={categories.map(kind => ({ id: kind, label: `${categoryLabels[kind]} ${route[kind].length}` }))} />
      <div id="category-panel" role="tabpanel" aria-labelledby={`category-panel-tab-${category}`}>
        {visible.map(({ kind, ids }) => ids.length > 0 && <div key={kind} className="roster-category active"><h4>{categoryLabels[kind]}</h4><div className="roster">{ids.map(id => <CharacterCard key={`${kind}:${id}`} id={id} route={routeId} kind={kind} note={rosterNotes[routeId][`${kind}:${id}`]} checked={progress.values[progressKey(routeId, kind, id)] ?? false} onCheck={kind === 'fixed' ? undefined : checked => progress.setChecked(progressKey(routeId, kind, id), checked)} />)}</div></div>)}
        {!visible.some(group => group.ids.length) && !replacementIds.length && <p role="status">没有匹配的角色。</p>}
      </div>
      {replacementIds.length > 0 && <details open={filtered || undefined}><summary>弓位替补（不计入主要招募 8 人）</summary><div className="inside roster">{replacementIds.map(id => <CharacterCard key={id} id={id} route={routeId} kind="replacement" note={replacementNote(id)} />)}</div></details>}
    </div>
  </section>;
}
