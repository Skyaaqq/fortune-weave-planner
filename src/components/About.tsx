import { Overview } from './Overview';
import { Sources } from './Sources';
import { updates } from '../data/updates';
export function About() {
  return <details id="about" className="about-panel"><summary><span>更新与使用说明</span><span className="small">版本记录 · 规划原则 · 资料来源</span></summary><div className="inside">
    <section aria-labelledby="updates-title"><h2 id="updates-title">更新记录</h2><ol className="update-list">{updates.map(update => <li key={update.date + update.title}><time>{update.date}</time><div><h3>{update.title}</h3><p>{update.summary}</p></div></li>)}</ol></section>
    <Overview /><Sources />
  </div></details>;
}
