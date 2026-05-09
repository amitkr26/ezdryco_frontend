import { useEffect } from "react";

export interface FAQItem {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  schema?: object | object[];
  faqs?: FAQItem[];
}

function normalizeCanonical(canonical: string): string {
  const prodOrigin = "https://www.ezdry.in";

  try {
    // If absolute URL, normalize the host.
    if (/^https?:\/\//i.test(canonical)) {
      const url = new URL(canonical);
      if (url.host === "ezdry.in") {
        url.host = "www.ezdry.in";
      }
      return url.toString();
    }

    // If relative path, attach to prod origin.
    if (canonical.startsWith("/")) {
      return prodOrigin + canonical;
    }

    return canonical;
  } catch {
    return canonical;
  }
}

/**
 * Generates FAQPage schema for AEO/GEO optimization
 * Helps with Google AI Overviews, voice search, and featured snippets
 */
export function generateFAQSchema(faqs: FAQItem[], canonicalUrl: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question || faq.q || "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer || faq.a || "",
      },
    })),
    "url": canonicalUrl,
  };
}

export function useSEO({
  title,
  description,
  canonical,
  ogImage = "/opengraph.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  schema,
  faqs,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);

    // Canonical
    const currentUrl = window.location.origin + window.location.pathname;
    const finalCanonical = normalizeCanonical(canonical || currentUrl);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = finalCanonical;

    // OpenGraph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:image", window.location.origin + ogImage, "property");
    setMeta("og:url", finalCanonical, "property");

    // Twitter
    setMeta("twitter:card", twitterCard);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", window.location.origin + ogImage);

    // Schema.org JSON-LD - support multiple schemas
    const schemas: object[] = [];

    if (schema) {
      if (Array.isArray(schema)) {
        schemas.push(...schema);
      } else {
        schemas.push(schema);
      }
    }

    // Add FAQ schema if provided (for AEO/GEO)
    if (faqs && faqs.length > 0) {
      schemas.push(generateFAQSchema(faqs, finalCanonical));
    }

    // Clean up existing schema scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => script.remove());

    // Add all schemas
    schemas.forEach((s) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(s);
      document.head.appendChild(script);
    });

    return () => {
      // Clean up schema scripts on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach((script) => script.remove());
    };
  }, [title, description, canonical, ogImage, ogType, twitterCard, schema, faqs]);
}
