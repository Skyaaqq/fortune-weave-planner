import { useState } from 'react';
import type { SpoilerData } from '../domain/models';
import { routes } from '../data/routes';
import { getGrowthRows, growthExportRows, growthHeaders } from '../utils/growth-table';
import { calculateTotalGrowth, calculateAverageGrowth, calculateBestOffGrowth, growthColor, growthKeys } from '../utils/growth';
import { statusLabels } from '../utils/recruitment';
import { delimited } from '../utils/export';
import { Portrait } from './Portrait';
import { RecruitmentBadge } from './RecruitmentBadge';
export function GrowthTable({ spoilers }: { spoilers: SpoilerData | null }) {
  const [message, setMessage] = useState('');
  async function copy(separator: ',' | '\t') {
    try { await navigator.clipboard.writeText(delimited(growthExportRows(spoilers), separator)); setMessage(`已复制 ${separator === ',' ? 'CSV' : 'TSV'}`); }
    catch { setMessage('复制失败：浏览器未允许访问剪贴板，请检查权限后重试。'); }
  }
  return <section id="growth"><div className="section-title"><div><div className="eyebrow">GROWTH REFERENCE</div><h2>角色基础成长率 · 可复制表格</h2></div><p>玩家热力图转录数据，四路线列同时展示可招募性与当前方案推荐。后期角色在主动确认前隐藏，复制表格也遵守相同规则。</p></div>
    <div className="growth-tools"><button type="button" onClick={() => void copy('\t')}>复制整表（TSV）</button><button type="button" onClick={() => void copy(',')}>复制整表（CSV）</button><span role="status">{message}</span></div>
    <div className="growth-route-legend">{Object.entries(statusLabels).map(([key, label]) => <span key={key} className={`grs ${key}`}>{label}</span>)}</div>
    <div className="growth-table-wrap" tabIndex={0} role="region" aria-label="成长率表格，可横向滚动"><table className="growth-table" id="growthTable"><thead><tr>{[growthHeaders[0], '头像', ...growthHeaders.slice(1)].map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>
      {getGrowthRows(spoilers).map(({ rank, character: c, growth: g }) => <tr key={rank} data-character={c?.id ?? 'locked'}>
        <td>{rank}</td>{c && g ? <><td className="growth-avatar-cell"><Portrait character={c} className="growth-avatar" /></td><th scope="row">{c.nameZh ?? c.nameEn}</th><td>{c.nameEn}</td>{growthKeys.map(k => <td key={k} style={{ background: growthColor(g[k]), color: '#272522' }}>{g[k]}%</td>)}<td>{calculateTotalGrowth(g)}</td><td>{calculateAverageGrowth(g).toFixed(1)}%</td><td>{calculateBestOffGrowth(g)}</td>{routes.map(r => <td key={r.id} className="growth-route-cell" data-route={r.id}><RecruitmentBadge id={c.id} route={r.id} /></td>)}</> : <><td>🔒</td><th scope="row">后期角色（已隐藏）</th><td colSpan={17}>查看后期信息并确认后显示</td></>}
      </tr>)}
    </tbody></table></div>
    <div className="growth-source-note">数据源：玩家制作的Reddit成长率热力图，不视作官方数据。</div>
    <details><summary>如何正确阅读这张表</summary><div className="inside"><ul><li>高总成长≠自动最强：追击阈值、命中、Personal Skill、职业成长和战技往往更重要。</li><li>极端专精不可低估：哥莱亚斯的HP/STR/DEF比平均总成长更有实战意义。</li><li>职业会改变结果：用职业成长修补短板，而不是只看裸成长率。</li><li>合流角色应刻意走不同职业，让属性与技能互补。</li></ul></div></details>
  </section>;
}
