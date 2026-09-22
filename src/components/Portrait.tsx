import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { loadPortraits, normalizeName } from '../services/portraits';
import type { Character } from '../domain/models';
const PortraitContext = createContext<{ images: Record<string, string>; status: string }>({ images: {}, status: 'Wiki头像：等待联网加载' });
export function PortraitProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ images: {} as Record<string, string>, status: 'Wiki头像：等待联网加载' });
  useEffect(() => { let active = true; void loadPortraits().then(result => {
    if (active) setState({ images: result.images, status: result.error ?? `Wiki头像：已匹配 ${Object.keys(result.images).length} 个` });
  }); return () => { active = false; }; }, []);
  return <PortraitContext.Provider value={state}>{children}</PortraitContext.Provider>;
}
export function PortraitStatus() { return <span className="wiki-state" role="status">{useContext(PortraitContext).status}</span>; }
export function Portrait({ character, className = 'avatar' }: { character: Character; className?: string }) {
  const { images } = useContext(PortraitContext);
  const src = images[normalizeName(character.nameEn)];
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return <div className={`${className} wiki-avatar`}>
    {src && !failed && <img src={src} alt={character.nameZh ?? character.nameEn} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
    {(!loaded || failed) && <span className="fallback">{character.nameEn.split(/\s+/).map(s => s[0]).join('').slice(0, 2).toUpperCase()}</span>}
  </div>;
}
