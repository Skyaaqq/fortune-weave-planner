const API = 'https://fireemblemwiki.org/w/api.php';
const PAGE = "List of characters in Fire Emblem: Fortune's Weave";
export const normalizeName = (name: string) => name.toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9']/g, '');
export interface PortraitResult { images: Record<string, string>; error?: string }
let request: Promise<PortraitResult> | undefined;
export function parsePortraits(raw: string): Record<string, string> {
  const doc = new DOMParser().parseFromString(raw, 'text/html');
  const images: Record<string, string> = {};
  for (const row of doc.querySelectorAll('tr')) {
    const img = row.querySelector('img'); if (!img) continue;
    const src = img.getAttribute('srcset')?.split(',').at(-1)?.trim().split(/\s+/)[0] ?? img.getAttribute('src');
    if (!src) continue;
    const url = new URL(src, 'https://fireemblemwiki.org');
    if (url.protocol !== 'https:') continue;
    for (const a of row.querySelectorAll('a')) {
      const name = a.textContent?.trim();
      if (name && !images[normalizeName(name)]) images[normalizeName(name)] = url.href;
    }
  }
  return images;
}
export function loadPortraits(): Promise<PortraitResult> {
  request ??= (async () => {
    try {
      const qs = new URLSearchParams({ action: 'parse', page: PAGE, prop: 'text', format: 'json', origin: '*' });
      const response = await fetch(`${API}?${qs}`, { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data: { parse?: { text?: { '*'?: string } } } = await response.json();
      const raw = data.parse?.text?.['*']; if (!raw) throw new Error('Missing Wiki HTML');
      return { images: parsePortraits(raw) };
    } catch { return { images: {}, error: 'Wiki头像：加载失败，已使用文字徽章' }; }
  })();
  return request;
}
