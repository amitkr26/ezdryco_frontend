import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('loads successfully with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Best Laundry/);
    await expect(page).toHaveURL('http://localhost:5173/');
  });

  test('hero CTAs are visible and clickable', async ({ page }) => {
    await page.goto('/');
    
    // Main CTA buttons
    const bookButton = page.locator('text=Book Pickup').first();
    await expect(bookButton).toBeVisible();
    
    // Secondary CTAs
    const servicesLink = page.locator('text=Services').first();
    await expect(servicesLink).toBeVisible();
  });

  test('RealisticReviews section renders', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to reviews
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    
    // Check for review indicators
    const reviewText = page.locator('text=What').first();
    await expect(reviewText).toBeVisible({ timeout: 5000 });
  });

  test('GoogleReviews section renders', async ({ page }) => {
    await page.goto('/');
    
    // Look for Google reviews indicator
    const googleReview = page.locator('text=Google').first();
    await expect(googleReview).toBeVisible({ timeout: 5000 });
  });

  test('MapEmbed section renders', async ({ page }) => {
    await page.goto('/');
    
    // Look for map or location section
    const locationText = page.locator('text=Narnaul').first();
    await expect(locationText).toBeVisible();
  });

  test('SmartCTA buttons work correctly', async ({ page }) => {
    await page.goto('/');
    
    // Click main CTA
    const mainCTA = page.locator('button:has-text("Book")').first();
    if (await mainCTA.isVisible()) {
      await mainCTA.click();
      // Should navigate to register or book
      await page.waitForTimeout(1000);
      const url = page.url();
      expect(url).toMatch(/register|book|customer/);
    }
  });

  test('no console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(errors).toHaveLength(0);
  });

  test('SEO meta tags present', async ({ page }) => {
    await page.goto('/');
    
    // Check canonical
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toContain('ezdry.in');
    
    // Check description
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
  });

  test('Locality section visible', async ({ page }) => {
    await page.goto('/');
    
    // Look for Areas We Serve or locality indicators
    const areaText = page.locator('text=Areas').first();
    await expect(areaText).toBeVisible({ timeout: 3000 });
  });
});
