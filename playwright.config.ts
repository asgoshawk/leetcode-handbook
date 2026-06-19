import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://127.0.0.1:4321/leetcode-handbook',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'corepack pnpm build && corepack pnpm preview --host 127.0.0.1',
    url: 'http://127.0.0.1:4321/leetcode-handbook/',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['iPhone 13'], browserName: 'chromium' } },
  ],
});
