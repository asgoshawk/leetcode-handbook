import { expect, test } from '@playwright/test';

test('handbook navigation and language tabs work', async ({ page }) => {
  await page.goto('/leetcode-handbook/problems/0001-two-sum/');
  await expect(page.getByRole('heading', { name: '1. Two Sum' })).toBeVisible();
  await page.getByRole('tab', { name: 'Python' }).click();
  await expect(page.getByText('class Solution:')).toBeVisible();
});

test('learning path slides respond to arrow keys', async ({ page }) => {
  await page.goto('/leetcode-handbook/slides/learning-path/');
  await expect(page.getByRole('heading', { name: '從解題到建立可重複運用的能力' })).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('heading', { name: '每一題都走四個階段' })).toBeVisible();
  await expect(page.getByRole('link', { name: '返回手冊學習路線' })).toBeVisible();
});

test('mobile pages do not overflow horizontally', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/leetcode-handbook/problems/0704-binary-search/');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});
