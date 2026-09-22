import { useTheme } from './hooks/useTheme';
import { useSpoilerGate } from './hooks/useSpoilerGate';
import { Hero, Overview } from './components/Overview';
import { PortraitProvider, PortraitStatus } from './components/Portrait';
import { RoutePlanner } from './components/RoutePlanner';
import { MergeCards } from './components/MergeCards';
import { GrowthTable } from './components/GrowthTable';
import { SpoilerGate } from './components/SpoilerGate';
import { Sources } from './components/Sources';
export default function App() {
  const theme = useTheme(); const spoiler = useSpoilerGate();
  return <PortraitProvider><Hero /><div className="sticky"><nav className="container nav" aria-label="页面导航">{[['quick', '速览'], ['routes', '四线阵容'], ['merge', '因果合流'], ['part3', '后期防漏'], ['growth', '成长率热力图'], ['sources', '资料来源']].map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}<PortraitStatus /><button type="button" className="theme-toggle" onClick={theme.toggle}>{theme.dark ? '切换亮色' : '切换深色'}</button></nav></div>{theme.error && <p className="container" role="alert">{theme.error}</p>}<main className="container"><Overview /><RoutePlanner /><MergeCards /><SpoilerGate {...spoiler} /><GrowthTable spoilers={spoiler.data} /><Sources /></main></PortraitProvider>;
}
