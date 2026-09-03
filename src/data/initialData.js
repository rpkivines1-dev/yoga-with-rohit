// ==========================================================================
// WELCOME HOTEL - SEED & INITIAL DATA
// ==========================================================================

export const INITIAL_ROOMS = [
  // --- 5 DELUXE LUXURY ROOMS ---
  {
    id: 'room-101',
    roomNumber: '101',
    name: 'Grand Royal Deluxe Suite',
    category: 'Deluxe Luxury',
    price: 240,
    maxGuests: 3,
    adults: 2,
    children: 1,
    bedType: 'King Size Plush Bed',
    size: '460 sq ft',
    floor: '1st Floor - East Wing',
    view: 'Private Garden & Fountain View',
    status: 'available', // available | maintenance
    rating: 4.9,
    reviewsCount: 48,
    featured: true,
    description: 'An expansive luxury haven featuring artisanal Italian furnishings, a lavish marble bathroom with a deep soaking tub and rain shower, a private furnished balcony, and floor-to-ceiling panoramic windows.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'High-Speed Wi-Fi (1 Gbps)',
      'Dual-Zone Climate Control AC',
      '65" OLED 4K Smart TV',
      'Royal King Feather Bed',
      'Italian Marble Bathroom',
      '24/7 Hot Water & Rain Shower',
      '24-Hour In-Room Dining',
      'Daily Dedicated Housekeeping',
      'Custom Walnut Wardrobe & Safe',
      'Complimentary Mineral Water & Espresso Bar',
      'Private Balcony with Seating',
      'Luxury Organic Bathrobes & Slippers'
    ]
  },
  {
    id: 'room-102',
    roomNumber: '102',
    name: 'Presidential Deluxe Suite',
    category: 'Deluxe Luxury',
    price: 250,
    maxGuests: 3,
    adults: 2,
    children: 1,
    bedType: 'King Size Feather Bed',
    size: '480 sq ft',
    floor: '1st Floor - Presidential Wing',
    view: 'Courtyard & Skyline View',
    status: 'available',
    rating: 5.0,
    reviewsCount: 56,
    featured: true,
    description: 'Designed for discerning travelers, Room 102 boasts a dedicated lounge seating area, custom brass accents, bespoke artwork, a spa-inspired bathroom, and automated mood lighting.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'High-Speed Wi-Fi (1 Gbps)',
      'Dual-Zone Climate Control AC',
      '65" OLED 4K Smart TV',
      'Royal King Feather Bed',
      'Italian Marble Bathroom',
      '24/7 Hot Water & Rain Shower',
      '24-Hour In-Room Dining',
      'Daily Dedicated Housekeeping',
      'Custom Walnut Wardrobe & Safe',
      'Complimentary Mineral Water & Espresso Bar',
      'Dedicated Workstation & Ergonomic Chair'
    ]
  },
  {
    id: 'room-103',
    roomNumber: '103',
    name: 'Executive Panorama Suite',
    category: 'Deluxe Luxury',
    price: 235,
    maxGuests: 3,
    adults: 2,
    children: 1,
    bedType: 'King Size Posturepedic Bed',
    size: '440 sq ft',
    floor: '1st Floor - Sunset Wing',
    view: 'Sunset & Garden Terrace View',
    status: 'available',
    rating: 4.8,
    reviewsCount: 39,
    featured: false,
    description: 'Immerse in breathtaking sunset vistas through wall-to-wall bay windows. Enjoy handcrafted timber decor, acoustic soundproofing, and a sumptuous standalone soaking bathtub.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'High-Speed Wi-Fi (1 Gbps)',
      'Air Conditioning with Air Purifier',
      '55" 4K Smart TV',
      'King Size Posturepedic Bed',
      'Designer En-Suite Bathroom',
      '24/7 Hot Water & Rain Shower',
      '24-Hour In-Room Dining',
      'Daily Housekeeping',
      'Spacious Wardrobe & Digital Safe',
      'Complimentary Mineral Water & Coffee Maker'
    ]
  },
  {
    id: 'room-104',
    roomNumber: '104',
    name: 'Emerald Deluxe Haven',
    category: 'Deluxe Luxury',
    price: 230,
    maxGuests: 3,
    adults: 2,
    children: 1,
    bedType: 'King Size Plush Bed',
    size: '430 sq ft',
    floor: '1st Floor - Quiet Wing',
    view: 'Botanical Courtyard View',
    status: 'available',
    rating: 4.9,
    reviewsCount: 42,
    featured: false,
    description: 'A serene sanctuary decorated in calming jewel tones, botanical wallpapers, and rich velvet seating. Features a walk-in wardrobe and luxury rainfall shower.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'High-Speed Wi-Fi (1 Gbps)',
      'Air Conditioning',
      '55" 4K Smart TV',
      'Comfortable King Bed',
      'Private Bathroom with Tub',
      'Hot Water 24/7',
      'Room Service',
      'Daily Housekeeping',
      'Wardrobe & Electronic Safe',
      'Complimentary Water & Tea Bar'
    ]
  },
  {
    id: 'room-105',
    roomNumber: '105',
    name: 'Heritage Luxury Chamber',
    category: 'Deluxe Luxury',
    price: 245,
    maxGuests: 3,
    adults: 2,
    children: 1,
    bedType: 'Grand King Bed with Canopy',
    size: '450 sq ft',
    floor: '1st Floor - Heritage Wing',
    view: 'Historic Lawn & Palm Garden',
    status: 'available',
    rating: 5.0,
    reviewsCount: 51,
    featured: false,
    description: 'Combining timeless architectural charm with modern bespoke luxury. Includes handcrafted teak furniture, plush canopy bed, and French doors leading to a private veranda.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'High-Speed Wi-Fi (1 Gbps)',
      'Climate Control AC',
      '60" Smart TV',
      'Canopy King Bed',
      'Marble Bath & Rain Shower',
      'Hot Water 24/7',
      '24h In-Room Dining',
      'Daily Housekeeping',
      'Teak Wardrobe & Digital Safe',
      'Artisan Coffee & Mineral Water'
    ]
  },

  // --- 5 PREMIUM ROOMS ---
  {
    id: 'room-201',
    roomNumber: '201',
    name: 'Urban Elegance Premium Room',
    category: 'Premium',
    price: 160,
    maxGuests: 2,
    adults: 2,
    children: 0,
    bedType: 'Queen Size Plush Bed',
    size: '320 sq ft',
    floor: '2nd Floor - City Wing',
    view: 'Vibrant City Skyline View',
    status: 'available',
    rating: 4.8,
    reviewsCount: 64,
    featured: true,
    description: 'Modern, streamlined, and brilliantly functional. Features contemporary aesthetic, warm oak textures, ergonomic work area, and an invigorating pressure rainfall shower.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Free High-Speed Wi-Fi',
      'Silent Inverter AC',
      '50" 4K Smart TV',
      'Queen Size Plush Mattress',
      'Modern Glass Enclosed Bathroom',
      '24/7 Hot Water Shower',
      'Room Service',
      'Daily Housekeeping',
      'Integrated Wardrobe',
      'Complimentary Bottled Water'
    ]
  },
  {
    id: 'room-202',
    roomNumber: '202',
    name: 'Serenity Premium Room',
    category: 'Premium',
    price: 165,
    maxGuests: 2,
    adults: 2,
    children: 0,
    bedType: 'Queen Size Memory Foam Bed',
    size: '330 sq ft',
    floor: '2nd Floor - Garden Wing',
    view: 'Lush Garden & Tree Canopy',
    status: 'available',
    rating: 4.9,
    reviewsCount: 52,
    featured: true,
    description: 'A peaceful retreat surrounded by lush tree canopies. Designed with soft neutral tones, premium linen bedding, double soundproof glass, and an ultra-comfortable reading nook.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80'
    ],
    amenities: [
      'Free High-Speed Wi-Fi',
      'Silent Inverter AC',
      '50" 4K Smart TV',
      'Memory Foam Queen Bed',
      'Spacious Private Bathroom',
      '24/7 Hot Water',
      'Room Service',
      'Daily Housekeeping',
      'Full-Length Mirror & Wardrobe',
      'Complimentary Bottled Water & Kettle'
    ]
  },
  {
    id: 'room-203',
    roomNumber: '203',
    name: 'Sunset Boulevard Premium',
    category: 'Premium',
    price: 160,
    maxGuests: 2,
    adults: 2,
    children: 0,
    bedType: 'Queen Size Orthopedic Bed',
    size: '320 sq ft',
    floor: '2nd Floor - West Wing',
    view: 'Sunset & Boulevard View',
    status: 'available',
    rating: 4.7,
    reviewsCount: 37,
    featured: false,
    description: 'Offering radiant evening golden hour sunlight, this room features tasteful brass fixtures, high-thread-count cotton linens, and a high-speed charging hub.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Free High-Speed Wi-Fi',
      'Air Conditioning',
      '50" Smart TV',
      'Queen Size Bed',
      'Private Shower Bathroom',
      'Hot Water 24/7',
      'Room Service',
      'Daily Housekeeping',
      'Wardrobe & Safe',
      'Complimentary Mineral Water'
    ]
  },
  {
    id: 'room-204',
    roomNumber: '204',
    name: 'Skyline Premium Studio',
    category: 'Premium',
    price: 170,
    maxGuests: 2,
    adults: 2,
    children: 0,
    bedType: 'Queen Size Luxury Bed',
    size: '340 sq ft',
    floor: '2nd Floor - Upper Corner',
    view: 'Dual Corner Skyline View',
    status: 'available',
    rating: 4.9,
    reviewsCount: 45,
    featured: false,
    description: 'A bright corner room with dual aspect windows presenting panoramic views of the city and surrounding skyline. Features a compact coffee station and lounge chair.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Free High-Speed Wi-Fi',
      'Silent Inverter AC',
      '55" 4K Smart TV',
      'Luxury Queen Bed',
      'Designer Bathroom with Shower',
      '24/7 Hot Water',
      'Room Service',
      'Daily Housekeeping',
      'Wardrobe & In-Room Safe',
      'Complimentary Coffee & Water'
    ]
  },
  {
    id: 'room-205',
    roomNumber: '205',
    name: 'Classic Comfort Premium',
    category: 'Premium',
    price: 155,
    maxGuests: 2,
    adults: 2,
    children: 0,
    bedType: 'Queen Size Plush Bed',
    size: '315 sq ft',
    floor: '2nd Floor - Center Wing',
    view: 'Courtyard Greenery View',
    status: 'available',
    rating: 4.8,
    reviewsCount: 41,
    featured: false,
    description: 'Warm and inviting, crafted for maximum coziness and restful sleep. Boasts ambient dimmable lighting, custom wooden headboard, and luxury organic toiletries.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Free High-Speed Wi-Fi',
      'Air Conditioning',
      '50" Smart TV',
      'Comfortable Queen Bed',
      'Private Clean Bathroom',
      '24/7 Hot Water',
      'Room Service',
      'Daily Housekeeping',
      'Wardrobe with Hangers',
      'Complimentary Mineral Water'
    ]
  }
];

