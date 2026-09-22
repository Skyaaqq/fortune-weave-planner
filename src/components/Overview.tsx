import { routes } from '../data/routes';
import { classes } from '../data/classes';
import { characterName, characterById } from '../utils/catalog';
import { accentStyle } from './Tabs';
export function Overview() {
  return <section id="quick"><div className="section-title"><div><div className="eyebrow">QUICK PLAN</div><h2>先记住这三句话</h2></div><p>主归属负责全收集与路线性格；重叠培养只给少数高收益对象；合流阶段按实际成长决定是否花 Karma Shards。</p></div><div className="grid">{routes.map(r => <article key={r.id} className="card route-card" style={accentStyle(r.color)}><div className="card-pad"><div className="small">{characterById[r.characterId].nameEn} ROUTE</div><h3>{characterName(r.characterId)}</h3><div>{r.theme}</div><div className="route-stat"><span>主归属外援 <b>{r.primary.length}</b></span><span>完成门槛 <b>{r.maxR}</b></span></div></div></article>)}</div>
    <details open><summary>推荐执行原则</summary><div className="inside"><b>主归属 + 精选重叠 + 后期因果合流。</b> 同一角色的两份培养不要走相同职业：一份放大优势，一份修补短板或学习不同能力。先看实际收益，再决定是否支付约 300 Karma Shards。</div></details>
    <div className="class-legend"><b>简体中文兵种名：</b>{classes.filter(c => c.nameZh && c.nameEn).map((c, i) => <span key={c.id}>{i > 0 ? '、' : ''}<b>{c.nameZh}（{c.nameEn}）</b></span>)}。其余未经确认的英文名保留英文。</div>
    <div className="notice"><b>译名来源说明：</b>沿用原型记录的简体中文实机“上级职业考试 / 资格考试”与任务奖励截图结论。原始截图尚未入库，未在本次重构中重新认证。宗师射手等缺少可靠对应证据的旧标签标记为待核实。</div>
  </section>;
}
