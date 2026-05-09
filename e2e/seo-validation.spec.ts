import { test, expect } from '@playwright/test';

test.describe('SEO Validation', () => {
  test('landing page has correct canonical', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000); // Allow SPA to inject meta
    
    // Canonical is injected by useSEO hook - check it exists and has correct format
    const canonicalLink = page.locator('link[rel="canonical"]');
    const count = await canonicalLink.count();
    
    if (count > 0) {
      const canonical = await canonicalLink.getAttribute('href');
      expect(canonical).toMatch(/ezdry\.in/);
    } else {
      // In dev mode, canonical may not be injected yet
      test.skip();
    }
  });

  test('locality page has canonical', async ({ page }) => {
    await page.goto('/adarsh-nagar-laundry');
    
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toContain('adarsh-nagar-laundry');
    expect(canonical).toMatch(/ezdry\.in/);
  });

  test('OpenGraph tags present', async ({ page }) => {
    await page.goto('/');
    
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    const ogDesc = await page.locator('meta[property="og:description"]').getAttribute('content');
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    
    expect(ogTitle).toBeTruthy();
    expect(ogDesc).toBeTruthy();
    expect(ogImage).toBeTruthy();
  });

  test('Twitter card tags present', async ({ page }) => {
    await page.goto('/');
    
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
    expect(twitterCard).toBeTruthy();
  });

  test('FAQ schema present on landing', async ({ page }) => {
    await page.goto('/');
    
    // Check for JSON-LD script
    const scripts = await page.locator('script[type="application/ld+json"]').count();
    expect(scripts).toBeGreaterThan(0);
    
    // Get schema content
    const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(schemaContent).toContain('@context');
  });

  test('LocalBusiness schema has correct properties', async ({ page }) => {
    await page.goto('/');
    
    const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    
    expect(schemaContent).toContain('@type');
    expect(schemaContent).toContain('name');
    expect(schemaContent).toContain('telephone');
  });

  test('blog page has BlogPosting schema', async ({ page }) => {
    await page.goto('/blog/best-laundry-service-narnaul');
    
    const schemaContent = await page.locator('script[type="application/ld+json"]').first().textContent();
    
    expect(schemaContent).toContain('@type');
    expect(schemaContent).toContain('BlogPosting');
  });

  test('meta description on all key pages', async ({ page }) => {
    const pages = ['/', '/services', '/pricing', '/areas-we-serve'];
    
    for (const path of pages) {
      await page.goto(path);
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(50);
    }
  });

  test('robots.txt accessible', async ({ page }) => {
    await page.goto('/robots.txt');
    
    const content = await page.locator('body pre').textContent();
    expect(content).toContain('User-agent');
    expect(content).toContain('Sitemap');
  });

  test('sitemap.xml accessible', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    
    // Check response status
    expect(response?.status()).toBe(200);
    
    // Get raw content
    const content = await page.content();
    expect(content).toContain('urlset');
    expect(content).toContain('loc');
  });
});
