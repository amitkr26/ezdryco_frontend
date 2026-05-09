# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile-ux.spec.ts >> Mobile UX - Pixel 7 >> mobile booking form usable
- Location: e2e\mobile-ux.spec.ts:32:3

# Error details

```
TimeoutError: locator.boundingBox: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('button[type="submit"]').first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - button "Back to Login" [ref=e5]:
        - img [ref=e6]
        - text: Back to Login
      - generic [ref=e8]:
        - generic [ref=e9]:
          - img [ref=e10]
          - generic [ref=e19]:
            - text: EzDry
            - paragraph [ref=e20]: CLOTH SPA
        - heading "Create Account" [level=1] [ref=e21]
        - paragraph [ref=e22]: Join Ezdry — Wear Fresh, Every Day!
    - generic [ref=e24]:
      - generic [ref=e25]:
        - generic [ref=e26]: Full Name
        - generic [ref=e27]:
          - img [ref=e28]
          - textbox "Aarav Sharma" [ref=e31]
      - generic [ref=e32]:
        - generic [ref=e33]: Phone Number
        - generic [ref=e34]:
          - generic [ref=e35]: "+91"
          - textbox "98765 43210" [ref=e36]
      - generic [ref=e37]:
        - generic [ref=e38]: Address
        - generic [ref=e39]:
          - img [ref=e40]
          - textbox "Flat no, Street, Area, City" [ref=e43]
      - generic [ref=e44]:
        - generic [ref=e45]: Password
        - generic [ref=e46]:
          - img [ref=e47]
          - textbox "Minimum 6 characters" [ref=e50]
          - button [ref=e51]:
            - img [ref=e52]
      - generic [ref=e55]:
        - generic [ref=e56]: Confirm Password
        - generic [ref=e57]:
          - img [ref=e58]
          - textbox "Re-enter password" [ref=e61]
      - button "Create Account" [ref=e62]
      - paragraph [ref=e63]:
        - text: Already have an account?
        - button "Login here" [ref=e64]
  - region "Notifications (F8)":
    - list
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Mobile UX - Pixel 7', () => {
  4   |   test.use({
  5   |     viewport: { width: 412, height: 915 },
  6   |     userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 7)',
  7   |   });
  8   | 
  9   |   test('landing page responsive layout', async ({ page }) => {
  10  |     await page.goto('/');
  11  |     
  12  |     // Check viewport meta
  13  |     const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
  14  |     expect(viewport).toContain('width=device-width');
  15  |     
  16  |     // Check mobile menu or hamburger
  17  |     const menuButton = page.locator('button[aria-label*="menu"], button:has(.lucide-menu)').first();
  18  |     await expect(menuButton).toBeVisible({ timeout: 3000 });
  19  |   });
  20  | 
  21  |   test('sticky CTA visible on mobile', async ({ page }) => {
  22  |     await page.goto('/');
  23  |     
  24  |     // Scroll down
  25  |     await page.evaluate(() => window.scrollTo(0, 500));
  26  |     
  27  |     // Check for sticky elements
  28  |     const stickyElements = page.locator('.fixed, [class*="sticky"]').first();
  29  |     await expect(stickyElements).toBeVisible();
  30  |   });
  31  | 
  32  |   test('mobile booking form usable', async ({ page }) => {
  33  |     await page.goto('/customer/register');
  34  |     
  35  |     // Check form inputs are tappable
  36  |     const inputs = page.locator('input');
  37  |     const count = await inputs.count();
  38  |     expect(count).toBeGreaterThan(0);
  39  |     
  40  |     // Check submit button
  41  |     const submitButton = page.locator('button[type="submit"]').first();
> 42  |     const box = await submitButton.boundingBox();
      |                                    ^ TimeoutError: locator.boundingBox: Timeout 10000ms exceeded.
  43  |     expect(box?.height).toBeGreaterThan(40); // Minimum touch target
  44  |     expect(box?.width).toBeGreaterThan(40);
  45  |   });
  46  | 
  47  |   test('no horizontal scroll', async ({ page }) => {
  48  |     await page.goto('/');
  49  |     
  50  |     // Check body width
  51  |     const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  52  |     const viewportWidth = await page.evaluate(() => window.innerWidth);
  53  |     
  54  |     expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // Allow small tolerance
  55  |   });
  56  | 
  57  |   test('floating WhatsApp button visible', async ({ page }) => {
  58  |     await page.goto('/');
  59  |     
  60  |     // Look for WhatsApp button
  61  |     const whatsappButton = page.locator('a[href*="wa.me"], button:has(.lucide-message-circle)').first();
  62  |     await expect(whatsappButton).toBeVisible({ timeout: 3000 });
  63  |   });
  64  | 
  65  |   test('locality cards scrollable', async ({ page }) => {
  66  |     await page.goto('/areas-we-serve');
  67  |     
  68  |     // Check for scrollable content
  69  |     const cards = page.locator('[class*="card"], a[href*="laundry"]').first();
  70  |     await expect(cards).toBeVisible({ timeout: 5000 });
  71  |     
  72  |     // Scroll test
  73  |     await page.evaluate(() => window.scrollTo(0, 1000));
  74  |     await page.waitForTimeout(500);
  75  |     
  76  |     const scrollPosition = await page.evaluate(() => window.scrollY);
  77  |     expect(scrollPosition).toBeGreaterThan(0);
  78  |   });
  79  | 
  80  |   test('touch targets adequate size', async ({ page }) => {
  81  |     await page.goto('/');
  82  |     
  83  |     // Check all buttons
  84  |     const buttons = page.locator('button');
  85  |     const count = await buttons.count();
  86  |     
  87  |     for (let i = 0; i < Math.min(count, 10); i++) {
  88  |       const button = buttons.nth(i);
  89  |       const box = await button.boundingBox();
  90  |       if (box) {
  91  |         expect(box.width).toBeGreaterThan(30);
  92  |         expect(box.height).toBeGreaterThan(30);
  93  |       }
  94  |     }
  95  |   });
  96  | });
  97  | 
  98  | test.describe('Mobile - Slow Network', () => {
  99  |   test.use({
  100 |     viewport: { width: 412, height: 915 },
  101 |   });
  102 | 
  103 |   test('page loads on slow 3G', async ({ page }) => {
  104 |     // Emulate slow network
  105 |     await page.context().setOffline(false);
  106 |     
  107 |     const startTime = Date.now();
  108 |     await page.goto('/');
  109 |     const loadTime = Date.now() - startTime;
  110 |     
  111 |     // Should load within reasonable time
  112 |     expect(loadTime).toBeLessThan(30000);
  113 |     
  114 |     // Check content is visible
  115 |     await expect(page.locator('body')).toBeVisible();
  116 |   });
  117 | });
  118 | 
```