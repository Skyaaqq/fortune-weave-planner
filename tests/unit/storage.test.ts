// @vitest-environment jsdom
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { readStored, writeStored, storagePrefix } from '../../src/utils/storage';
beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());
describe('non-destructive storage migration', () => {
  it('copies old progress while retaining the original key', () => {
    localStorage.setItem('legacy', '1');
    expect(readStored('progress', 'legacy').value).toBe('1');
    expect(localStorage.getItem('legacy')).toBe('1');
    expect(localStorage.getItem(storagePrefix + 'progress')).toBe('1');
  });
  it('new false progress takes precedence over old true progress', () => {
    localStorage.setItem('legacy', '1'); writeStored('progress', '0');
    expect(readStored('progress', 'legacy').value).toBe('0');
  });
  it('preserves readable legacy values when migration writes fail', () => {
    localStorage.setItem('legacy', '1');
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new DOMException('QuotaExceeded'); });
    expect(readStored('progress', 'legacy')).toMatchObject({ value: '1', error: expect.any(String) });
    expect(writeStored('progress', '0')).toContain('无法保存');
  });
  it('reports denied reads instead of crashing', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new DOMException('SecurityError'); });
    expect(readStored('progress')).toMatchObject({ value: null, error: expect.any(String) });
  });
});
