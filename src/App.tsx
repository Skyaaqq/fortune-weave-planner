import { useTheme } from './hooks/useTheme';
import { useSpoilerGate } from './hooks/useSpoilerGate';
import { PortraitProvider, PortraitStatus } from './components/Portrait';
import { RoutePlanner } from './components/RoutePlanner';
import { MergeCards } from './components/MergeCards';
import { GrowthTable } from './components/GrowthTable';
import { SpoilerGate } from './components/SpoilerGate';
import { About } from './components/About';
export default function App() {
  const theme = useTheme(); const spoiler = useSpoilerGate();
  return <PortraitProvider>
    <a className="skip-link" href="#routes">跳到阵容规划</a>
    <header className="app-header container"><div><div className="eyebrow">FORTUNE’S WEAVE · PLAYER PLANNER</div><h1>全角色招募与因果合流规划器</h1><p>选路线，找队友，决定怎么练。</p></div><div className="header-actions"><a className="spoiler-indicator" href="#part3">{spoiler.data ? '后期信息已解锁' : '🔒 后期信息已隐藏'}</a><button type="button" className="theme-toggle" onClick={theme.toggle}>{theme.dark ? '切换亮色' : '切换深色'}</button></div></header>
    <div className="sticky"><nav className="container nav" aria-label="页面导航">{[['routes', '阵容规划'], ['growth', '成长数据库'], ['merge', '合流规划'], ['part3', '后期防漏'], ['about', '更新与说明']].map(([id, label]) => <a key={id} href={`#${id}`} onClick={id === 'about' ? () => { const details = document.querySelector<HTMLDetailsElement>('#about'); if (details) details.open = true; } : undefined}>{label}</a>)}</nav></div>
    {theme.error && <p className="container" role="alert">{theme.error}</p>}
    <main className="container"><RoutePlanner /><GrowthTable spoilers={spoiler.data} /><MergeCards /><SpoilerGate {...spoiler} /><About /></main>
    <footer className="container app-footer"><span>进度保存在当前浏览器 · 后期信息需二次确认</span><PortraitStatus /></footer>
  </PortraitProvider>;
}
