import { expect, test } from '@playwright/test';

test('handbook navigation and language tabs work', async ({ page }) => {
  await page.goto('/leetcode-handbook/problems/0001-two-sum/');
  await expect(page.getByRole('heading', { name: '1. Two Sum' })).toBeVisible();
  await page.getByRole('tab', { name: 'Python' }).click();
  await expect(page.getByText('class Solution:')).toBeVisible();
  await expect(page.locator('a[rel="next"]')).toContainText('下一頁');
  await expect(page.getByText('下一页', { exact: true })).toHaveCount(0);
});

test('learning path slides respond to arrow keys', async ({ page }) => {
  await page.goto('/leetcode-handbook/slides/learning-path/');
  await expect(page.getByRole('heading', { name: '從解題到建立可重複運用的能力' })).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('heading', { name: '每一題都走四個階段' })).toBeVisible();
  await expect(page.getByRole('link', { name: '返回手冊學習路線' })).toBeVisible();
});

test('learning path table uses the full content width', async ({ page }) => {
  await page.goto('/leetcode-handbook/learning-path/');
  const table = page.getByRole('table');
  await expect(table).toBeVisible();

  const widths = await table.evaluate((element) => {
    const header = element.querySelector('thead');
    return {
      table: element.getBoundingClientRect().width,
      header: header?.getBoundingClientRect().width ?? 0,
    };
  });

  expect(widths.header).toBeGreaterThanOrEqual(widths.table - 2);
});

test('mobile pages do not overflow horizontally', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/leetcode-handbook/problems/0704-binary-search/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});

test('learning path table fits a narrow viewport', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/leetcode-handbook/learning-path/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
