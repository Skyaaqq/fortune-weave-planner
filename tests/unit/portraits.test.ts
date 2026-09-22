// @vitest-environment jsdom
import { expect, it, vi } from 'vitest';
import { loadPortraits, parsePortraits } from '../../src/services/portraits';
it('matches exact linked names and keeps original image URLs', () => {
  const images = parsePortraits('<table><tr><td><img src="/small.png" srcset="/large.png 2x"></td><td><a>Cai</a><a>Io</a></td></tr><tr><td><img src="javascript:alert(1)"></td><td><a>Unsafe</a></td></tr></table>');
  expect(images.cai).toBe('https://fireemblemwiki.org/large.png');
  expect(images.io).toBe('https://fireemblemwiki.org/large.png');
  expect(images.unsafe).toBeUndefined();
});
it('caches failed Wiki requests for the session and provides a readable fallback', async () => {
  const fetchMock = vi.fn().mockRejectedValue(new Error('offline')); vi.stubGlobal('fetch', fetchMock);
  expect(await loadPortraits()).toMatchObject({ images: {}, error: expect.any(String) });
  await loadPortraits(); expect(fetchMock).toHaveBeenCalledTimes(1); vi.unstubAllGlobals();
});
