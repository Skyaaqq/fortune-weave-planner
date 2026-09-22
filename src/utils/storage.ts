export const storagePrefix = 'fortune-weave-planner:v1:';
export interface StoredValue { value: string | null; error?: string }
export function readStored(key: string, legacyKey?: string): StoredValue {
  try {
    const value = localStorage.getItem(storagePrefix + key);
    if (value !== null) return { value };
    const legacy = legacyKey ? localStorage.getItem(legacyKey) : null;
    // Legacy keys are retained. Migration never deletes or overwrites existing new values.
    if (legacy !== null) {
      try { localStorage.setItem(storagePrefix + key, legacy); }
      catch { return { value: legacy, error: '已读取旧进度，但无法保存迁移副本；旧数据仍保留。' }; }
    }
    return { value: legacy };
  } catch { return { value: null, error: '浏览器无法读取或迁移本地存储；本次操作仍可使用，但刷新后可能丢失。' }; }
}
export function writeStored(key: string, value: string): string | undefined {
  try { localStorage.setItem(storagePrefix + key, value); }
  catch { return '浏览器无法保存本地进度；本次操作仍可使用，但刷新后可能丢失。'; }
}
