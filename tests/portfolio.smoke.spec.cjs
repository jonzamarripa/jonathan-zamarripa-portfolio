const { test, expect } = require('@playwright/test');

test('homepage initializes with accessible navigation and one H1', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav[aria-label="Primary navigation"]')).toBeVisible();
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('.jiz-homepage')).toBeVisible();
});

test('featured case-study overlay opens and Escape restores homepage', async ({ page }) => {
  await page.goto('/');
  await page.waitForFunction(() => typeof window.jizNavigate === 'function');
  await page.evaluate(() => window.jizNavigate('hotelkey-onboarding'));
  await expect(page.locator('.jiz-cs-overlay[role="dialog"]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close case study' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('.jiz-cs-overlay')).toHaveCount(0);
  await expect(page.locator('.jiz-homepage')).toBeVisible();
});

test('standalone case study is directly addressable', async ({ page }) => {
  const response = await page.goto('/work/the-first-sentence/');
  expect(response.status()).toBe(200);
  await expect(page.locator('main#main-content')).toBeVisible();
  await expect(page.locator('h1')).toHaveCount(1);
});

test('layout has no horizontal document overflow', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.jiz-homepage')).toBeVisible();
  const overflow = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth
  }));
  expect(overflow.scroll).toBeLessThanOrEqual(overflow.viewport + 2);
});

test('preview-only Sentry does not execute on localhost', async ({ page }) => {
  await page.goto('/');
  await page.waitForFunction(() => !!window.JIZ_SITE);
  const status = await page.evaluate(() => ({
    loaderStarted: !!window.__jizSentryLoaderStarted,
    scriptTags: document.querySelectorAll('script[src*="sentry-cdn.com"]').length
  }));
  expect(status).toEqual({ loaderStarted: false, scriptTags: 0 });
});
