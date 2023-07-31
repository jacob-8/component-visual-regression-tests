import { test, expect } from '@playwright/experimental-ct-svelte';
import DarkModeToggle from './DarkModeToggle.svelte';

test('toggle icon changes', async ({ mount, page }) => {
	await page.setViewportSize({ width: 100, height: 100 });
	
	const component = await mount(DarkModeToggle);

	await expect(page).toHaveScreenshot('light-mode.png');
	
	await page.evaluate(() => {
		document.body.classList.add('dark');
	});
	await expect(page).toHaveScreenshot('dark-mode.png');
});