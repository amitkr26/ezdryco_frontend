# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tracking-flow.spec.ts >> Tracking Flow >> customer home shows orders
- Location: e2e\tracking-flow.spec.ts:48:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Recent|Order|Book').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Recent|Order|Book').first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: 9:41
      - generic [ref=e7]:
        - img [ref=e8]
        - img [ref=e10]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - img [ref=e19]
              - text: Delivering to
            - paragraph [ref=e22]: Narnaul, Haryana
          - button "Open notifications" [ref=e25]:
            - img [ref=e26]
        - heading "Hello, there!" [level=2] [ref=e29]
        - paragraph [ref=e30]: Ready for your Cloth Spa today?
      - button "Book Pickup Now" [ref=e33]:
        - generic [ref=e34]:
          - img
        - text: Book Pickup Now
    - generic [ref=e36]:
      - link "Home" [ref=e37] [cursor=pointer]:
        - /url: /customer/home
        - img [ref=e38]
        - generic [ref=e41]: Home
      - link "Book" [ref=e42] [cursor=pointer]:
        - /url: /customer/book
        - img [ref=e43]
        - generic [ref=e46]: Book
      - link "Orders" [ref=e47] [cursor=pointer]:
        - /url: /customer/orders
        - img [ref=e48]
        - generic [ref=e51]: Orders
      - link "Profile" [ref=e52] [cursor=pointer]:
        - /url: /customer/profile
        - img [ref=e53]
        - generic [ref=e56]: Profile
  - region "Notifications (F8)":
    - list
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Tracking Flow', () => {
  4  |   test('track page loads with timeline', async ({ page }) => {
  5  |     // Use a mock order ID
  6  |     await page.goto('/customer/track/123');
  7  |     
  8  |     // Check for timeline or tracking indicators
  9  |     const trackText = page.locator('text=Track|Order|Status|Timeline').first();
  10 |     await expect(trackText).toBeVisible({ timeout: 5000 });
  11 |   });
  12 | 
  13 |   test('OrderTimeline component renders', async ({ page }) => {
  14 |     await page.goto('/customer/track/123');
  15 |     
  16 |     // Look for timeline steps
  17 |     const timelineSteps = page.locator('[class*="timeline"], [class*="step"], .lucide-check').first();
  18 |     await expect(timelineSteps).toBeVisible({ timeout: 5000 });
  19 |   });
  20 | 
  21 |   test('sticky action footer visible', async ({ page }) => {
  22 |     await page.goto('/customer/track/123');
  23 |     
  24 |     // Check for sticky footer
  25 |     const stickyFooter = page.locator('.fixed, [class*="sticky"], [class*="bottom-0"]').first();
  26 |     await expect(stickyFooter).toBeVisible();
  27 |   });
  28 | 
  29 |   test('WhatsApp button in track page', async ({ page }) => {
  30 |     await page.goto('/customer/track/123');
  31 |     
  32 |     // Look for WhatsApp link
  33 |     const whatsappLink = page.locator('a[href*="wa.me"], button:has(.lucide-message-circle)').first();
  34 |     await expect(whatsappLink).toBeVisible({ timeout: 3000 });
  35 |   });
  36 | 
  37 |   test('reschedule flow accessible', async ({ page }) => {
  38 |     await page.goto('/customer/track/123');
  39 |     
  40 |     // Look for reschedule button or link
  41 |     const rescheduleBtn = page.locator('button:has-text("Reschedule"), text=Reschedule').first();
  42 |     // May not be visible if order not in correct status
  43 |     if (await rescheduleBtn.isVisible().catch(() => false)) {
  44 |       await expect(rescheduleBtn).toBeVisible();
  45 |     }
  46 |   });
  47 | 
  48 |   test('customer home shows orders', async ({ page }) => {
  49 |     await page.goto('/customer/home');
  50 |     
  51 |     // Check for recent orders or book button
  52 |     const content = page.locator('text=Recent|Order|Book').first();
> 53 |     await expect(content).toBeVisible({ timeout: 5000 });
     |                           ^ Error: expect(locator).toBeVisible() failed
  54 |   });
  55 | 
  56 |   test('orders list page loads', async ({ page }) => {
  57 |     await page.goto('/customer/orders');
  58 |     
  59 |     // Check for orders or empty state
  60 |     const ordersContent = page.locator('body');
  61 |     await expect(ordersContent).toBeVisible();
  62 |   });
  63 | });
  64 | 
```