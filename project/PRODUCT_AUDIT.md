# EZDRY Product Audit & Optimization Roadmap (v2.0)
**Target Market:** Narnaul, Haryana, India

---

## 1. FULL PRODUCT AUDIT SUMMARY

### 🏙️ Product & Business Audit
*   **Positioning**: Strong local focus on Narnaul. "Cloth Spa" messaging is unique but needs more prominent secondary support.
*   **Trust Signals**: Local testimonials are great, but lack visual proof (customer photos/shop photos).
*   **Booking Friction**: Low (mobile sticky bar and WhatsApp help), but the checkout flow needs auditing for payment trust.
*   **B2B Strategy**: Visible but lacks a dedicated high-conversion B2B landing page with specific "Per-KG" or "Subscription" logic.

### 🎨 UI/UX Audit
*   **Consistency**: THE BIGGEST ISSUE. Dashboard/Internal portals are "Indigo" (Premium), but Public SEO pages are still "Sky Blue" (Legacy).
*   **Mobile Experience**: Sticky CTA is implemented, but could be more dynamic (showing current order status or 'Free Delivery' countdown).
*   **Hierarchy**: Landing page is strong, but service pages are slightly "thin" on visual content.
*   **Empty States**: Dashboard empty states are generic and could use more encouraging copy.

### 🔍 SEO & Discovery Audit
*   **Local Relevance**: Excellent. Locality mentions are deep.
*   **Technical SEO**: Structured Data (JSON-LD) is implemented but needs validation for `LocalBusiness` specific fields.
*   **Content**: "Robotic" feel in some SEO templates. Needs more human, conversational copy.
*   **URL Structure**: Consistent kebab-case, good for crawling.

---

## 2. ISSUE CATEGORIZATION

| Severity | Issue | Impact | Recommended Fix |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | **Theme Inconsistency** | Brand confusion. SEO pages look like a different site than the app. | Port SEO/Public pages to the Indigo Design System. |
| **HIGH** | **Thin SEO Content** | Weak ranking for secondary keywords (Shoe/Carpet cleaning). | Expand content for specialized cleaning pages with Narnaul-specific FAQs. |
| **HIGH** | **Missing Schema Specifics** | Lower trust in Google Knowledge Panel. | Enhance `LocalBusiness` schema with exact location, sameAs (Socials), and Reviews. |
| **MEDIUM** | **Generic Imagery** | Low emotional trust. | Replace OG/Hero images with actual service-related or high-fidelity generated assets. |
| **MEDIUM** | **B2B Conversion** | Missed high-value partnerships. | Create a dedicated `/commercial` landing page with lead-gen focus. |
| **LOW** | **Micro-interactions** | Site feels "static". | Add entrance animations to SEO page components to match dashboards. |

---

## 3. STRATEGY ROADMAP

### Phase 1: Brand Unification (The "Indigo" Migration)
*   Standardize all `sky-500` to `indigo-600`.
*   Apply `rounded-[2.5rem]` to all cards on SEO and Public pages.
*   Standardize typography to the "Black/Bold" SaaS aesthetic.

### Phase 2: Local SEO Power-Pass (Narnaul Dominance)
*   **Area Pages**: Create micro-pages for `mahendragarh-road`, `adarsh-nagar`, etc., or significantly expand their presence on existing pages.
*   **Topical Authority**: Write 5 new blog posts specifically about "Narnaul Water Hardness vs Laundry" or "Monsoon Fabric Care in Haryana".

### Phase 3: CRO & Trust Harden
*   **Social Proof**: Integrate a "Google Review" widget or high-fidelity review cards.
*   **Pricing Clarity**: Add a "Quick Price Checker" modal on the landing page.

### Phase 4: AEO/GEO Optimization
*   **Concise Answer Blocks**: Refactor FAQ content into "Question-Answer" pairs that are easily extractable by Gemini/ChatGPT.
*   **Entity Linking**: Link local entities (Narnaul monuments, famous landmarks) contextually to ground the business in the real world.

---

## 4. IMMEDIATE ACTION ITEMS

1.  **Refactor `laundry-service-narnaul.tsx`** to Indigo theme.
2.  **Refactor `dry-cleaning-narnaul.tsx`** to Indigo theme.
3.  **Refactor `landing.tsx`** hero image and CTA micro-copy.
4.  **Inject Rich `LocalBusiness` Schema** into `App.tsx` or `PublicLayout`.
5.  **Create `/services` overview** with modern cards.
