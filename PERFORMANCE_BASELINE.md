# EZDRY Performance Baseline & Optimization Plan

## Current State (Pre-Optimization)

**Generated:** May 9, 2026  
**Tooling:** Vite 5.x, React 19, Tailwind CSS, Framer Motion

---

## Core Web Vitals Target

| Metric | Current | Target | Priority |
|--------|---------|--------|----------|
| **LCP** (Largest Contentful Paint) | TBD | < 2.5s | Critical |
| **INP** (Interaction to Next Paint) | TBD | < 200ms | Critical |
| **CLS** (Cumulative Layout Shift) | TBD | < 0.1 | Critical |
| **TTFB** (Time to First Byte) | TBD | < 600ms | High |
| **FCP** (First Contentful Paint) | TBD | < 1.8s | High |
| **TBT** (Total Blocking Time) | TBD | < 200ms | Medium |

---

## Bundle Analysis Targets

| Metric | Current | Target |
|--------|---------|--------|
| Total JS Bundle | TBD | < 200 KB (gzipped) |
| Initial Route Chunk | TBD | < 100 KB |
| Vendor Chunk | TBD | < 150 KB |
| CSS Bundle | TBD | < 20 KB |

---

## Route-Level Code Splitting Plan

### Immediate Split (High Priority)
- [ ] /areas-we-serve (large locality data)
- [ ] /blog/:slug (dynamic content)
- [ ] All locality pages (6 files)
- [ ] /plans (subscription calculator)

### Lazy Components (Medium Priority)
- [ ] PickupSlotSelector (heavy operational UI)
- [ ] OrderTimeline (animation-heavy)
- [ ] FAQAccordion (below-fold content)
- [ ] Reviews components (third-party feel)

---

## Image Optimization Strategy

### Implementation Required
1. **WebP/AVIF conversion** for all hero images
2. **Responsive images** with srcset
3. **Lazy loading** for below-fold images
4. **Blur-up placeholders** for perceived performance
5. **CDN delivery** (consider Cloudflare Images)

### Image Inventory
| Page | Images | Optimization |
|------|--------|--------------|
| Landing | Hero, feature icons | Convert to WebP, lazy load |
| Localities | None currently | Add landmark photos with optimization |
| Blog | Future | WebP with blur-up |

---

## Animation Performance

### Framer Motion Optimization
- [ ] Use `layout` prop sparingly
- [ ] Prefer `transform` over `top/left`
- [ ] Add `will-change` for heavy animations
- [ ] Reduce motion for accessibility
- [ ] Pause off-screen animations

---

## Font Loading Strategy

### Current
- Google Fonts (Inter)
- `swap` display

### Optimization
- [ ] Preconnect to fonts.gstatic.com
- [ ] Inline critical font CSS
- [ ] Subset fonts for Latin only
- [ ] Self-host fonts for caching

---

## Build Optimizations

### Vite Config Updates
```javascript
// Required changes
- Rollup manual chunks for vendor/libs
- CSS code splitting
- Tree shaking verification
- Minification (terser vs esbuild)
- Asset inlining thresholds
```

---

## Measurement Commands

```bash
# Production build analysis
npm run build
npx vite-bundle-visualizer

# Lighthouse CI (when implemented)
npm run lighthouse

# Real-world monitoring
# TODO: Implement web-vitals.js reporting
```

---

## Pre-Optimization Checklist

Before implementing optimizations, capture:
- [ ] Lighthouse scores (mobile + desktop)
- [ ] WebPageTest filmstrip
- [ ] Bundle analyzer screenshot
- [ ] Chrome DevTools performance profile
- [ ] Network waterfall analysis

---

## Expected Post-Optimization Results

| Metric | Expected Improvement |
|--------|---------------------|
| Lighthouse Performance | 65 → 90+ |
| First Load JS | TBD → < 150KB |
| Route Transition | Immediate → < 100ms |
| Image Load Time | TBD → 50% reduction |

---

## Implementation Priority

1. **P0 (Critical)** - Code splitting routes, WebP images, font preconnect
2. **P1 (High)** - Lazy load components, bundle analysis, CSS optimization
3. **P2 (Medium)** - Animation cleanup, prefetching, monitoring setup
4. **P3 (Low)** - Advanced optimizations, service worker, offline support
