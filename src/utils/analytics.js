// ==========================================================================
// ANALYTICS & EVENT TRACKING INFRASTRUCTURE — YOGA WITH ROHIT
// Ready for Google Analytics 4 (GA4), GTM, or custom telemetry
// ==========================================================================

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
  // Console logging in development for verification
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] ${eventName}`, params);
  }
};

export const trackPageView = (path, title) => {
  trackEvent('page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

export const trackFreeDemoClick = (source = 'button') => {
  trackEvent('free_demo_click', {
    source,
    event_category: 'Conversion',
    event_label: 'Free Demo Button Click',
  });
};

export const trackDemoBookingComplete = (program, batch, studentName) => {
  trackEvent('demo_booking_complete', {
    program,
    batch,
    student_name: studentName,
    event_category: 'Conversion',
    value: 0,
    currency: 'USD',
  });
};

export const trackPricingVisit = (source = 'navigation') => {
  trackEvent('pricing_page_visit', {
    source,
    event_category: 'Engagement',
  });
};

export const trackCheckoutStart = (packageType, price) => {
  trackEvent('begin_checkout', {
    package_type: packageType,
    price,
    currency: 'USD',
    event_category: 'E-commerce',
  });
};

export const trackWhatsAppClick = (source = 'header') => {
  trackEvent('whatsapp_click', {
    source,
    phone: '+918077570122',
    event_category: 'Contact',
  });
};

export const trackInstagramClick = () => {
  trackEvent('instagram_click', {
    handle: 'panchrohit1943',
    event_category: 'Social',
  });
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'Lead',
  });
};
