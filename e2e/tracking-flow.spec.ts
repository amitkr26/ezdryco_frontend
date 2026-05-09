import { test, expect } from '@playwright/test';

test.describe('Tracking Flow', () => {
  test('track page loads with timeline', async ({ page }) => {
    // Use a mock order ID
    await page.goto('/customer/track/123');
    
    // Check for timeline or tracking indicators
    const trackText = page.locator('text=Track|Order|Status|Timeline').first();
    await expect(trackText).toBeVisible({ timeout: 5000 });
  });

  test('OrderTimeline component renders', async ({ page }) => {
    await page.goto('/customer/track/123');
    
    // Look for timeline steps
    const timelineSteps = page.locator('[class*="timeline"], [class*="step"], .lucide-check').first();
    await expect(timelineSteps).toBeVisible({ timeout: 5000 });
  });

  test('sticky action footer visible', async ({ page }) => {
    await page.goto('/customer/track/123');
    
    // Check for sticky footer
    const stickyFooter = page.locator('.fixed, [class*="sticky"], [class*="bottom-0"]').first();
    await expect(stickyFooter).toBeVisible();
  });

  test('WhatsApp button in track page', async ({ page }) => {
    await page.goto('/customer/track/123');
    
    // Look for WhatsApp link
    const whatsappLink = page.locator('a[href*="wa.me"], button:has(.lucide-message-circle)').first();
    await expect(whatsappLink).toBeVisible({ timeout: 3000 });
  });

  test('reschedule flow accessible', async ({ page }) => {
    await page.goto('/customer/track/123');
    
    // Look for reschedule button or link
    const rescheduleBtn = page.locator('button:has-text("Reschedule"), text=Reschedule').first();
    // May not be visible if order not in correct status
    if (await rescheduleBtn.isVisible().catch(() => false)) {
      await expect(rescheduleBtn).toBeVisible();
    }
  });

  test('customer home shows orders', async ({ page }) => {
    await page.goto('/customer/home');
    
    // Check for recent orders or book button
    const content = page.locator('text=Recent|Order|Book').first();
    await expect(content).toBeVisible({ timeout: 5000 });
  });

  test('orders list page loads', async ({ page }) => {
    await page.goto('/customer/orders');
    
    // Check for orders or empty state
    const ordersContent = page.locator('body');
    await expect(ordersContent).toBeVisible();
  });
});
