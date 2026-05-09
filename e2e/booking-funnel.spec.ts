import { test, expect } from '@playwright/test';

test.describe('Booking Funnel', () => {
  test('register page loads with form', async ({ page }) => {
    await page.goto('/customer/register');
    await page.waitForTimeout(1000);
    
    // Check form elements - use more general selectors
    const inputs = page.locator('input');
    await expect(inputs.first()).toBeVisible({ timeout: 5000 });
    
    const buttons = page.locator('button');
    await expect(buttons.first()).toBeVisible({ timeout: 5000 });
  });

  test('login page accessible', async ({ page }) => {
    await page.goto('/customer/login');
    
    // Check login form
    await expect(page.locator('input[type="tel"]').first()).toBeVisible();
    await expect(page.locator('button:has-text("Login")').first()).toBeVisible();
  });

  test('book page shows categories', async ({ page }) => {
    await page.goto('/customer/book');
    
    // Wait for page to load
    await page.waitForTimeout(2000);
    
    // Check for category buttons or service selection
    const categoryButtons = page.locator('button').filter({ hasText: /Wash|Dry|Iron/i });
    const count = await categoryButtons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('navigation from landing to register works', async ({ page }) => {
    await page.goto('/');
    
    // Find and click register/book CTA
    const ctaButton = page.locator('button:has-text("Book")').first();
    
    if (await ctaButton.isVisible()) {
      await ctaButton.click();
      await page.waitForTimeout(1500);
      
      // Check navigation occurred
      const url = page.url();
      expect(url).toMatch(/register|book/);
    }
  });

  test('Areas We Serve page loads with localities', async ({ page }) => {
    await page.goto('/areas-we-serve');
    
    // Check for locality cards or links
    const localityLinks = page.locator('a[href*="laundry"]').first();
    await expect(localityLinks).toBeVisible({ timeout: 5000 });
  });

  test('locality page has booking CTA', async ({ page }) => {
    await page.goto('/adarsh-nagar-laundry');
    
    // Check for CTA button
    const cta = page.locator('button:has-text("Book")').first();
    await expect(cta).toBeVisible({ timeout: 5000 });
  });

  test('pricing page loads with rates', async ({ page }) => {
    await page.goto('/pricing');
    
    // Check for pricing indicators
    const priceText = page.locator('text=₹').first();
    await expect(priceText).toBeVisible({ timeout: 5000 });
  });

  test('plans page loads successfully', async ({ page }) => {
    await page.goto('/plans');
    await page.waitForTimeout(1000);
    
    // Check page loaded - look for any content
    const body = page.locator('body');
    await expect(body).toBeVisible();
    
    // Check for price or plan indicators
    const content = page.locator('text=/₹|Plan|Save|Monthly/i').first();
    await expect(content).toBeVisible({ timeout: 5000 });
  });
});
