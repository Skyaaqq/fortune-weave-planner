import { expect, test } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  await page.route('https://fireemblemwiki.org/**', route => route.fulfill({ json: { error: { code: 'unavailable' } } }));
});

test('card growth and class deep link survive navigation and refresh', async ({ page }) => {
  await page.goto('./');
  const card = page.locator('#routes [data-character="cai"]');
  await expect(card.locator('.personal-growth')).toContainText('HP');
  await expect(card.locator('.personal-growth')).toContainText('CHA');
  await card.scrollIntoViewIfNeeded();
  await page.screenshot({ path: test.info().outputPath('card-growth-light.png') });
  await card.getByRole('link', { name: '士兵' }).click();
  await expect(page).toHaveURL(/#\/classes\/soldier$/);
  await expect(page.getByRole('heading', { name: '兵种说明' })).toBeVisible();
  await expect(page.locator('[data-class="soldier"] .class-growth-grid')).toContainText('-5%');
  await page.reload();
  await expect(page.locator('[data-class="soldier"]')).toBeVisible();
  await page.goBack();
  await expect(card.locator('.personal-growth')).toBeVisible();
});

test('class directory handles unknowns, malformed links and keyboard navigation', async ({ page }) => {
  await page.goto('./#/classes');
  await expect(page.getByRole('heading', { name: '兵种说明' })).toBeVisible();
  await page.screenshot({ path: test.info().outputPath('class-directory-light.png') });
  await expect(page.locator('[data-class="wing-soldier"] .class-growth-grid')).toContainText('0%');
  await expect(page.locator('[data-class="guardian"] .class-growth-grid')).toContainText('未知');
  await expect(page.locator('[data-class="caladrius"]')).toContainText('Caladrius');
  await expect(page.locator('[data-class="caladrius"]')).not.toContainText('荣光骑士');
  await expect(page.locator('[data-class="battle-master"]')).toHaveCount(0);
  await expect(page.locator('body')).not.toContainText('欧若拉');
  await expect(page.locator('body')).not.toContainText('第9章');
  await page.getByRole('button', { name: '切换深色' }).click();
  await page.screenshot({ path: test.info().outputPath('class-directory-dark.png') });
  await page.getByRole('link', { name: '跳到主要内容' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#classes')).toBeFocused();
  await page.goto('./#/classes/%');
  await expect(page.getByText('未找到此兵种资料。')).toBeVisible();
  await expect(page.locator('body')).not.toContainText('战斗将领');
});

test('early class story unlock stays gated while the exam remains visible', async ({ page }) => {
  await page.goto('./#/classes/dragoon');
  await expect(page.locator('[data-class="dragoon"]')).toContainText('枪术/斧术');
  await expect(page.locator('[data-class="dragoon"]')).toContainText('有额外剧情解锁条件');
  await expect(page.locator('body')).not.toContainText('欧若拉');
  expect(await page.evaluate(() => performance.getEntriesByType('resource').some(entry => /spoilers-[^/]+\.js/.test(entry.name)))).toBe(false);
  await page.getByRole('link', { name: '剧透门' }).click();
  await page.getByRole('button', { name: '查看后期信息' }).click();
  await page.getByRole('button', { name: '确认显示' }).click();
  await page.evaluate(() => { window.location.hash = '#/classes/dragoon'; });
  await expect(page.locator('[data-class="dragoon"]')).toContainText('欧若拉');
  await page.reload();
  await expect(page.locator('[data-class="dragoon"]')).not.toContainText('欧若拉');
});

test('route, category and recruitment progress survive class navigation', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('tab', { name: /Dietrich/ }).click();
  await page.getByRole('tab', { name: '建议主要招募 8' }).click();
  await page.locator('#routes [data-character="gaitz"]').getByRole('checkbox').check();
  await page.getByRole('link', { name: '兵种说明', exact: true }).click();
  await expect(page.getByRole('heading', { name: '兵种说明' })).toBeVisible();
  await page.getByRole('link', { name: '返回阵容规划' }).click();
  await expect(page.getByRole('tab', { name: /Dietrich/ })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tab', { name: '建议主要招募 8' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#routes [data-character="gaitz"]').getByRole('checkbox')).toBeChecked();
});

test('late class is gated and relocks after refresh', async ({ page }) => {
  await page.goto('./');
  await page.evaluate(() => { window.location.hash = '#/classes/battle-master'; });
  await expect(page.getByText('后期职业已隐藏。请先通过')).toBeVisible();
  await expect(page.locator('body')).not.toContainText('战斗将领');
  await page.getByRole('link', { name: '剧透门' }).last().click();
  await page.getByRole('button', { name: '查看后期信息' }).click();
  await page.getByRole('button', { name: '确认显示' }).click();
  await page.evaluate(() => { window.location.hash = '#/classes/battle-master'; });
  await expect(page.locator('[data-class="battle-master"]')).toContainText('战斗将领');
  await page.getByRole('link', { name: '返回阵容规划' }).click();
  await page.getByRole('tab', { name: /Leda/ }).click();
  const mu = page.locator('#routes [data-character="mu"]');
  await expect(mu.locator('.class-path')).toContainText('战斗将领');
  await mu.getByRole('link', { name: '战斗将领' }).click();
  await expect(page.locator('[data-class="battle-master"]')).toBeVisible();
  await page.getByRole('link', { name: '后期信息已解锁' }).click();
  await page.getByRole('button', { name: '重新隐藏剧透' }).click();
  await page.getByRole('link', { name: '阵容规划', exact: true }).click();
  await expect(mu.locator('.class-path')).toContainText('后期职业（已隐藏）');
  await expect(mu.locator('.class-path')).not.toContainText('战斗将领');
  await page.evaluate(() => { window.location.hash = '#/classes/battle-master'; });
  await page.reload();
  await expect(page.locator('[data-class="battle-master"]')).toHaveCount(0);
  await expect(page.locator('body')).not.toContainText('战斗将领');
});
