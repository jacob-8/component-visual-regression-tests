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
- add `.github/workflows/components.yml` to run visual regression tests on each commit to a PR - note that snapshots generated locally and in CI will most likely differ too much to be useful. I recommend always running them on CI. You can do them locally do if you'd like, but the main idea here is to do that via a storying tool like Kitbook, and then having the CI snapshots to ensure complete notification of all component changes made. (See https://github.com/microsoft/playwright/issues/13873 to learn about difficulties between local and CI snapshots)

## Resources to read

- https://playwright.dev/docs/test-components
- https://playwright.dev/docs/test-snapshots

## Deep-dive

To learn how Playwright handles named slots and events: 
- https://github.com/sand4rt/playwright/tree/main/tests/components/ct-svelte-vite/src/tests.spec.ts
- https://github.com/microsoft/playwright/tree/main/packages/playwright-ct-svelte