import { useEffect, useState } from 'react';
import { readStored, writeStored } from '../utils/storage';
export function useTheme() {
  const [initial] = useState(() => readStored('theme', 'fw-theme'));
  const [dark, setDark] = useState(initial.value === 'dark');
  const [error, setError] = useState(initial.error);
  useEffect(() => { document.body.classList.toggle('dark', dark); }, [dark]);
  function toggle() { const next = !dark; setDark(next); setError(writeStored('theme', next ? 'dark' : 'light')); }
  return { dark, toggle, error };
}
