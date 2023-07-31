# Svelte Component Testing with Playwright

- Automatically run Visual Regression Tests on every commit

## How this was created from the UnoCSS SvelteKit template

- add `playwright/index.html`
- add `playwright/index.ts`
- add `playwright-ct.config.ts`
- run `pnpm i -D @playwright/test @playwright/experimental-ct-svelte`
- add `"test": "playwright test -c playwright-ct.config.ts",` script to `package.json`
- add tests as seen in the three `src/lib/_____.spec.ts` files
- run `pnpm test` or `pnpm test --update-snapshots`
- add `.github/workflows/components.yml` to run visual regression tests on each commit 
- `git config --global --add safe.directory /__w/component-visual-regression-tests/component-visual-regression-tests`

## Resources to read

- https://playwright.dev/docs/test-components
- https://playwright.dev/docs/test-snapshots

## Deep-dive

To learn how Playwright handles named slots and events: 
- https://github.com/sand4rt/playwright/tree/main/tests/components/ct-svelte-vite/src/tests.spec.ts
- https://github.com/microsoft/playwright/tree/main/packages/playwright-ct-svelte