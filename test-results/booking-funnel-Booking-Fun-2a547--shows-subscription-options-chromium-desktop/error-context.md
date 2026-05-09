# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking-funnel.spec.ts >> Booking Funnel >> plans page shows subscription options
- Location: e2e\booking-funnel.spec.ts:73:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Plan|Subscription|Monthly').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Plan|Subscription|Monthly').first()

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - link "EzDry CLOTH SPA" [ref=e6] [cursor=pointer]:
          - /url: /
          - generic [ref=e7]:
            - img [ref=e8]
            - generic [ref=e17]:
              - text: EzDry
              - paragraph [ref=e18]: CLOTH SPA
        - generic [ref=e19]:
          - link "Home" [ref=e20] [cursor=pointer]:
            - /url: /
          - link "Services" [ref=e21] [cursor=pointer]:
            - /url: /services
          - link "Commercial" [ref=e22] [cursor=pointer]:
            - /url: /commercial
          - link "How It Works" [ref=e23] [cursor=pointer]:
            - /url: /how-it-works
          - link "Pricing" [ref=e24] [cursor=pointer]:
            - /url: /pricing
          - link "Plans" [ref=e25] [cursor=pointer]:
            - /url: /plans
          - link "Blog" [ref=e26] [cursor=pointer]:
            - /url: /blog
          - link "Contact" [ref=e27] [cursor=pointer]:
            - /url: /contact
        - generic [ref=e28]:
          - link "Login" [ref=e29] [cursor=pointer]:
            - /url: /customer/login
          - button "Book Pickup" [ref=e30]
    - main [ref=e31]:
      - navigation "Breadcrumb" [ref=e32]:
        - list [ref=e33]:
          - listitem [ref=e34]:
            - link "Home" [ref=e35] [cursor=pointer]:
              - /url: /
              - img [ref=e36]
              - generic [ref=e39]: Home
          - listitem [ref=e40]:
            - img [ref=e41]
            - generic [ref=e43]: Plans
      - generic [ref=e46]:
        - generic [ref=e47]:
          - img [ref=e48]
          - text: Save Up To 30% On Laundry
        - heading "Never Worry About Laundry Again" [level=1] [ref=e51]:
          - text: Never Worry About
          - text: Laundry Again
        - paragraph [ref=e52]: Subscription plans designed for Narnaul families, students, and professionals. Predictable costs, priority service, and exclusive perks.
        - generic [ref=e53]:
          - button "Monthly" [ref=e54]
          - button "Quarterly" [ref=e55]
          - button "YearlySave 25%" [ref=e56]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]: Most Popular
          - generic [ref=e62]:
            - img [ref=e64]
            - heading "Family Premium" [level=3] [ref=e69]
            - paragraph [ref=e70]: For households of 4+ members
          - generic [ref=e72]:
            - generic [ref=e73]: ₹1299
            - generic [ref=e74]: /monthly
          - list [ref=e75]:
            - listitem [ref=e76]:
              - img [ref=e77]
              - generic [ref=e79]: Up to 60 items per month
            - listitem [ref=e80]:
              - img [ref=e81]
              - generic [ref=e83]: Free pickup & delivery (unlimited)
            - listitem [ref=e84]:
              - img [ref=e85]
              - generic [ref=e87]: Priority 24-hour turnaround
            - listitem [ref=e88]:
              - img [ref=e89]
              - generic [ref=e91]: 1 dry cleaning credit/month (premium items)
            - listitem [ref=e92]:
              - img [ref=e93]
              - generic [ref=e95]: Seasonal blanket cleaning (2x/year)
            - listitem [ref=e96]:
              - img [ref=e97]
              - generic [ref=e99]: Dedicated family account manager
            - listitem [ref=e100]:
              - img [ref=e101]
              - generic [ref=e103]: WhatsApp priority support
          - generic [ref=e104]:
            - paragraph [ref=e105]: Best For
            - generic [ref=e106]:
              - generic [ref=e107]: Joint families
              - generic [ref=e108]: Working couples with kids
              - generic [ref=e109]: Large households
          - button "Subscribe via WhatsApp" [ref=e110]:
            - img
            - text: Subscribe via WhatsApp
        - generic [ref=e111]:
          - generic [ref=e112]:
            - img [ref=e114]
            - heading "Student Essential" [level=3] [ref=e117]
            - paragraph [ref=e118]: Budget-friendly for students & PGs
          - generic [ref=e120]:
            - generic [ref=e121]: ₹499
            - generic [ref=e122]: /monthly
          - list [ref=e123]:
            - listitem [ref=e124]:
              - img [ref=e125]
              - generic [ref=e127]: Up to 25 items per month
            - listitem [ref=e128]:
              - img [ref=e129]
              - generic [ref=e131]: Free pickup at hostel/PG
            - listitem [ref=e132]:
              - img [ref=e133]
              - generic [ref=e135]: 48-hour standard turnaround
            - listitem [ref=e136]:
              - img [ref=e137]
              - generic [ref=e139]: Group booking discounts (5+ students)
            - listitem [ref=e140]:
              - img [ref=e141]
              - generic [ref=e143]: Exam season priority slots
            - listitem [ref=e144]:
              - img [ref=e145]
              - generic [ref=e147]: WhatsApp order tracking
            - listitem [ref=e148]:
              - img [ref=e149]
              - generic [ref=e151]: No minimum order value
          - generic [ref=e152]:
            - paragraph [ref=e153]: Best For
            - generic [ref=e154]:
              - generic [ref=e155]: College students
              - generic [ref=e156]: PG residents
              - generic [ref=e157]: Budget-conscious users
          - button "Subscribe via WhatsApp" [ref=e158]:
            - img
            - text: Subscribe via WhatsApp
        - generic [ref=e159]:
          - generic [ref=e160]:
            - img [ref=e162]
            - heading "Individual Flex" [level=3] [ref=e165]
            - paragraph [ref=e166]: For solo professionals & singles
          - generic [ref=e168]:
            - generic [ref=e169]: ₹799
            - generic [ref=e170]: /monthly
          - list [ref=e171]:
            - listitem [ref=e172]:
              - img [ref=e173]
              - generic [ref=e175]: Up to 35 items per month
            - listitem [ref=e176]:
              - img [ref=e177]
              - generic [ref=e179]: Free pickup & delivery
            - listitem [ref=e180]:
              - img [ref=e181]
              - generic [ref=e183]: Express service option (+₹49)
            - listitem [ref=e184]:
              - img [ref=e185]
              - generic [ref=e187]: 1 premium garment care/month
            - listitem [ref=e188]:
              - img [ref=e189]
              - generic [ref=e191]: Weekend delivery slots
            - listitem [ref=e192]:
              - img [ref=e193]
              - generic [ref=e195]: Monthly usage reports
            - listitem [ref=e196]:
              - img [ref=e197]
              - generic [ref=e199]: Pause plan anytime
          - generic [ref=e200]:
            - paragraph [ref=e201]: Best For
            - generic [ref=e202]:
              - generic [ref=e203]: Working professionals
              - generic [ref=e204]: Single occupants
              - generic [ref=e205]: Bachelors
          - button "Subscribe via WhatsApp" [ref=e206]:
            - img
            - text: Subscribe via WhatsApp
      - generic [ref=e208]:
        - generic [ref=e209]:
          - img [ref=e210]
          - heading "Calculate Your Savings" [level=2] [ref=e212]
          - paragraph [ref=e213]: See how much you could save with a subscription vs pay-per-order
        - generic [ref=e214]:
          - generic [ref=e215]:
            - generic [ref=e216]:
              - generic [ref=e217]: Monthly Usage (items)
              - slider [ref=e218] [cursor=pointer]: "30"
              - generic [ref=e219]:
                - generic [ref=e220]: 10 items
                - generic [ref=e221]: 30 items
                - generic [ref=e222]: 100 items
            - generic [ref=e223]:
              - generic [ref=e224]: Select Plan
              - combobox [ref=e225]:
                - option "Family Premium (60 items)" [selected]
                - option "Student Essential (25 items)"
                - option "Individual Flex (35 items)"
          - generic [ref=e226]:
            - generic [ref=e227]:
              - paragraph [ref=e228]: Pay-Per-Order Cost
              - paragraph [ref=e229]: ₹1050
              - paragraph [ref=e230]: "@ ₹35/item average"
            - generic [ref=e231]:
              - paragraph [ref=e232]: Subscription Cost
              - paragraph [ref=e233]: ₹1299
              - paragraph [ref=e234]: Monthly plan
            - generic [ref=e235]:
              - paragraph [ref=e236]: Your Savings
              - paragraph [ref=e237]: ₹0
              - paragraph [ref=e238]: 0% saved
      - generic [ref=e240]:
        - generic [ref=e241]:
          - img [ref=e242]
          - heading "EZDRY Rewards" [level=2] [ref=e246]
          - paragraph [ref=e247]: Every order earns you points. More orders = bigger perks. Automatic enrollment for all customers.
        - generic [ref=e248]:
          - generic [ref=e249]:
            - img [ref=e251]
            - heading "Silver" [level=3] [ref=e255]
            - paragraph [ref=e256]: 0-10 orders completed
            - list [ref=e257]:
              - listitem [ref=e258]:
                - img [ref=e259]
                - generic [ref=e261]: 5% off every order
              - listitem [ref=e262]:
                - img [ref=e263]
                - generic [ref=e265]: "Birthday month special: 20% off"
              - listitem [ref=e266]:
                - img [ref=e267]
                - generic [ref=e269]: Early access to new services
          - generic [ref=e270]:
            - img [ref=e272]
            - heading "Gold" [level=3] [ref=e276]
            - paragraph [ref=e277]: 11-25 orders completed
            - list [ref=e278]:
              - listitem [ref=e279]:
                - img [ref=e280]
                - generic [ref=e282]: 10% off every order
              - listitem [ref=e283]:
                - img [ref=e284]
                - generic [ref=e286]: Free express upgrade monthly
              - listitem [ref=e287]:
                - img [ref=e288]
                - generic [ref=e290]: Priority customer support
              - listitem [ref=e291]:
                - img [ref=e292]
                - generic [ref=e294]: Quarterly free dry cleaning
          - generic [ref=e295]:
            - img [ref=e297]
            - heading "Platinum" [level=3] [ref=e301]
            - paragraph [ref=e302]: 26+ orders completed
            - list [ref=e303]:
              - listitem [ref=e304]:
                - img [ref=e305]
                - generic [ref=e307]: 15% off every order
              - listitem [ref=e308]:
                - img [ref=e309]
                - generic [ref=e311]: Free express on all orders
              - listitem [ref=e312]:
                - img [ref=e313]
                - generic [ref=e315]: Dedicated account manager
              - listitem [ref=e316]:
                - img [ref=e317]
                - generic [ref=e319]: Monthly free dry cleaning
              - listitem [ref=e320]:
                - img [ref=e321]
                - generic [ref=e323]: Exclusive partner discounts
      - generic [ref=e325]:
        - heading "Ready to Save?" [level=2] [ref=e326]
        - paragraph [ref=e327]: Join 500+ Narnaul families already saving time and money with EZDRY subscriptions.
        - generic [ref=e328]:
          - button "Start with Family Plan" [ref=e329]:
            - img
            - text: Start with Family Plan
          - button "Compare Pay-Per-Order" [ref=e330]
    - link "Contact on WhatsApp" [ref=e331] [cursor=pointer]:
      - /url: https://wa.me/919671869470
      - img [ref=e332]
      - generic: WhatsApp Us
    - generic [ref=e335]:
      - generic [ref=e336]:
        - heading "Areas We Serve in Narnaul" [level=2] [ref=e337]
        - paragraph [ref=e338]: EZDRY provides premium doorstep laundry and dry cleaning services across all major localities in Narnaul. We pick up and deliver directly to your doorstep.
      - generic [ref=e339]:
        - link "Adarsh Nagar" [ref=e340] [cursor=pointer]:
          - /url: /adarsh-nagar-laundry
          - img [ref=e341]
          - generic [ref=e344]: Adarsh Nagar
        - link "Mahendragarh Road" [ref=e345] [cursor=pointer]:
          - /url: /mahendragarh-road-laundry
          - img [ref=e346]
          - generic [ref=e349]: Mahendragarh Road
        - link "Koriawas" [ref=e350] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e351]
          - generic [ref=e354]: Koriawas
        - link "Shastri Nagar" [ref=e355] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e356]
          - generic [ref=e359]: Shastri Nagar
        - link "Nasibpur" [ref=e360] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e361]
          - generic [ref=e364]: Nasibpur
        - link "Kailash Nagar" [ref=e365] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e366]
          - generic [ref=e369]: Kailash Nagar
        - link "Old Narnaul" [ref=e370] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e371]
          - generic [ref=e374]: Old Narnaul
        - link "New Colony" [ref=e375] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e376]
          - generic [ref=e379]: New Colony
        - link "Mandi Area" [ref=e380] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e381]
          - generic [ref=e384]: Mandi Area
        - link "Sadar Bazar" [ref=e385] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e386]
          - generic [ref=e389]: Sadar Bazar
        - link "Housing Board" [ref=e390] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e391]
          - generic [ref=e394]: Housing Board
        - link "Haryana Colony" [ref=e395] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e396]
          - generic [ref=e399]: Haryana Colony
      - paragraph [ref=e401]:
        - text: Don't see your area? We're likely covering it.
        - link "Contact us to verify" [ref=e402] [cursor=pointer]:
          - /url: /contact
        - text: .
    - contentinfo [ref=e403]:
      - generic [ref=e404]:
        - generic [ref=e405]:
          - generic [ref=e406]:
            - generic [ref=e407]:
              - img [ref=e408]
              - generic [ref=e417]:
                - text: EzDry
                - paragraph [ref=e418]: CLOTH SPA
            - paragraph [ref=e419]: Narnaul's homegrown premium fabric care platform. Modernizing the way our city handles laundry.
            - generic [ref=e420]:
              - generic [ref=e421]:
                - img [ref=e423]
                - generic [ref=e426]:
                  - paragraph [ref=e427]: Regional HQ
                  - paragraph [ref=e428]: Narnaul, Haryana 123001
              - generic [ref=e429]:
                - img [ref=e431]
                - generic [ref=e433]:
                  - paragraph [ref=e434]: Concierge
                  - paragraph [ref=e435]: +91 96718 69470
          - generic [ref=e436]:
            - heading "Services" [level=3] [ref=e437]
            - list [ref=e438]:
              - listitem [ref=e439]:
                - link "Laundry Service Narnaul" [ref=e440] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e441]:
                - link "Dry Cleaning Narnaul" [ref=e442] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e443]:
                - link "Laundry Service" [ref=e444] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e445]:
                - link "Dry Cleaning" [ref=e446] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e447]:
                - link "Steam Ironing" [ref=e448] [cursor=pointer]:
                  - /url: /services#ironing
              - listitem [ref=e449]:
                - link "Commercial Laundry" [ref=e450] [cursor=pointer]:
                  - /url: /commercial
              - listitem [ref=e451]:
                - link "Shoe Cleaning" [ref=e452] [cursor=pointer]:
                  - /url: /shoe-cleaning-narnaul
              - listitem [ref=e453]:
                - link "Carpet & Curtains" [ref=e454] [cursor=pointer]:
                  - /url: /services
          - generic [ref=e455]:
            - heading "Company" [level=3] [ref=e456]
            - list [ref=e457]:
              - listitem [ref=e458]:
                - link "Pricing List" [ref=e459] [cursor=pointer]:
                  - /url: /pricing
              - listitem [ref=e460]:
                - link "How It Works" [ref=e461] [cursor=pointer]:
                  - /url: /how-it-works
              - listitem [ref=e462]:
                - link "Our Story" [ref=e463] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e464]:
                - link "Knowledge Hub" [ref=e465] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e466]:
                - link "Support" [ref=e467] [cursor=pointer]:
                  - /url: /contact
          - generic [ref=e468]:
            - generic [ref=e469]:
              - heading "Local Trust" [level=3] [ref=e470]
              - generic [ref=e471]:
                - generic [ref=e472]:
                  - img [ref=e473]
                  - paragraph [ref=e475]: 4.9/5 Rating
                - paragraph [ref=e476]: Trusted by 5,000+ residents across Narnaul for premium garment care.
            - generic [ref=e477]:
              - link [ref=e478] [cursor=pointer]:
                - /url: https://www.instagram.com/ezdryco/
                - img [ref=e479]
              - link [ref=e482] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/ezdry-co-8b4363405/
                - img [ref=e483]
              - link [ref=e487] [cursor=pointer]:
                - /url: https://www.youtube.com/@Dryco-h8i
                - img [ref=e488]
        - generic [ref=e491]:
          - paragraph [ref=e492]: © 2026 EZDRY Narnaul. All Rights Reserved.
          - generic [ref=e493]:
            - link "Privacy Policy" [ref=e494] [cursor=pointer]:
              - /url: /privacy
            - link "Terms of Use" [ref=e495] [cursor=pointer]:
              - /url: /terms
            - link "Refund Policy" [ref=e496] [cursor=pointer]:
              - /url: /refund
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
  8  |     await expect(page.locator('input[type="text"]').first()).toBeVisible();
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
> 78 |     await expect(planText).toBeVisible({ timeout: 5000 });
     |                            ^ Error: expect(locator).toBeVisible() failed
  79 |   });
  80 | });
  81 | 
```