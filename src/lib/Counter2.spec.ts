import { test, expect } from '@playwright/experimental-ct-svelte';
import Counter from './Counter2.svelte';

// test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount, page }) => {
	await page.setViewportSize({ width: 200, height: 100 });
	
	const changes: any = [];

	const component = await mount(Counter, {
		props: {
			units: 's'
		},
		on: {
			changed: (c) => changes.push(c)
		}
	});

	const increment = component.locator('button[aria-label*=Increase]');
	const decrement = component.locator('button[aria-label*=Decrease]');
	await expect(component).toContainText('0s');
	await expect(page).toHaveScreenshot();

	await increment.click();
	await expect(component).toContainText('1s');
	expect(changes).toEqual([{ count: 1 }]);
	await expect(page).toHaveScreenshot();

	await increment.click();
	await expect(component).toContainText('2s');
	expect(changes).toEqual([{ count: 1 }, { count: 2 }]);
	await expect(page).toHaveScreenshot();

	await decrement.click();
	await expect(component).toContainText('1s');
	expect(changes).toEqual([{ count: 1 }, { count: 2 }, { count: 1 }]);
	await expect(page).toHaveScreenshot();
});