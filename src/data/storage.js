// ==========================================================================
// WELCOME HOTEL - LOCAL STORAGE PERSISTENCE ENGINE
// ==========================================================================

import {
  INITIAL_ROOMS,
  INITIAL_MENU,
  INITIAL_BOOKINGS,
  INITIAL_REVIEWS,
  INITIAL_GALLERY,
  INITIAL_HOTEL_INFO,
  INITIAL_USERS
} from './initialData';

const KEYS = {
  ROOMS: 'welcome_hotel_rooms_v1',
  MENU: 'welcome_hotel_menu_v1',
  BOOKINGS: 'welcome_hotel_bookings_v1',
  TABLE_RESERVATIONS: 'welcome_hotel_tables_v1',
  REVIEWS: 'welcome_hotel_reviews_v1',
  GALLERY: 'welcome_hotel_gallery_v1',
  HOTEL_INFO: 'welcome_hotel_info_v1',
  USERS: 'welcome_hotel_users_v1',
  CURRENT_USER: 'welcome_hotel_current_user_v1'
};

/**
 * Helper to safely get data from localStorage or fallback
 */
const getItem = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error(`Error reading ${key} from storage:`, e);
    return fallback;
  }
};

/**
 * Helper to safely save data to localStorage
 */
const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to storage:`, e);
  }
};

export const storage = {
  // --- Initialize with defaults if empty ---
  init() {
    if (!localStorage.getItem(KEYS.ROOMS)) {
      setItem(KEYS.ROOMS, INITIAL_ROOMS);
    }
    if (!localStorage.getItem(KEYS.MENU)) {
      setItem(KEYS.MENU, INITIAL_MENU);
    }
    if (!localStorage.getItem(KEYS.BOOKINGS)) {
      setItem(KEYS.BOOKINGS, INITIAL_BOOKINGS);
    }
    if (!localStorage.getItem(KEYS.TABLE_RESERVATIONS)) {
      setItem(KEYS.TABLE_RESERVATIONS, [
        {
          id: 'TR-1021',
          name: 'Victoria Vance',
          email: 'victoria@example.com',
          phone: '+1 (555) 345-9876',
          date: '2026-09-02',
          time: '7:30 PM',
          guests: 2,
          seating: 'Terrace Fountain View',
          requests: 'Anniversary celebration',
          status: 'confirmed'
        }
      ]);
    }
    if (!localStorage.getItem(KEYS.REVIEWS)) {
      setItem(KEYS.REVIEWS, INITIAL_REVIEWS);
    }
    if (!localStorage.getItem(KEYS.GALLERY)) {
      setItem(KEYS.GALLERY, INITIAL_GALLERY);
    }
    if (!localStorage.getItem(KEYS.HOTEL_INFO)) {
      setItem(KEYS.HOTEL_INFO, INITIAL_HOTEL_INFO);
    }
    if (!localStorage.getItem(KEYS.USERS)) {
      setItem(KEYS.USERS, INITIAL_USERS);
    }
  },

  // --- Reset all data to factory demo defaults ---
  resetToDefaults() {
    localStorage.removeItem(KEYS.ROOMS);
    localStorage.removeItem(KEYS.MENU);
    localStorage.removeItem(KEYS.BOOKINGS);
    localStorage.removeItem(KEYS.TABLE_RESERVATIONS);
    localStorage.removeItem(KEYS.REVIEWS);
    localStorage.removeItem(KEYS.GALLERY);
    localStorage.removeItem(KEYS.HOTEL_INFO);
    localStorage.removeItem(KEYS.USERS);
    localStorage.removeItem(KEYS.CURRENT_USER);
    this.init();
  },

  // --- Rooms CRUD (10 rooms) ---
  getRooms() {
    return getItem(KEYS.ROOMS, INITIAL_ROOMS);
  },
  saveRooms(rooms) {
    setItem(KEYS.ROOMS, rooms);
  },
  updateRoom(updatedRoom) {
    const rooms = this.getRooms();
    const index = rooms.findIndex((r) => r.id === updatedRoom.id);
    if (index !== -1) {
      rooms[index] = { ...rooms[index], ...updatedRoom };
      this.saveRooms(rooms);
    }
    return rooms;
  },
  addRoom(newRoom) {
    const rooms = this.getRooms();
    rooms.push(newRoom);
    this.saveRooms(rooms);
    return rooms;
  },
  deleteRoom(roomId) {
    const rooms = this.getRooms().filter((r) => r.id !== roomId);
    this.saveRooms(rooms);
    return rooms;
  },

  // --- Bookings CRUD ---
  getBookings() {
    return getItem(KEYS.BOOKINGS, INITIAL_BOOKINGS);
  },
  saveBookings(bookings) {
    setItem(KEYS.BOOKINGS, bookings);
  },
  addBooking(booking) {
    const bookings = this.getBookings();
    bookings.unshift(booking);
    this.saveBookings(bookings);
    return bookings;
  },
  updateBooking(updatedBooking) {
    const bookings = this.getBookings();
    const index = bookings.findIndex((b) => b.id === updatedBooking.id);
    if (index !== -1) {
      bookings[index] = { ...bookings[index], ...updatedBooking };
      this.saveBookings(bookings);
    }
    return bookings;
  },
  cancelBooking(bookingId) {
    const bookings = this.getBookings();
    const index = bookings.findIndex((b) => b.id === bookingId);
    if (index !== -1) {
      bookings[index].status = 'cancelled';
      this.saveBookings(bookings);
    }
    return bookings;
  },

  // --- Table Reservations ---
  getTableReservations() {
    return getItem(KEYS.TABLE_RESERVATIONS, []);
  },
  addTableReservation(res) {
    const reservations = this.getTableReservations();
    reservations.unshift(res);
    setItem(KEYS.TABLE_RESERVATIONS, reservations);
    return reservations;
  },

  // --- Restaurant Menu CRUD ---
  getMenu() {
    return getItem(KEYS.MENU, INITIAL_MENU);
  },
  saveMenu(menu) {
    setItem(KEYS.MENU, menu);
  },
  addMenuItem(item) {
    const menu = this.getMenu();
    menu.push(item);
    this.saveMenu(menu);
    return menu;
  },
  updateMenuItem(updatedItem) {
    const menu = this.getMenu();
    const index = menu.findIndex((m) => m.id === updatedItem.id);
    if (index !== -1) {
      menu[index] = { ...menu[index], ...updatedItem };
      this.saveMenu(menu);
    }
    return menu;
  },
  deleteMenuItem(itemId) {
    const menu = this.getMenu().filter((m) => m.id !== itemId);
    this.saveMenu(menu);
    return menu;
  },

  // --- Reviews ---
  getReviews() {
    return getItem(KEYS.REVIEWS, INITIAL_REVIEWS);
  },
  addReview(review) {
    const reviews = this.getReviews();
    reviews.unshift(review);
    setItem(KEYS.REVIEWS, reviews);
    return reviews;
  },

  // --- Gallery ---
  getGallery() {
    return getItem(KEYS.GALLERY, INITIAL_GALLERY);
  },
  saveGallery(gallery) {
    setItem(KEYS.GALLERY, gallery);
  },

  // --- Hotel Info CMS ---
  getHotelInfo() {
    return getItem(KEYS.HOTEL_INFO, INITIAL_HOTEL_INFO);
  },
  saveHotelInfo(info) {
    setItem(KEYS.HOTEL_INFO, info);
  },

  // --- Users & Auth ---
  getUsers() {
    return getItem(KEYS.USERS, INITIAL_USERS);
  },
  getCurrentUser() {
    return getItem(KEYS.CURRENT_USER, null);
  },
  setCurrentUser(user) {
    setItem(KEYS.CURRENT_USER, user);
  },
  logoutUser() {
    localStorage.removeItem(KEYS.CURRENT_USER);
  },
  addUser(user) {
    const users = this.getUsers();
    users.push(user);
    setItem(KEYS.USERS, users);
    return users;
  }
};
