import { sources } from '../data/sources';
export function Sources() {
  return <section id="sources"><div className="section-title"><div><div className="eyebrow">SOURCES & IMAGE MODE</div><h2>资料与头像说明</h2></div><p>头像从 Fire Emblem Wiki 角色列表解析并缓存本次会话请求。离线、接口不可达或图片失败时使用文字徽章。</p></div><ul className="source-list">{sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}<li>简体中文兵种数据：原型记录的玩家实机 / 表格截图（2026-09-22）。</li></ul><p className="small">角色首次展示采用中文名（English Name）；无可靠中文资料时保留英文。招募条件如受后续补丁影响，以实机为准。玩家 Meta 与事实数据分别维护。</p></section>;
}
