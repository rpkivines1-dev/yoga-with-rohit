// ==========================================================================
// WELCOME HOTEL - HELPER FUNCTIONS
// ==========================================================================

/**
 * Format currency with USD dollar sign and 2 decimal places
 */
export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') {
    amount = parseFloat(amount) || 0;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Generate a unique Booking ID (e.g., WH-2026-8941)
 */
export const generateBookingId = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const year = new Date().getFullYear();
  return `WH-${year}-${randomNum}`;
};

/**
 * Generate a unique Table Reservation ID (e.g., TR-5821)
 */
export const generateTableId = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `TR-${randomNum}`;
};

/**
 * Trigger print dialog for the invoice
 */
export const printInvoice = () => {
  window.print();
};

/**
 * Validate email address
 */
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Validate phone number
 */
export const isValidPhone = (phone) => {
  return phone && phone.replace(/\D/g, '').length >= 7;
};

/**
 * Available Add-ons for the booking step
 */
export const BOOKING_ADDONS = [
  {
    id: 'addon-breakfast',
    name: 'Daily Gourmet Breakfast Buffet',
    description: 'Unlimited hot breakfast dishes, fresh juice bar & artisan coffee per guest.',
    pricePerNight: 15,
    type: 'per_night_per_guest'
  },
  {
    id: 'addon-transfer',
    name: 'Luxury Airport Chauffeur Transfer',
    description: 'Private luxury sedan pickup/drop-off directly at terminal.',
    pricePerNight: 45,
    type: 'flat'
  },
  {
    id: 'addon-champagne',
    name: 'VIP Welcome Champagne & Truffle Box',
    description: 'Chilled bottle of French champagne and master chocolatier truffles waiting in room.',
    pricePerNight: 55,
    type: 'flat'
  },
  {
    id: 'addon-late-checkout',
    name: 'Guaranteed Late Check-Out (2:00 PM)',
    description: 'Relax longer on departure day with guaranteed extended checkout.',
    pricePerNight: 35,
    type: 'flat'
  }
];
