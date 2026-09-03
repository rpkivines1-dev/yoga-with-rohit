// ==========================================================================
// WELCOME HOTEL - DATE UTILITIES & OVERLAP ENGINE
// ==========================================================================

/**
 * Format a Date object or ISO string to YYYY-MM-DD for input[type="date"]
 */
export const formatDateInput = (date) => {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Format date for human friendly display (e.g., "Mon, Sep 10, 2026")
 */
export const formatDisplayDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr + (dateStr.includes('T') ? '' : 'T00:00:00'));
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Format short date (e.g. "Sep 10")
 */
export const formatShortDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr + (dateStr.includes('T') ? '' : 'T00:00:00'));
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
};

/**
 * Calculate difference in nights between check-in and check-out
 */
export const calculateNights = (checkInStr, checkOutStr) => {
  if (!checkInStr || !checkOutStr) return 1;
  const start = new Date(checkInStr + 'T00:00:00');
  const end = new Date(checkOutStr + 'T00:00:00');
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
};

/**
 * Get Today's Date formatted as YYYY-MM-DD
 */
export const getTodayStr = () => {
  return formatDateInput(new Date());
};

/**
 * Get Tomorrow's Date formatted as YYYY-MM-DD
 */
export const getTomorrowStr = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formatDateInput(tomorrow);
};

/**
 * Add N days to a date string and return YYYY-MM-DD
 */
export const addDays = (dateStr, days) => {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return formatDateInput(d);
};

/**
 * Core Overlap Checker:
 * Determines if a given date interval [newCheckIn, newCheckOut] overlaps with an existing [existingCheckIn, existingCheckOut].
 * In hotel logic, check-out on Day X allows another guest to check-in on Day X.
 * Overlap occurs if: newCheckIn < existingCheckOut AND newCheckOut > existingCheckIn
 */
export const isDateRangeOverlapping = (start1, end1, start2, end2) => {
  const s1 = new Date(start1 + 'T00:00:00').getTime();
  const e1 = new Date(end1 + 'T00:00:00').getTime();
  const s2 = new Date(start2 + 'T00:00:00').getTime();
  const e2 = new Date(end2 + 'T00:00:00').getTime();

  return s1 < e2 && e1 > s2;
};

/**
 * Check if a physical room is available for the given date range against all active bookings
 */
export const isRoomAvailable = (roomId, checkIn, checkOut, bookings, excludeBookingId = null) => {
  if (!checkIn || !checkOut) return true;

  return !bookings.some((booking) => {
    // Ignore cancelled bookings and current editing booking
    if (booking.status === 'cancelled') return false;
    if (excludeBookingId && booking.id === excludeBookingId) return false;
    if (booking.roomId !== roomId) return false;

    return isDateRangeOverlapping(checkIn, checkOut, booking.checkIn, booking.checkOut);
  });
};

/**
 * Get all available rooms out of 10 for a specific date range & capacity
 */
export const getAvailableRooms = (rooms, bookings, checkIn, checkOut, guestsCount = 1, category = 'all') => {
  return rooms.filter((room) => {
    if (room.status === 'maintenance') return false;
    if (category !== 'all' && room.category !== category) return false;
    if (guestsCount && room.maxGuests < guestsCount) return false;

    if (checkIn && checkOut) {
      return isRoomAvailable(room.id, checkIn, checkOut, bookings);
    }
    return true;
  });
};

/**
 * Generate a list of dates for the Admin Timeline Calendar (e.g. Next 14 or 21 days from reference date)
 */
export const generateCalendarDays = (startDateStr, count = 14) => {
  const days = [];
  const start = new Date((startDateStr || getTodayStr()) + 'T00:00:00');
  
  for (let i = 0; i < count; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const dateStr = formatDateInput(d);
    days.push({
      dateStr,
      dayNum: d.getDate(),
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      monthName: d.toLocaleDateString('en-US', { month: 'short' }),
      isToday: dateStr === getTodayStr(),
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    });
  }
  return days;
};
