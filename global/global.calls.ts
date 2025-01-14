import { test, expect } from "@playwright/test";

export async function login(page:any) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/OrangeHRM/);
    // await page.waitForLoadState('networkidle');
    await page.getByPlaceholder("username").type("admin");
    await page.getByPlaceholder("Password").type("admin123");
    await page.locator('//input[@placeholder="Username"]').click();
    await page.locator('//input[@placeholder="Password"]').click(); 
    // await page.waitForLoadState('networkidle'); 
    await page.locator('//button[text()=" Login "]').click();
    // await page.waitForLoadState('networkidle');
  }

  export async function Logout(page:any) {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/OrangeHRM/);
      // await page.waitForLoadState('networkidle');
      await page.getByPlaceholder("username").type("admin");
      await page.getByPlaceholder("Password").type("admin123");
      await page.locator('//input[@placeholder="Username"]').click();
      await page.locator('//input[@placeholder="Password"]').click();  
      await page.locator('//button[text()=" Login "]').click();
      // await page.waitForLoadState('networkidle');
      expect(await page.locator('//h6[normalize-space()="Dashboard"]'));
      await page.locator('//p[@class="oxd-userdropdown-name"]').click();
      // await page.waitForLoadState('networkidle');
      await page.locator('//a[normalize-space()="Logout"]').click();
    }

  export async function Admin(page:any) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.waitForLoadState('networkidle');
    await page.getByPlaceholder("username").type("admin");
    await page.getByPlaceholder("Password").type("admin123");
    await page.locator('//input[@placeholder="Username"]').click();
    await page.locator('//input[@placeholder="Password"]').click();  
    await page.locator('//button[text()=" Login "]').click();
    await page.waitForLoadState('networkidle');
    expect(await page.locator('//h6[normalize-space()="Dashboard"]'));
    // await page.locator('//p[@class="oxd-userdropdown-name"]').click();
    // await page.waitForLoadState('networkidle');
    // await page.locator('//a[normalize-space()="Logout"]').click();
    await page.locator('//span[normalize-space()="Admin"]').click();
  }