// ==========================================================================
// RESTAURANT DIGITAL MENU
// ==========================================================================

export const INITIAL_MENU = [
  // Starters
  {
    id: 'menu-1',
    name: 'Crispy Truffle Arancini',
    category: 'Starters',
    description: 'Golden wild mushroom risotto croquettes infused with black summer truffle, served on a bed of roasted garlic aioli and shaved aged parmesan.',
    price: 16,
    diet: 'veg',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-2',
    name: 'Pan-Seared Scallops',
    category: 'Starters',
    description: 'Jumbo diver scallops seared with herb butter, paired with silky cauliflower mousseline and crispy prosciutto crisps.',
    price: 22,
    diet: 'non-veg',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-3',
    name: 'Burrata Caprese Rustica',
    category: 'Starters',
    description: 'Artisanal creamy burrata cheese, heirloom cherry tomatoes, cold-pressed basil oil, 12-year aged balsamic glaze, and toasted focaccia.',
    price: 18,
    diet: 'veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69106093?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-4',
    name: 'Smoked Salmon Carpaccio',
    category: 'Starters',
    description: 'Thinly sliced Scottish salmon, nonpareil capers, pickled red shallots, microgreens, and citrus lemon-dill dressing.',
    price: 20,
    diet: 'non-veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },

  // Main Course
  {
    id: 'menu-5',
    name: 'Welcome Signature Filet Mignon',
    category: 'Main Course',
    description: 'Prime 8oz grass-fed beef tenderloin, truffle potato puree, grilled asparagus spears, and a rich rosemary red wine demi-glace.',
    price: 44,
    diet: 'non-veg',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-6',
    name: 'Pan-Roasted Chilean Sea Bass',
    category: 'Main Course',
    description: 'Sustainably caught sea bass fillet, saffron risotto, braised baby fennel, and citrus beurre blanc sauce.',
    price: 42,
    diet: 'non-veg',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-7',
    name: 'Handmade Wild Porcini Tagliatelle',
    category: 'Main Course',
    description: 'Fresh egg pasta ribbons tossed in a rich forest porcini mushroom cream, thyme butter, and freshly grated 24-month Parmigiano-Reggiano.',
    price: 28,
    diet: 'veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-8',
    name: 'Herb-Crusted Rack of Lamb',
    category: 'Main Course',
    description: 'Oven-roasted lamb cutlets coated in Dijon herbs, served with fondue potatoes, glazed baby carrots, and mint jus.',
    price: 46,
    diet: 'non-veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },

  // Desserts
  {
    id: 'menu-9',
    name: 'Grand Valrhona Chocolate Lava Dome',
    category: 'Desserts',
    description: 'Molten dark chocolate cake featuring a flowing ganache center, Madagascar vanilla bean gelato, and gold leaf flakes.',
    price: 15,
    diet: 'veg',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-10',
    name: 'Artisan Venetian Tiramisu',
    category: 'Desserts',
    description: 'Espresso-soaked Savoiardi ladyfingers, velvety mascarpone cream, dark cocoa powder dusting, and Amaretto liqueur hint.',
    price: 14,
    diet: 'veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-11',
    name: 'Caramelized Bourbon Creme Brulee',
    category: 'Desserts',
    description: 'Silky rich vanilla custard beneath a brittle blow-torched caramel crust, accompanied by fresh macerated raspberries.',
    price: 13,
    diet: 'veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80'
  },

  // Beverages
  {
    id: 'menu-12',
    name: 'Signature Welcome Gold Elixir',
    category: 'Beverages',
    description: 'Sparkling elderflower cordial, pressed yuzu juice, rosemary syrup, botanical tonic, and edible 24k gold shimmer.',
    price: 12,
    diet: 'veg',
    isSpecial: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-13',
    name: 'Sommelier Selected Reserve Red',
    category: 'Beverages',
    description: 'Full-bodied Cabernet Sauvignon vintage with notes of dark blackberry, oak cedar, and subtle vanilla spices (Glass / Bottle).',
    price: 18,
    diet: 'veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'menu-14',
    name: 'Single Origin Cold Drip Espresso',
    category: 'Beverages',
    description: 'Slow 12-hour cold-brewed Ethiopian Yirgacheffe coffee served over crystal clear ice spheres with organic oat milk option.',
    price: 8,
    diet: 'veg',
    isSpecial: false,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
  }
];

// ==========================================================================
// SAMPLE SEED BOOKINGS (Demonstrating realistic booking calendar)
// ==========================================================================

export const INITIAL_BOOKINGS = [
  {
    id: 'WH-2026-1049',
    guestId: 'guest-1',
    guestName: 'Arthur Pendelton',
    guestEmail: 'arthur.p@example.com',
    guestPhone: '+1 (555) 234-5678',
    guestAddress: '450 Lexington Ave, New York, NY',
    roomId: 'room-101',
    roomNumber: '101',
    roomCategory: 'Deluxe Luxury',
    roomName: 'Grand Royal Deluxe Suite',
    checkIn: '2026-09-02',
    checkOut: '2026-09-05',
    nights: 3,
    adults: 2,
    children: 0,
    pricePerNight: 240,
    roomTotal: 720,
    tax: 86.40,
    addOnsTotal: 50,
    addOns: ['Airport Luxury Chauffeur Transfer', 'Champagne Welcome Package'],
    totalAmount: 856.40,
    paymentMethod: 'online',
    paymentStatus: 'paid', // paid | pending_hotel
    status: 'confirmed', // confirmed | checked_in | checked_out | cancelled
    specialRequests: 'High floor preferred, arriving around 3 PM.',
    createdAt: '2026-08-28T14:30:00Z'
  },
  {
    id: 'WH-2026-1082',
    guestId: 'guest-2',
    guestName: 'Elena Rostova',
    guestEmail: 'elena.rostova@example.com',
    guestPhone: '+1 (555) 876-5432',
    guestAddress: '12 Ocean Drive, Miami, FL',
    roomId: 'room-102',
    roomNumber: '102',
    roomCategory: 'Deluxe Luxury',
    roomName: 'Presidential Deluxe Suite',
    checkIn: '2026-09-03',
    checkOut: '2026-09-07',
    nights: 4,
    adults: 2,
    children: 1,
    pricePerNight: 250,
    roomTotal: 1000,
    tax: 120.00,
    addOnsTotal: 30,
    addOns: ['Daily Gourmet Breakfast Buffet'],
    totalAmount: 1150.00,
    paymentMethod: 'hotel',
    paymentStatus: 'pending_hotel',
    status: 'confirmed',
    specialRequests: 'Celebrating wedding anniversary. Extra pillows please.',
    createdAt: '2026-08-29T10:15:00Z'
  },
  {
    id: 'WH-2026-1120',
    guestId: 'guest-3',
    guestName: 'Marcus Vance',
    guestEmail: 'marcus.vance@example.com',
    guestPhone: '+1 (555) 432-1098',
    guestAddress: '88 Tech Boulevard, Austin, TX',
    roomId: 'room-201',
    roomNumber: '201',
    roomCategory: 'Premium',
    roomName: 'Urban Elegance Premium Room',
    checkIn: '2026-08-31',
    checkOut: '2026-09-02',
    nights: 2,
    adults: 1,
    children: 0,
    pricePerNight: 160,
    roomTotal: 320,
    tax: 38.40,
    addOnsTotal: 0,
    addOns: [],
    totalAmount: 358.40,
    paymentMethod: 'online',
    paymentStatus: 'paid',
    status: 'checked_in',
    specialRequests: 'Quiet room for business calls.',
    createdAt: '2026-08-25T09:00:00Z'
  }
];

// ==========================================================================
// TESTIMONIALS & REVIEWS
// ==========================================================================

export const INITIAL_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Dr. Evelyn Sterling',
    location: 'London, UK',
    rating: 5,
    roomStayed: 'Deluxe Luxury Room 101',
    date: 'August 2026',
    comment: 'Welcome Hotel exceeded every expectation. The room was impeccably clean, the bed was dreamily comfortable, and the restaurant dining was on par with Michelin star venues. Exceptional hospitality!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    name: 'James & Sarah Thornton',
    location: 'Sydney, Australia',
    rating: 5,
    roomStayed: 'Deluxe Luxury Room 102',
    date: 'August 2026',
    comment: 'We stayed for our anniversary and were greeted with warm smiles and a lovely champagne setup. The booking process was so smooth and easy. We will certainly return whenever we are in town.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    name: 'Michael Chang',
    location: 'San Francisco, USA',
    rating: 5,
    roomStayed: 'Premium Room 201',
    date: 'July 2026',
    comment: 'The fastest Wi-Fi I have ever experienced in a hotel, spotless aesthetic, quiet rooms, and incredible room service. The 10-room boutique exclusivity makes you feel genuinely valued as a guest.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-4',
    name: 'Sofia Al-Mansoor',
    location: 'Dubai, UAE',
    rating: 5,
    roomStayed: 'Deluxe Luxury Room 105',
    date: 'July 2026',
    comment: 'A true five-star boutique sanctuary. The attention to detail from the concierge to the linen quality is unmatched. The digital booking and instant check-in was effortless.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  }
];

// ==========================================================================
// GALLERY PHOTOGRAPHS
// ==========================================================================

export const INITIAL_GALLERY = [
  {
    id: 'gal-1',
    title: 'Grand Hotel Facade & Entrance',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'The illuminated grand exterior of Welcome Hotel welcoming guests evening and day.'
  },
  {
    id: 'gal-2',
    title: 'Deluxe Luxury Suite 101',
    category: 'Deluxe Luxury Rooms',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description: 'Master king bed with bespoke furnishings and floor-to-ceiling garden windows.'
  },
  {
    id: 'gal-3',
    title: 'The Welcome Fine Dining Room',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    description: 'Romantic ambient candlelit dining room serving gourmet breakfast, lunch, and dinner.'
  },
  {
    id: 'gal-4',
    title: 'Premium Room 201 City View',
    category: 'Premium Rooms',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern streamlined aesthetic with plush queen bedding and workstation.'
  },
  {
    id: 'gal-5',
    title: 'Italian Marble Ensuite Bathroom',
    category: 'Hotel Interiors',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    description: 'Spa soaking bathtub with rainfall brass fixtures and luxury organic toiletries.'
  },
  {
    id: 'gal-6',
    title: 'Private Balcony Veranda',
    category: 'Deluxe Luxury Rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    description: 'Step outside onto your personal private terrace overlooking the gardens.'
  },
  {
    id: 'gal-7',
    title: 'Signature Gourmet Cuisine',
    category: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
    description: 'Master chef prepared prime filet mignon and seasonal accompaniments.'
  },
  {
    id: 'gal-8',
    title: 'Serene Lounge & Reception',
    category: 'Hotel Interiors',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    description: '24/7 Concierge lounge and express welcoming check-in desk.'
  },
  {
    id: 'gal-9',
    title: 'Skyline Premium Suite 204',
    category: 'Premium Rooms',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description: 'Corner premium room with dual skyline panorama and curated art decor.'
  }
];

// ==========================================================================
// HOTEL CMS & CONTACT CONFIGURATION
// ==========================================================================

export const INITIAL_HOTEL_INFO = {
  name: 'WELCOME HOTEL',
  tagline: 'Comfort, Luxury & Hospitality',
  headline: 'Experience a comfortable and memorable stay at Welcome Hotel. Explore our elegant rooms, enjoy delicious dining, and experience warm hospitality.',
  address: '742 Grand Boulevard, Luxury Promenade, Metro City, NY 10021',
  phone: '+1 (800) 555-HOTEL / +1 (212) 555-0199',
  email: 'concierge@welcomehotel.com',
  reservationEmail: 'bookings@welcomehotel.com',
  checkInTime: '3:00 PM',
  checkOutTime: '11:00 AM',
  taxRate: 0.12, // 12% hotel tax
  googleMapsUrl: 'https://maps.google.com/?q=Luxury+Hotel+New+York',
  promoCodes: [
    { code: 'WELCOME10', discountPercent: 10, description: '10% Off Your Entire Stay' },
    { code: 'LUXURY50', discountFixed: 50, description: '$50 Instant Luxury Voucher' }
  ]
};

// ==========================================================================
// DEFAULT USERS
// ==========================================================================

export const INITIAL_USERS = [
  {
    id: 'guest-demo',
    name: 'Sarah Jenkins',
    email: 'guest@welcomehotel.com',
    phone: '+1 (555) 789-0123',
    password: 'password123',
    role: 'guest',
    address: '104 Lincoln Plaza, Chicago, IL',
    createdAt: '2026-08-01'
  },
  {
    id: 'admin-demo',
    name: 'Hotel General Manager',
    email: 'admin@welcomehotel.com',
    phone: '+1 (800) 555-0199',
    password: 'adminpassword',
    role: 'admin',
    address: 'Welcome Hotel Executive Office',
    createdAt: '2026-01-01'
  }
];
