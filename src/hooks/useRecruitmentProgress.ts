import { useState } from 'react';
import { readStored, writeStored } from '../utils/storage';
import { characters } from '../data/characters';
import { routes } from '../data/routes';
import type { Category, RouteId } from '../domain/models';
export const progressKey = (route: RouteId, kind: Category, id: string) => `unit-${route}-${kind}-${id}`;
export function useRecruitmentProgress() {
  const [initial] = useState(() => {
    const values: Record<string, boolean> = {}; let error: string | undefined;
    for (const r of routes) for (const kind of ['primary', 'merge'] as const) for (const id of r[kind]) {
      const c = characters.find(c => c.id === id)!;
      const key = progressKey(r.id, kind, id);
      const saved = readStored(key, `fw-planner:unit-${r.id}-${kind}-${c.nameZh ?? c.nameEn}`);
      values[key] = saved.value === '1'; error ??= saved.error;
    }
    return { values, error };
  });
  const [values, setValues] = useState(initial.values);
  const [error, setError] = useState(initial.error);
  function setChecked(key: string, checked: boolean) { setValues(prev => ({ ...prev, [key]: checked })); setError(writeStored(key, checked ? '1' : '0')); }
  return { values, setChecked, error };
}
