import { test, expect } from '@playwright/test';
import { Admin, login, Logout } from '../global/global.calls';

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.close();
});

test('login negative scenario', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.waitForLoadState('networkidle');
  await page.locator('//button[text()=" Login "]').click();
  expect(await page.locator('//span[text()="Required"]'));
  await page.close();
});

test('login to 1', async ({ page }) => {
  await login(page);
});

  // expect(await page.locator('//h6[normalize-space()="Dashboard"]'));
  // await expect(page).toHaveURL(/dashboard\/index/);
  // // await page.close();


test('login to', async ({ page }) => {
  await Logout(page);
});

  // await expect(page).toHaveURL(/auth\/login/);
  // // await page.close();



test('login 2', async ({ page }) => {
  //  await Admin(page);
  await login(page);
  expect(await page.locator('//h6[normalize-space()="Dashboard"]'));
  // await page.locator('//p[@class="oxd-userdropdown-name"]').click();
  // await page.waitForLoadState('networkidle');
  // await page.locator('//a[normalize-space()="Logout"]').click();
  await page.locator('//span[normalize-space()="Admin"]').click();
});

  // await page.waitForLoadState('networkidle');
  // await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  // // await page.close();


