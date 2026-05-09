# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo-validation.spec.ts >> SEO Validation >> blog page has BlogPosting schema
- Location: e2e\seo-validation.spec.ts:61:3

# Error details

```
TimeoutError: locator.textContent: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('script[type="application/ld+json"]').first()

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
            - link "Blog" [ref=e43] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e44]:
            - img [ref=e45]
            - generic [ref=e47]: Best Laundry Service Narnaul
      - article [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Narnaul Guide
          - heading "Best Laundry Service in Narnaul — EZDRY vs Local Dhobi" [level=1] [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - img [ref=e54]
              - text: April 22, 2025
            - generic [ref=e56]:
              - img [ref=e57]
              - text: 5 min read
          - generic [ref=e60]: Is the local dhobi still the best option in Narnaul? We compare traditional laundry services with EZDRY's doorstep model on price, quality, and reliability.
        - generic [ref=e63]:
          - generic [ref=e64]:
            - paragraph [ref=e65]: Narnaul's Professional Choice
            - paragraph [ref=e66]: Doorstep pickup. Fast turnaround. Soft water wash.
          - button "Book Your First Pickup" [ref=e67]:
            - text: Book Your First Pickup
            - img
        - generic [ref=e68]:
          - paragraph [ref=e70]: "Narnaul has always had a dependable network of local dhobis. For generations, families handed over a bundle of clothes and picked them up a few days later. It worked. But as schedules get busier and garment care standards rise, the question is: is the local dhobi still the best option — or is there something better?"
          - generic [ref=e71]:
            - heading "The Local Dhobi — Honest Assessment" [level=2] [ref=e72]
            - paragraph [ref=e73]: "Price: ₹15–25/shirt (wash + press). Quality: Depends entirely on the individual. Some are excellent, some use irons that burn collars. Reliability: Closed during festivals, randomly unavailable. Dry cleaning: Almost never available. Tracking: Call and wait. Verdict: Works for basic everyday laundry if you have a trusted one. Unreliable for valuable garments or busy schedules."
          - generic [ref=e74]:
            - heading "EZDRY — Narnaul's Modern Laundry Alternative" [level=2] [ref=e75]
            - paragraph [ref=e76]: "Price: ₹25/shirt wash, ₹12/press, ₹280 for a suit dry cleaning. Quality: Professional-grade via verified local partners who undergo quality checks. Availability: 7 days a week, 8 AM to 8 PM. Dry cleaning: Yes — full service. Tracking: WhatsApp updates at every step. Accountability: All orders are insured. Verdict: More consistent, more accountable, and covers dry cleaning — at comparable pricing for everyday items."
          - generic [ref=e77]:
            - heading "Price Comparison for Narnaul" [level=2] [ref=e78]
            - paragraph [ref=e79]: "For 10 shirts + press: Local dhobi ₹200–250 · EZDRY ₹370 (₹25 wash + ₹12 press per shirt). The small premium at EZDRY buys: free pickup from your door, professional cleaning standards, WhatsApp tracking, and accountability if something goes wrong. For many Narnaul families, that trade-off is worth it."
          - generic [ref=e80]:
            - heading "When to Use Which" [level=2] [ref=e81]
            - paragraph [ref=e82]: "Use the local dhobi if: you have a trusted one with consistent quality, your clothes are basic everyday cotton, you're price-sensitive and happy to drop/collect yourself. Use EZDRY if: you need dry cleaning (local dhobis rarely offer this), you want doorstep convenience, you're sending valuable or delicate garments, or you've had clothes damaged by a dhobi before."
          - generic [ref=e83]:
            - heading "The Bottom Line for Narnaul" [level=2] [ref=e84]
            - paragraph [ref=e85]: EZDRY isn't trying to replace every local dhobi. It's filling the gap they leave — dry cleaning, weekend availability, delicate garment care, and the convenience of not leaving your home. For basic shirts and everyday wear, both options work. For anything more than that, EZDRY is the safer choice in Narnaul.
        - generic [ref=e86]:
          - heading "Related Intelligence" [level=3] [ref=e87]
          - generic [ref=e88]:
            - button "Book EZDRY Pickup in Narnaul →" [ref=e89]
            - button "Laundry Service Narnaul →" [ref=e90]
            - button "Affordable Laundry in Narnaul →" [ref=e91]
        - generic [ref=e92]:
          - heading "Latest Reports" [level=3] [ref=e93]
          - generic [ref=e94]:
            - button "Laundry vs Dry Cleaning in Narnaul — Which Does Your Clothes Need? 6 min read" [ref=e95]:
              - paragraph [ref=e96]: Laundry vs Dry Cleaning in Narnaul — Which Does Your Clothes Need?
              - paragraph [ref=e97]:
                - img [ref=e98]
                - text: 6 min read
            - button "Affordable Laundry Service in Narnaul — Prices, Plans & What to Expect 5 min read" [ref=e101]:
              - paragraph [ref=e102]: Affordable Laundry Service in Narnaul — Prices, Plans & What to Expect
              - paragraph [ref=e103]:
                - img [ref=e104]
                - text: 5 min read
    - link "Contact on WhatsApp" [ref=e107] [cursor=pointer]:
      - /url: https://wa.me/919671869470
      - img [ref=e108]
      - generic: WhatsApp Us
    - generic [ref=e111]:
      - generic [ref=e112]:
        - heading "Areas We Serve in Narnaul" [level=2] [ref=e113]
        - paragraph [ref=e114]: EZDRY provides premium doorstep laundry and dry cleaning services across all major localities in Narnaul. We pick up and deliver directly to your doorstep.
      - generic [ref=e115]:
        - link "Adarsh Nagar" [ref=e116] [cursor=pointer]:
          - /url: /adarsh-nagar-laundry
          - img [ref=e117]
          - generic [ref=e120]: Adarsh Nagar
        - link "Mahendragarh Road" [ref=e121] [cursor=pointer]:
          - /url: /mahendragarh-road-laundry
          - img [ref=e122]
          - generic [ref=e125]: Mahendragarh Road
        - link "Koriawas" [ref=e126] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e127]
          - generic [ref=e130]: Koriawas
        - link "Shastri Nagar" [ref=e131] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e132]
          - generic [ref=e135]: Shastri Nagar
        - link "Nasibpur" [ref=e136] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e137]
          - generic [ref=e140]: Nasibpur
        - link "Kailash Nagar" [ref=e141] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e142]
          - generic [ref=e145]: Kailash Nagar
        - link "Old Narnaul" [ref=e146] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e147]
          - generic [ref=e150]: Old Narnaul
        - link "New Colony" [ref=e151] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e152]
          - generic [ref=e155]: New Colony
        - link "Mandi Area" [ref=e156] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e157]
          - generic [ref=e160]: Mandi Area
        - link "Sadar Bazar" [ref=e161] [cursor=pointer]:
          - /url: /laundry-service-narnaul
          - img [ref=e162]
          - generic [ref=e165]: Sadar Bazar
        - link "Housing Board" [ref=e166] [cursor=pointer]:
          - /url: /dry-cleaning-narnaul
          - img [ref=e167]
          - generic [ref=e170]: Housing Board
        - link "Haryana Colony" [ref=e171] [cursor=pointer]:
          - /url: /laundry-near-me-narnaul
          - img [ref=e172]
          - generic [ref=e175]: Haryana Colony
      - paragraph [ref=e177]:
        - text: Don't see your area? We're likely covering it.
        - link "Contact us to verify" [ref=e178] [cursor=pointer]:
          - /url: /contact
        - text: .
    - contentinfo [ref=e179]:
      - generic [ref=e180]:
        - generic [ref=e181]:
          - generic [ref=e182]:
            - generic [ref=e183]:
              - img [ref=e184]
              - generic [ref=e193]:
                - text: EzDry
                - paragraph [ref=e194]: CLOTH SPA
            - paragraph [ref=e195]: Narnaul's homegrown premium fabric care platform. Modernizing the way our city handles laundry.
            - generic [ref=e196]:
              - generic [ref=e197]:
                - img [ref=e199]
                - generic [ref=e202]:
                  - paragraph [ref=e203]: Regional HQ
                  - paragraph [ref=e204]: Narnaul, Haryana 123001
              - generic [ref=e205]:
                - img [ref=e207]
                - generic [ref=e209]:
                  - paragraph [ref=e210]: Concierge
                  - paragraph [ref=e211]: +91 96718 69470
          - generic [ref=e212]:
            - heading "Services" [level=3] [ref=e213]
            - list [ref=e214]:
              - listitem [ref=e215]:
                - link "Laundry Service Narnaul" [ref=e216] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e217]:
                - link "Dry Cleaning Narnaul" [ref=e218] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e219]:
                - link "Laundry Service" [ref=e220] [cursor=pointer]:
                  - /url: /laundry-service-narnaul
              - listitem [ref=e221]:
                - link "Dry Cleaning" [ref=e222] [cursor=pointer]:
                  - /url: /dry-cleaning-narnaul
              - listitem [ref=e223]:
                - link "Steam Ironing" [ref=e224] [cursor=pointer]:
                  - /url: /services#ironing
              - listitem [ref=e225]:
                - link "Commercial Laundry" [ref=e226] [cursor=pointer]:
                  - /url: /commercial
              - listitem [ref=e227]:
                - link "Shoe Cleaning" [ref=e228] [cursor=pointer]:
                  - /url: /shoe-cleaning-narnaul
              - listitem [ref=e229]:
                - link "Carpet & Curtains" [ref=e230] [cursor=pointer]:
                  - /url: /services
          - generic [ref=e231]:
            - heading "Company" [level=3] [ref=e232]
            - list [ref=e233]:
              - listitem [ref=e234]:
                - link "Pricing List" [ref=e235] [cursor=pointer]:
                  - /url: /pricing
              - listitem [ref=e236]:
                - link "How It Works" [ref=e237] [cursor=pointer]:
                  - /url: /how-it-works
              - listitem [ref=e238]:
                - link "Our Story" [ref=e239] [cursor=pointer]:
                  - /url: /about
              - listitem [ref=e240]:
                - link "Knowledge Hub" [ref=e241] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e242]:
                - link "Support" [ref=e243] [cursor=pointer]:
                  - /url: /contact
          - generic [ref=e244]:
            - generic [ref=e245]:
              - heading "Local Trust" [level=3] [ref=e246]
              - generic [ref=e247]:
                - generic [ref=e248]:
                  - img [ref=e249]
                  - paragraph [ref=e251]: 4.9/5 Rating
                - paragraph [ref=e252]: Trusted by 5,000+ residents across Narnaul for premium garment care.
            - generic [ref=e253]:
              - link [ref=e254] [cursor=pointer]:
                - /url: https://www.instagram.com/ezdryco/
                - img [ref=e255]
              - link [ref=e258] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/ezdry-co-8b4363405/
                - img [ref=e259]
              - link [ref=e263] [cursor=pointer]:
                - /url: https://www.youtube.com/@Dryco-h8i
                - img [ref=e264]
        - generic [ref=e267]:
          - paragraph [ref=e268]: © 2026 EZDRY Narnaul. All Rights Reserved.
          - generic [ref=e269]:
            - link "Privacy Policy" [ref=e270] [cursor=pointer]:
              - /url: /privacy
            - link "Terms of Use" [ref=e271] [cursor=pointer]:
              - /url: /terms
            - link "Refund Policy" [ref=e272] [cursor=pointer]:
              - /url: /refund
  - region "Notifications (F8)":
    - list
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('SEO Validation', () => {
  4  |   test('landing page has correct canonical', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     
  7  |     const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  8  |     expect(canonical).toMatch(/ezdry\.in/);
  9  |     expect(canonical).not.toContain('localhost');
  10 |   });
  11 | 
  12 |   test('locality page has canonical', async ({ page }) => {
  13 |     await page.goto('/adarsh-nagar-laundry');
  14 |     
  15 |     const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  16 |     expect(canonical).toContain('adarsh-nagar-laundry');
  17 |     expect(canonical).toMatch(/ezdry\.in/);
  18 |   });
  19 | 
  20 |   test('OpenGraph tags present', async ({ page }) => {
  21 |     await page.goto('/');
  22 |     
  23 |     const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
  24 |     const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
  25 |     const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
  26 |     
  27 |     expect(ogTitle).toBeTruthy();
  28 |     expect(ogDesc).toBeTruthy();
  29 |     expect(ogImage).toBeTruthy();
  30 |   });
  31 | 
  32 |   test('Twitter card tags present', async ({ page }) => {
  33 |     await page.goto('/');
  34 |     
  35 |     const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
  36 |     expect(twitterCard).toBeTruthy();
  37 |   });
  38 | 
  39 |   test('FAQ schema present on landing', async ({ page }) => {
  40 |     await page.goto('/');
  41 |     
  42 |     // Check for JSON-LD script
  43 |     const scripts = await page.locator('script[type="application/ld+json"]').count();
  44 |     expect(scripts).toBeGreaterThan(0);
  45 |     
  46 |     // Get schema content
  47 |     const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
  48 |     expect(schemaContent).toContain('@context');
  49 |   });
  50 | 
  51 |   test('LocalBusiness schema has correct properties', async ({ page }) => {
  52 |     await page.goto('/');
  53 |     
  54 |     const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
  55 |     
  56 |     expect(schemaContent).toContain('@type');
  57 |     expect(schemaContent).toContain('name');
  58 |     expect(schemaContent).toContain('telephone');
  59 |   });
  60 | 
  61 |   test('blog page has BlogPosting schema', async ({ page }) => {
  62 |     await page.goto('/blog/best-laundry-service-narnaul');
  63 |     
> 64 |     const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
     |                                                                                            ^ TimeoutError: locator.textContent: Timeout 10000ms exceeded.
  65 |     
  66 |     expect(schemaContent).toContain('@type');
  67 |     expect(schemaContent).toContain('BlogPosting');
  68 |   });
  69 | 
  70 |   test('meta description on all key pages', async ({ page }) => {
  71 |     const pages = ['/', '/services', '/pricing', '/areas-we-serve'];
  72 |     
  73 |     for (const path of pages) {
  74 |       await page.goto(path);
  75 |       const description = await page.locator('meta[name="description"]').getAttribute('content');
  76 |       expect(description).toBeTruthy();
  77 |       expect(description!.length).toBeGreaterThan(50);
  78 |     }
  79 |   });
  80 | 
  81 |   test('robots.txt accessible', async ({ page }) => {
  82 |     await page.goto('/robots.txt');
  83 |     
  84 |     const content = await page.locator('body pre').textContent();
  85 |     expect(content).toContain('User-agent');
  86 |     expect(content).toContain('Sitemap');
  87 |   });
  88 | 
  89 |   test('sitemap.xml accessible', async ({ page }) => {
  90 |     await page.goto('/sitemap.xml');
  91 |     
  92 |     const content = await page.locator('body pre').textContent();
  93 |     expect(content).toContain('urlset');
  94 |     expect(content).toContain('loc');
  95 |   });
  96 | });
  97 | 
```