import { defineConfig, devices } from '@playwright/experimental-ct-svelte';
import {svelte} from '@sveltejs/vite-plugin-svelte'
import UnoCSS from '@unocss/svelte-scoped/vite'

export default defineConfig({
  testDir: './',
  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: './__component-snapshots__',
  snapshotPathTemplate: '{snapshotDir}/{testFilePath}/{arg}-{projectName}-{platform}{ext}', // https://playwright.dev/docs/api/class-testproject#test-project-snapshot-path-template
  timeout: 20 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  /* https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctPort: 3100,
    ctViteConfig: {
      plugins: [
        UnoCSS({
          injectReset: '@unocss/reset/tailwind.css',
          // cssFileTransformers: [transformerDirectives()],
        }),
        svelte({hot: false})
      ],
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
