# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking-funnel.spec.ts >> Booking Funnel >> register page loads with form
- Location: e2e\booking-funnel.spec.ts:4:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[type="text"]').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('input[type="text"]').first()

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
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Booking Funnel', () => {
  4  |   test('register page loads with form', async ({ page }) => {
  5  |     await page.goto('/customer/register');
  6  |     
  7  |     // Check form elements
> 8  |     await expect(page.locator('input[type="text"]').first()).toBeVisible();
     |                                                              ^ Error: expect(locator).toBeVisible() failed
  9  |     await expect(page.locator('input[type="tel"]').first()).toBeVisible();
  10 |     await expect(page.locator('button[type="submit"]').first()).toBeVisible();
  11 |   });
  12 | 
  13 |   test('login page accessible', async ({ page }) => {
  14 |     await page.goto('/customer/login');
  15 |     
  16 |     // Check login form
  17 |     await expect(page.locator('input[type="tel"]').first()).toBeVisible();
  18 |     await expect(page.locator('button:has-text("Login")').first()).toBeVisible();
  19 |   });
  20 | 
  21 |   test('book page shows categories', async ({ page }) => {
  22 |     await page.goto('/customer/book');
  23 |     
  24 |     // Wait for page to load
  25 |     await page.waitForTimeout(2000);
  26 |     
  27 |     // Check for category buttons or service selection
  28 |     const categoryButtons = page.locator('button').filter({ hasText: /Wash|Dry|Iron/i });
  29 |     const count = await categoryButtons.count();
  30 |     expect(count).toBeGreaterThan(0);
  31 |   });
  32 | 
  33 |   test('navigation from landing to register works', async ({ page }) => {
  34 |     await page.goto('/');
  35 |     
  36 |     // Find and click register/book CTA
  37 |     const ctaButton = page.locator('button:has-text("Book")').first();
  38 |     
  39 |     if (await ctaButton.isVisible()) {
  40 |       await ctaButton.click();
  41 |       await page.waitForTimeout(1500);
  42 |       
  43 |       // Check navigation occurred
  44 |       const url = page.url();
  45 |       expect(url).toMatch(/register|book/);
  46 |     }
  47 |   });
  48 | 
  49 |   test('Areas We Serve page loads with localities', async ({ page }) => {
  50 |     await page.goto('/areas-we-serve');
  51 |     
  52 |     // Check for locality cards or links
  53 |     const localityLinks = page.locator('a[href*="laundry"]').first();
  54 |     await expect(localityLinks).toBeVisible({ timeout: 5000 });
  55 |   });
  56 | 
  57 |   test('locality page has booking CTA', async ({ page }) => {
  58 |     await page.goto('/adarsh-nagar-laundry');
  59 |     
  60 |     // Check for CTA button
  61 |     const cta = page.locator('button:has-text("Book")').first();
  62 |     await expect(cta).toBeVisible({ timeout: 5000 });
  63 |   });
  64 | 
  65 |   test('pricing page loads with rates', async ({ page }) => {
  66 |     await page.goto('/pricing');
  67 |     
  68 |     // Check for pricing indicators
  69 |     const priceText = page.locator('text=₹').first();
  70 |     await expect(priceText).toBeVisible({ timeout: 5000 });
  71 |   });
  72 | 
  73 |   test('plans page shows subscription options', async ({ page }) => {
  74 |     await page.goto('/plans');
  75 |     
  76 |     // Check for plan indicators
  77 |     const planText = page.locator('text=Plan|Subscription|Monthly').first();
  78 |     await expect(planText).toBeVisible({ timeout: 5000 });
  79 |   });
  80 | });
  81 | 
```