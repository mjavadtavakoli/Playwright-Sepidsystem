import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://192.168.1.29:84/#/');
  await page.getByRole('textbox', { name: 'نام کاربری' }).click();
  await page.getByRole('textbox', { name: 'نام کاربری' }).fill('your-username');
  await page.getByRole('textbox', { name: 'نام کاربری' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'نام کاربری' }).press('ControlOrMeta+c');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('your-pass');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'ورود' }).click();
});
