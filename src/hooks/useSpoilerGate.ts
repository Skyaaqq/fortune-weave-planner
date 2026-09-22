import { useRef, useState } from 'react';
import type { SpoilerData } from '../domain/models';
export function useSpoilerGate() {
  const [data, setData] = useState<SpoilerData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const generation = useRef(0);
  async function unlock() {
    const request = ++generation.current; setLoading(true); setError(undefined);
    try { const module = await import('../data/spoilers'); if (request === generation.current) setData(module.spoilerData); }
    catch { if (request === generation.current) setError('后期资料加载失败，请重试。'); }
    finally { if (request === generation.current) setLoading(false); }
  }
  function lock() { generation.current++; setData(null); setLoading(false); setError(undefined); }
  return { data, loading, error, unlock, lock };
}
