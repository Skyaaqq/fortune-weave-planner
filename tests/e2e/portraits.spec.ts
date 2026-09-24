import { test, expect } from '@playwright/test';
test('portraits preserve aspect ratio and cache the Wiki request across routes', async ({ page }) => {
  let wikiRequests = 0;
  await page.route('https://fireemblemwiki.org/**', route => {
    if (route.request().url().includes('w/api.php')) { wikiRequests++; return route.fulfill({ json: { parse: { text: { '*': '<table><tr><td><img src="/portrait.svg"></td><td><a>Cai</a></td></tr></table>' } } } }); }
    return route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="160"><rect width="80" height="160" fill="#617d6f"/></svg>' });
  });
  await page.goto('./');
  await page.locator('#routes [data-character="cai"]').scrollIntoViewIfNeeded();
  const portrait = page.locator('#routes [data-character="cai"] img');
  await expect(portrait).toBeVisible();
  const box = await portrait.boundingBox(); expect(box).not.toBeNull();
  expect(box!.width / box!.height).toBeCloseTo(0.5, 2);
  await page.getByRole('tab', { name: /Theodora/ }).click(); await page.getByRole('tab', { name: /Cai/ }).click();
  await expect(page.locator('#routes [data-character="cai"] img')).toBeVisible(); expect(wikiRequests).toBe(1);
});
test('an individual broken image falls back without breaking cards', async ({ page }) => {
  await page.route('https://fireemblemwiki.org/**', route => route.request().url().includes('w/api.php') ? route.fulfill({ json: { parse: { text: { '*': '<table><tr><td><img src="/bad.png"></td><td><a>Cai</a></td></tr></table>' } } } }) : route.fulfill({ contentType: 'image/png', body: 'not-an-image' }));
  await page.goto('./');
  const card = page.locator('#routes [data-character="cai"]');
  await card.scrollIntoViewIfNeeded();
  await expect(card.locator('.fallback')).toBeVisible(); await expect(card.locator('img')).toHaveCount(0);
  await expect(card).toContainText('主攻成长合计（去掉力量、魔力中较低一项）：330%');
  await page.getByRole('tab', { name: /Theodora/ }).click(); await expect(page.locator('.kind-fixed')).toHaveCount(5);
});
