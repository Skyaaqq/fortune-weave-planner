import { useEffect, useState } from 'react';
import { classes } from '../data/classes';
import type { GameClass, SpoilerData } from '../domain/models';
import { growthKeys } from '../utils/growth';

const statNames: Record<(typeof growthKeys)[number], string> = {
  hp: 'HP', str: '力量', mag: '魔力', spd: '速度', dex: '技巧', def: '防守', res: '魔防', lck: '幸运', cha: '魅力',
};
const tierNames: Record<GameClass['tier'], string> = {
  basic: '初级', intermediate: '中级', advanced: '上级', master: '最上级', unknown: '级别待核实',
};
const sourceUrl = 'https://docs.qq.com/sheet/DV0N0VUZLSXRmUWFq?tab=lnafol';

function ClassCard({ item, unlockDetails }: { item: GameClass; unlockDetails?: Record<string, string> }) {
  return <article className="class-card" id={`class-${item.id}`} data-class={item.id}>
    <div className="class-card-head"><div><span className="class-tier">{tierNames[item.tier]}{item.restriction ? ` · ${item.restriction}` : ''}</span><h3>{item.nameZh ?? item.nameEn ?? '职业待核实'}{item.nameZh && item.nameEn && <small> {item.nameEn}</small>}</h3></div><a href={`#/classes/${encodeURIComponent(item.id)}`} aria-label={`${item.nameZh ?? item.nameEn}的直达链接`}>链接</a></div>
    {item.evidenceNote && <p className="class-caution">{item.evidenceNote}</p>}
    <dl className="class-metadata"><div><dt>移动</dt><dd>{item.movement ?? '未知'}</dd></div><div><dt>特性</dt><dd>{item.traits ?? '未知'}</dd></div><div><dt>技能 EXP 加成</dt><dd>{item.skillExp ?? '未记载'}</dd></div></dl>
    <div className="class-growth"><h4>职业成长修正</h4><div className="class-growth-grid">{growthKeys.map(key => <div key={key}><span>{statNames[key]}</span><b>{item.growthModifiers?.[key] === undefined ? '未知' : `${item.growthModifiers[key]! > 0 ? '+' : ''}${item.growthModifiers[key]}%`}</b></div>)}</div></div>
    <dl className="class-details"><div><dt>考试参考</dt><dd>{item.examAndUnlock ?? '暂无核实资料'}</dd></div><div><dt>额外解锁</dt><dd>{item.unlock ?? unlockDetails?.[item.id] ?? (item.requiresUnlock ? '有额外剧情解锁条件，确认剧透后可查看' : '社区表未记载额外条件；仍请以游戏内为准')}</dd></div><div><dt>固有特技</dt><dd>{item.innateSkills?.length ? item.innateSkills.join('、') : '社区表未记载'}</dd></div><div><dt>精通</dt><dd>{item.masterySkill ? `${item.masterySkill}（精通 EXP ${item.masteryExp ?? '未知'}）` : '社区表未记载'}</dd></div></dl>
    <p className="class-provenance">{item.sourceRow ? <>资料：2026-09-24 社区整理表第 {item.sourceRow} 行 · <a href={sourceUrl} target="_blank" rel="noreferrer">查看原表</a>。推荐等级不是已证实的硬性门槛。</> : '职业对应或数值未核实，未知字段保持空缺。'}</p>
  </article>;
}

export function ClassGuide({ spoilers, selectedId }: { spoilers: SpoilerData | null; selectedId?: string }) {
  const [query, setQuery] = useState('');
  const visible = [...classes.filter(item => !item.spoiler), ...(spoilers?.classes ?? [])];
  const selected = selectedId ? visible.find(item => item.id === selectedId) : undefined;
  const locked = selectedId && classes.some(item => item.id === selectedId && item.spoiler) && !spoilers;
  const filtered = selected ? [selected] : selectedId ? [] : visible.filter(item => `${item.nameZh ?? ''} ${item.nameEn ?? ''} ${tierNames[item.tier]}`.toLowerCase().includes(query.trim().toLowerCase()));
  useEffect(() => { if (selected) requestAnimationFrame(() => document.getElementById(`class-${selected.id}`)?.scrollIntoView()); }, [selected]);
  return <section id="classes" tabIndex={-1} className="class-guide-page"><div className="section-title"><div><div className="eyebrow">CLASS REFERENCE</div><h2>兵种说明</h2></div><p>个人成长率与职业成长修正是不同口径；这里的百分数仅表示职业修正，不含兵种基础能力值。来源为玩家协作表，仍需游戏内核实。</p></div>
    <p><a href="#routes">← 返回阵容规划</a></p>
    {!selectedId && <label className="class-search-label">搜索兵种<input className="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="名称或级别" /></label>}
    {spoilers ? <p className="class-caution">后期职业已显示；刷新后会重新锁定。</p> : <p className="class-caution">后期职业信息已隐藏。<a href="#part3">通过剧透门查看</a></p>}
    {locked && <p className="class-locked" role="status">🔒 后期职业已隐藏。请先通过<a href="#part3">剧透门</a>确认。</p>}
    {selectedId && !selected && !locked && <p role="status">未找到此兵种资料。</p>}
    {!selectedId && !filtered.length && <p role="status">没有匹配的兵种。</p>}
    <div className="class-list">{filtered.map(item => <ClassCard key={item.id} item={item} unlockDetails={spoilers?.classUnlockDetails} />)}</div>
  </section>;
}
