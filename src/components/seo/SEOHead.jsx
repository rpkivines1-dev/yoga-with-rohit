import React, { useEffect } from 'react';
import {
  getOrganizationSchema,
  getPersonSchema,
  getWebSiteSchema,
  getBreadcrumbSchema,
  getCourseSchema,
} from '../../data/seoSchema';
import { trackPageView } from '../../utils/analytics';

export default function SEOHead({
  title = 'Online Yoga Classes with Rohit | Yoga With Rohit',
  description = 'Join live online yoga classes with Rohit. Practice Traditional Hatha Yoga & Ashtanga Vinyasa Primary Series taught directly from Rishikesh. Free demo available.',
  canonicalUrl = 'https://www.yogawithrohit.com/',
  keywords = 'online yoga classes, live online yoga classes, online yoga classes for beginners, Hatha yoga online classes, Ashtanga yoga online',
  ogType = 'website',
  image = 'https://www.yogawithrohit.com/images/rohit-splits-ganges.jpg',
  breadcrumbs = null,
  schema = null,
  faqSchema = null,
}) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard SEO Meta
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Meta Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:site_name', 'Yoga With Rohit');
    setMetaTag('property', 'og:locale', 'en_US');

    // 5. Twitter Card Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:url', canonicalUrl);
    setMetaTag('name', 'twitter:image', image);

    // 6. JSON-LD Structured Data Graph
    const graph = [
      getWebSiteSchema(),
      getOrganizationSchema(),
      getPersonSchema(),
      ...getCourseSchema(),
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push(getBreadcrumbSchema(breadcrumbs));
    }

    if (faqSchema) {
      graph.push(faqSchema);
    }

    if (schema) {
      if (Array.isArray(schema)) {
        graph.push(...schema);
      } else {
        graph.push(schema);
      }
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': graph,
    };

    let scriptTag = document.getElementById('dynamic-seo-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-seo-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData, null, 2);

    // 7. Analytics Page View Hook
    trackPageView(canonicalUrl, title);

    // Scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalUrl, keywords, ogType, image, breadcrumbs, schema, faqSchema]);

  return null;
}
