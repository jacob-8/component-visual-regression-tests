import { test, expect } from '@playwright/experimental-ct-svelte';
import { Button } from './index';

// test.use({ viewport: { width: 500, height: 500 } });

test('smoke-test', async ({ mount, page }) => {
	await page.setViewportSize({ width: 150, height: 80 });
	
	const component = await mount(Button, {
		slots: {
      default: 'Hello World'
    } // enabled by https://github.com/microsoft/playwright/blob/d92fe16b76272afb19e7af5a2496f7efce45441d/packages/playwright-ct-svelte/registerSource.mjs#L82
	});

	await expect(component).toContainText('Hello World');

	await expect(page).toHaveScreenshot('light-mode.png'); 
	
	await page.evaluate(() => {
		document.body.classList.add('dark');
	});
	await expect(page).toHaveScreenshot('dark-mode.png');

});