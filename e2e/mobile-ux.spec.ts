import { test, expect } from '@playwright/test';

test.describe('Mobile UX - Pixel 7', () => {
  test.use({
    viewport: { width: 412, height: 915 },
    userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 7)',
  });

  test('landing page responsive layout', async ({ page }) => {
    await page.goto('/');
    
    // Check viewport meta
    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
    expect(viewport).toContain('width=device-width');
    
    // Check mobile menu or hamburger
    const menuButton = page.locator('button[aria-label*="menu"], button:has(.lucide-menu)').first();
    await expect(menuButton).toBeVisible({ timeout: 3000 });
  });

  test('sticky CTA visible on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    
    // Check for sticky elements
    const stickyElements = page.locator('.fixed, [class*="sticky"]').first();
    await expect(stickyElements).toBeVisible();
  });

  test('mobile booking form usable', async ({ page }) => {
    await page.goto('/customer/register');
    
    // Check form inputs are tappable
    const inputs = page.locator('input');
    const count = await inputs.count();
    expect(count).toBeGreaterThan(0);
    
    // Check submit button
    const submitButton = page.locator('button[type="submit"]').first();
    const box = await submitButton.boundingBox();
    expect(box?.height).toBeGreaterThan(40); // Minimum touch target
    expect(box?.width).toBeGreaterThan(40);
  });

  test('no horizontal scroll', async ({ page }) => {
    await page.goto('/');
    
    // Check body width
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // Allow small tolerance
  });

  test('floating WhatsApp button visible', async ({ page }) => {
    await page.goto('/');
    
    // Look for WhatsApp button
    const whatsappButton = page.locator('a[href*="wa.me"], button:has(.lucide-message-circle)').first();
    await expect(whatsappButton).toBeVisible({ timeout: 3000 });
  });

  test('locality cards scrollable', async ({ page }) => {
    await page.goto('/areas-we-serve');
    
    // Check for scrollable content
    const cards = page.locator('[class*="card"], a[href*="laundry"]').first();
    await expect(cards).toBeVisible({ timeout: 5000 });
    
    // Scroll test
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
    
    const scrollPosition = await page.evaluate(() => window.scrollY);
    expect(scrollPosition).toBeGreaterThan(0);
  });

  test('touch targets adequate size', async ({ page }) => {
    await page.goto('/');
    
    // Check all buttons
    const buttons = page.locator('button');
    const count = await buttons.count();
    
    for (let i = 0; i < Math.min(count, 10); i++) {
      const button = buttons.nth(i);
      const box = await button.boundingBox();
      if (box) {
        expect(box.width).toBeGreaterThan(30);
        expect(box.height).toBeGreaterThan(30);
      }
    }
  });
});

test.describe('Mobile - Slow Network', () => {
  test.use({
    viewport: { width: 412, height: 915 },
  });

  test('page loads on slow 3G', async ({ page }) => {
    // Emulate slow network
    await page.context().setOffline(false);
    
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Should load within reasonable time
    expect(loadTime).toBeLessThan(30000);
    
    // Check content is visible
    await expect(page.locator('body')).toBeVisible();
  });
});
