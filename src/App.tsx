import { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useSpoilerGate } from './hooks/useSpoilerGate';
import { PortraitProvider, PortraitStatus } from './components/Portrait';
import { RoutePlanner } from './components/RoutePlanner';
import { MergeCards } from './components/MergeCards';
import { GrowthTable } from './components/GrowthTable';
import { SpoilerGate } from './components/SpoilerGate';
import { About } from './components/About';
import { ClassGuide } from './components/ClassGuide';
function classIdFromHash(hash: string): string | undefined {
  if (!hash.startsWith('#/classes/')) return undefined;
  try { return decodeURIComponent(hash.slice('#/classes/'.length)); }
  catch { return 'invalid-class-link'; }
}
export default function App() {
  const theme = useTheme(); const spoiler = useSpoilerGate();
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const change = () => setHash(window.location.hash);
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);
  const classPage = hash === '#/classes' || hash.startsWith('#/classes/');
  const classId = classPage ? classIdFromHash(hash) : undefined;
  useEffect(() => {
    if (!classPage && hash.startsWith('#')) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    if (classPage && !classId) requestAnimationFrame(() => document.getElementById('classes')?.scrollIntoView());
  }, [classPage, classId, hash]);
  return <PortraitProvider>
    <a className="skip-link" href={classPage ? hash : '#routes'} onClick={classPage ? event => { event.preventDefault(); document.getElementById('classes')?.focus(); document.getElementById('classes')?.scrollIntoView(); } : undefined}>跳到主要内容</a>
    <header className="app-header container"><div><div className="eyebrow">FORTUNE’S WEAVE · PLAYER PLANNER</div><h1>全角色招募与因果合流规划器</h1><p>选路线，找队友，决定怎么练。</p></div><div className="header-actions"><a className="spoiler-indicator" href="#part3">{spoiler.data ? '后期信息已解锁' : '🔒 后期信息已隐藏'}</a><button type="button" className="theme-toggle" onClick={theme.toggle}>{theme.dark ? '切换亮色' : '切换深色'}</button></div></header>
    <div className="sticky"><nav className="container nav" aria-label="页面导航">{[['routes', '阵容规划'], ['growth', '成长数据库'], ['classes', '兵种说明'], ['merge', '合流规划'], ['part3', '后期防漏'], ['about', '更新与说明']].map(([id, label]) => <a key={id} href={id === 'classes' ? '#/classes' : `#${id}`} aria-current={id === 'classes' && classPage ? 'page' : undefined} onClick={id === 'about' ? () => { const details = document.querySelector<HTMLDetailsElement>('#about'); if (details) details.open = true; } : undefined}>{label}</a>)}</nav></div>
    {theme.error && <p className="container" role="alert">{theme.error}</p>}
    <main className="container"><div hidden={classPage}><RoutePlanner spoilers={spoiler.data} /><GrowthTable spoilers={spoiler.data} /><MergeCards spoilers={spoiler.data} /><SpoilerGate {...spoiler} /><About /></div>{classPage && <ClassGuide spoilers={spoiler.data} selectedId={classId} />}</main>
    <footer className="container app-footer"><span>进度保存在当前浏览器 · 后期信息需二次确认</span><PortraitStatus /></footer>
  </PortraitProvider>;
}
