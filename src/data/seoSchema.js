// ==========================================================================
// STRUCTURED DATA (JSON-LD) GENERATORS — YOGA WITH ROHIT
// Strictly compliant with schema.org & Google Search Central Guidelines
// ==========================================================================

export const getOrganizationSchema = () => ({
  '@type': 'Organization',
  '@id': 'https://www.yogawithrohit.com/#organization',
  name: 'Yoga With Rohit',
  url: 'https://www.yogawithrohit.com/',
  logo: 'https://www.yogawithrohit.com/images/rohit-splits-ganges.jpg',
  telephone: '+91-8077570122',
  sameAs: [
    'https://www.instagram.com/panchrohit1943/'
  ],
  founder: {
    '@type': 'Person',
    name: 'Rohit',
    jobTitle: 'Lead Online Yoga Teacher from Rishikesh'
  },
  description: 'Authentic live online yoga classes taught directly from Rishikesh, India. Specializing in Traditional Hatha Yoga, Ashtanga Vinyasa Primary Series, and Pranayama.'
});

export const getPersonSchema = () => ({
  '@type': 'Person',
  '@id': 'https://www.yogawithrohit.com/#teacher-rohit',
  name: 'Rohit',
  jobTitle: 'Lead Online Yoga Teacher from Rishikesh',
  description: 'Rohit is a 500-hour master certified online yoga teacher from Rishikesh, India, specializing in traditional Hatha, Ashtanga Vinyasa, Pranayama, and personalized anatomical posture alignment.',
  url: 'https://www.yogawithrohit.com/about',
  sameAs: [
    'https://www.instagram.com/panchrohit1943/'
  ],
  knowsAbout: [
    'Online Yoga Classes',
    'Traditional Hatha Yoga',
    'Ashtanga Vinyasa Primary Series',
    'Pranayama Breathwork',
    'Meditation',
    'Postural Alignment'
  ]
});

export const getWebSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': 'https://www.yogawithrohit.com/#website',
  url: 'https://www.yogawithrohit.com/',
  name: 'Yoga With Rohit',
  description: 'Online Yoga Classes with Rohit - Live interactive Traditional Hatha & Ashtanga Yoga from Rishikesh.',
  publisher: {
    '@id': 'https://www.yogawithrohit.com/#organization'
  }
});

export const getBreadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `https://www.yogawithrohit.com${item.url}`
  }))
});

export const getCourseSchema = () => [
  {
    '@type': 'Course',
    '@id': 'https://www.yogawithrohit.com/#hatha-yoga-course',
    name: 'Live Traditional Hatha Yoga Online Classes',
    description: 'Daily interactive online Hatha yoga classes focusing on classical asanas, pranayama, and mindful alignment taught live by Rohit from Rishikesh.',
    provider: {
      '@type': 'Organization',
      name: 'Yoga With Rohit',
      sameAs: 'https://www.yogawithrohit.com/'
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseSchedule: {
        '@type': 'Schedule',
        repeatFrequency: 'P1W',
        byDay: ['https://schema.org/Monday', 'https://schema.org/Wednesday', 'https://schema.org/Friday']
      },
      instructor: {
        '@type': 'Person',
        name: 'Rohit',
        description: '500-Hour Certified Yoga Alliance Teacher from Rishikesh'
      }
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Free Demo Online Yoga Class',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Daily Online Yoga Class Pass',
        price: '5',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      {
        '@type': 'Offer',
        name: 'Monthly Online Yoga Package (12 Classes)',
        price: '50',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      }
    ]
  },
  {
    '@type': 'Course',
    '@id': 'https://www.yogawithrohit.com/#ashtanga-yoga-course',
    name: 'Live Ashtanga Vinyasa Primary Series Online',
    description: 'Dynamic synchronized breath-and-movement practice following the classical Ashtanga Primary Series taught live via Zoom.',
    provider: {
      '@type': 'Organization',
      name: 'Yoga With Rohit',
      sameAs: 'https://www.yogawithrohit.com/'
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Online',
      courseSchedule: {
        '@type': 'Schedule',
        repeatFrequency: 'P1W',
        byDay: ['https://schema.org/Monday', 'https://schema.org/Wednesday', 'https://schema.org/Friday']
      },
      instructor: {
        '@type': 'Person',
        name: 'Rohit'
      }
    }
  }
];

export const getFaqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer
    }
  }))
});
