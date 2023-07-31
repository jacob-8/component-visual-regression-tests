import { test, expect } from '@playwright/experimental-ct-svelte';
import Counter from './Counter.svelte';

test('increments', async ({ mount, page }) => {
	await page.setViewportSize({ width: 200, height: 100 });
	
	const changes: { count:number }[] = [];

	const component = await mount(Counter, {
		props: {
			units: 'mi'
		},
		on: {
			changed: (c: { count: number}) => changes.push(c)
		}
	});

	const increment = component.locator('button:text("+")');
	const decrement = component.locator('button:text("-")');
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

