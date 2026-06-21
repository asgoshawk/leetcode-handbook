import { expect, test } from '@playwright/test';

test('home actions open valid handbook pages', async ({ page }) => {
  await page.goto('/leetcode-handbook/');
  await page.getByRole('link', { name: '開始學習' }).click();
  await expect(page).toHaveURL(/\/leetcode-handbook\/learning-path\/$/);
  await expect(page.getByRole('heading', { name: '學習路線', level: 1 })).toBeVisible();

  await page.goto('/leetcode-handbook/');
  await page.getByRole('link', { name: '查看第一題' }).click();
  await expect(page).toHaveURL(/\/leetcode-handbook\/problems\/0001-two-sum\/$/);
  await expect(page.getByRole('heading', { name: '1. Two Sum', level: 1 })).toBeVisible();
});

test('handbook navigation and language tabs work', async ({ page }) => {
  await page.goto('/leetcode-handbook/problems/0001-two-sum/');
  await expect(page.getByRole('heading', { name: '1. Two Sum' })).toBeVisible();
  await page.getByRole('tab', { name: 'Python' }).click();
  await expect(page.getByText('class Solution:')).toBeVisible();
  await expect(page.locator('a[rel="next"]')).toContainText('下一頁');
  await expect(page.getByText('下一页', { exact: true })).toHaveCount(0);
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

test('problem catalog groups difficulties and shows topic tags', async ({ page }) => {
  await page.goto('/leetcode-handbook/problems/');
  await expect(page.getByRole('heading', { name: 'Easy' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Medium' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Hard' })).toBeVisible();
  await page.getByRole('link', { name: '3. Longest Substring Without Repeating Characters' }).first().click();
  await expect(page.getByLabel('題目資訊')).toContainText('Medium');
  await expect(page.getByLabel('題型標籤')).toContainText('Sliding Window');
  await expect(page.getByRole('link', { name: /在 LeetCode 開啟原題/ })).toHaveAttribute(
    'href',
    'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  );
});
