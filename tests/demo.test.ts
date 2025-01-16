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


  test('Adding data', async ({ page }) => {
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
    // expect(await page.locator('//label[normalize-space()="Username"]')).toBeVisible();
    // await page.locator('//div[@class="oxd-input-group oxd-input-field-bottom-space"]//div//input[@class="oxd-input oxd-input--active"]').fill("maria");
    await page.getByRole('textbox').nth(1).fill('maria');
    await page.waitForLoadState('networkidle');
    await page.locator('//button[normalize-space()="Search"]').click();
    await page.waitForLoadState('networkidle');
    expect(await page.getByText('(1) Record Found')).toBeVisible();
    await page.locator('//i[@class="oxd-icon bi-pencil-fill"]').click();
    expect(await page.locator('//h6[normalize-space()="Edit User"]')).toBeVisible();
    await page.locator('//input[@placeholder="Type for hints..."]').click();
    await page.getByRole('textbox').nth(1).fill('Maria Paula Saraiva Braga Albuquerque');
    await page.locator('//button[normalize-space()="Save"]').click();




  });


