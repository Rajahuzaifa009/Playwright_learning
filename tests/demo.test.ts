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


  test('Adding data ', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.waitForLoadState('networkidle');
    await page.getByPlaceholder("username").fill("admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator('//input[@placeholder="Username"]').click();
    await page.locator('//input[@placeholder="Password"]').click();  
    await page.locator('//button[text()=" Login "]').click();
    await page.waitForLoadState('networkidle');
    expect(await page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible();
    await page.locator('//span[normalize-space()="Admin"]').click();
    expect(await page.locator('//h5[normalize-space()="System Users"]')).toBeVisible();
    await page.waitForLoadState('networkidle');
    await page.locator('//div[@class="--toggle"]//button[@type="button"]').click();
    await page.waitForLoadState('networkidle');
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill"]').click();
    await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]').click();
    await page.waitForLoadState('networkidle');
    expect(await page.locator('//label[normalize-space()="Username"]')).toBeVisible();
    // await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]').fill("Nalim");
    await page.getByRole('textbox').nth(1).fill('Nalim');
    await page.waitForLoadState('networkidle');
    await page.locator('//button[normalize-space()="Search"]').click();
    await page.locator('//div[@class="orangehrm-paper-container"]//button[2]').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading', { name: 'Edit User' })).toBeVisible();
    await (page.getByRole('button', { name: 'Save' })).click();

  });


  test('Job Section ', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.waitForLoadState('networkidle');
    await page.getByPlaceholder("username").fill("admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator('//input[@placeholder="Username"]').click();
    await page.locator('//input[@placeholder="Password"]').click();  
    await page.locator('//button[text()=" Login "]').click();
    await page.waitForLoadState('networkidle');
    expect(await page.locator('//h6[normalize-space()="Dashboard"]')).toBeVisible();
    await page.locator('//span[normalize-space()="Admin"]').click();
    expect(await page.locator('//h5[normalize-space()="System Users"]')).toBeVisible();
    await page.waitForLoadState('networkidle');
    await page.locator('//div[@class="--toggle"]//button[@type="button"]').click();
    await page.waitForLoadState('networkidle');
    await page.locator('//i[@class="oxd-icon bi-caret-down-fill"]').click();
    await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]').click();
    await page.waitForLoadState('networkidle');
    expect(await page.locator('//label[normalize-space()="Username"]')).toBeVisible();
    // await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]').fill("Nalim");
    await page.getByRole('textbox').nth(1).fill('Nalim');
    await page.waitForLoadState('networkidle');
    await page.locator('//button[normalize-space()="Search"]').click();
    await page.locator('//div[@class="orangehrm-paper-container"]//button[2]').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading', { name: 'Edit User' })).toBeVisible();
    await expect(page).toHaveURL(/saveSystemUser\/280/);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/admin\/viewSystemUsers/);
    await page.waitForLoadState('networkidle');
    await page.locator('//header[@class="oxd-topbar"]//li[2]').click();
    
  });
