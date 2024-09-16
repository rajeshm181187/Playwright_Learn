import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.danfoss.com/en/');
  await page.getByLabel('Accept all', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Contact us' }).getByRole('link').click();
  await page.getByLabel('Distributors and service').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Looking for distributors?').click();
  const page1 = await page1Promise;
  await page1.getByPlaceholder('Enter location').click();
  await page1.getByPlaceholder('Enter location').fill('chennai');
  await page1.getByPlaceholder('Enter location').press('Enter');
  await page1.locator('li').filter({ hasText: 'Beijer Ref India (South)' }).getByRole('button').click();
  await page1.getByRole('button', { name: 'Contact form' }).click();
  await page1.getByTestId('dialog').getByLabel('Video close button').click()
})