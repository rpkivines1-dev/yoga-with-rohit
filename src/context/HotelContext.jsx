// ==========================================================================
// WELCOME HOTEL - GLOBAL APPLICATION CONTEXT & STATE
// ==========================================================================

import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../data/storage';
import { getTodayStr, getTomorrowStr, calculateNights, isRoomAvailable } from '../utils/dateUtils';
import { generateBookingId, generateTableId } from '../utils/helpers';

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  // Initialize storage once
  useEffect(() => {
    storage.init();
  }, []);

  // Navigation State
  const [activePage, setActivePage] = useState('home'); // home | rooms | room-detail | restaurant | about | gallery | contact | booking | confirmation | guest-account | admin
  const [pageParams, setPageParams] = useState({});

  // Core Data Collections
  const [rooms, setRooms] = useState(() => storage.getRooms());
  const [bookings, setBookings] = useState(() => storage.getBookings());
  const [menu, setMenu] = useState(() => storage.getMenu());
  const [tableReservations, setTableReservations] = useState(() => storage.getTableReservations());
  const [reviews, setReviews] = useState(() => storage.getReviews());
  const [gallery, setGallery] = useState(() => storage.getGallery());
  const [hotelInfo, setHotelInfo] = useState(() => storage.getHotelInfo());
  const [currentUser, setCurrentUser] = useState(() => storage.getCurrentUser());

  // Room Details Focus
  const [selectedRoomDetail, setSelectedRoomDetail] = useState(null);

  // Lightbox State
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: ''
  });

  // Toast Notifications
  const [toasts, setToasts] = useState([]);

  // Active Booking Wizard State
  const [bookingWizard, setBookingWizard] = useState({
    step: 1, // 1: Dates & Guests, 2: Select Room, 3: Add-ons, 4: Guest Info, 5: Summary & Payment, 6: Confirmed
    checkIn: getTodayStr(),
    checkOut: getTomorrowStr(),
    adults: 2,
    children: 0,
    category: 'all', // 'all' | 'Deluxe Luxury' | 'Premium'
    selectedRoomId: null,
    selectedRoom: null,
    addOns: [],
    guestInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      specialRequests: ''
    },
    paymentMethod: 'online', // 'online' | 'hotel'
    promoCode: '',
    discount: 0,
    completedBooking: null
  });

  // Helper to trigger Toast alerts
  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Navigation Helper
  const navigateTo = (page, params = {}) => {
    setActivePage(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Room Detail View
  const openRoomDetail = (room) => {
    setSelectedRoomDetail(room);
    navigateTo('room-detail', { roomId: room.id });
  };

  // Lightbox handlers
  const openLightbox = (images, startIndex = 0, title = '') => {
    setLightbox({
      isOpen: true,
      images: Array.isArray(images) ? images : [images],
      currentIndex: startIndex,
      title
    });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, images: [], currentIndex: 0, title: '' });
  };

  const nextLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  // Auth Operations
  const loginUser = (email, password) => {
    const users = storage.getUsers();
    const found = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (found) {
      storage.setCurrentUser(found);
      setCurrentUser(found);
      addToast(`Welcome back, ${found.name}!`, 'success');
      return { success: true, user: found };
    }
    return { success: false, message: 'Invalid email address or password.' };
  };

  const registerUser = (userData) => {
    const users = storage.getUsers();
    if (users.some((u) => u.email.toLowerCase() === userData.email.toLowerCase())) {
      return { success: false, message: 'An account with this email already exists.' };
    }
    const newUser = {
      id: `user-${Date.now()}`,
      role: 'guest',
      createdAt: new Date().toISOString(),
      ...userData
    };
    storage.addUser(newUser);
    storage.setCurrentUser(newUser);
    setCurrentUser(newUser);
    addToast('Account created successfully! Welcome to Welcome Hotel.', 'success');
    return { success: true, user: newUser };
  };

  const quickDemoLogin = (role = 'guest') => {
    const users = storage.getUsers();
    const demoUser = users.find((u) => u.role === role);
    if (demoUser) {
      storage.setCurrentUser(demoUser);
      setCurrentUser(demoUser);
      addToast(`Logged in as ${role === 'admin' ? 'Admin Manager' : 'Demo Guest'}.`, 'success');
      if (role === 'admin') {
        navigateTo('admin');
      } else {
        navigateTo('guest-account');
      }
    }
  };

  const logout = () => {
    storage.logoutUser();
    setCurrentUser(null);
    addToast('Logged out successfully.', 'info');
    navigateTo('home');
  };

  // Rooms Management
  const updateRoom = (updatedRoom) => {
    const updated = storage.updateRoom(updatedRoom);
    setRooms(updated);
    addToast(`Room ${updatedRoom.roomNumber} updated successfully.`, 'success');
  };

  const addRoom = (newRoom) => {
    const updated = storage.addRoom(newRoom);
    setRooms(updated);
    addToast(`Room ${newRoom.roomNumber} added to inventory.`, 'success');
  };

  const deleteRoom = (roomId) => {
    const roomToDelete = rooms.find((r) => r.id === roomId);
    const updated = storage.deleteRoom(roomId);
    setRooms(updated);
    addToast(`Room ${roomToDelete ? roomToDelete.roomNumber : roomId} deleted.`, 'info');
  };

  // Bookings Management
  const createBooking = (bookingDetails) => {
    // Generate Booking
    const newBooking = {
      id: generateBookingId(),
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      ...bookingDetails
    };

    const updated = storage.addBooking(newBooking);
    setBookings(updated);

    // Update wizard completed booking and navigate to confirmation
    setBookingWizard((prev) => ({
      ...prev,
      completedBooking: newBooking
    }));

    addToast(`Booking confirmed! Reference #${newBooking.id}`, 'success');
    navigateTo('confirmation', { bookingId: newBooking.id });
    return newBooking;
  };

  const updateBookingStatus = (bookingId, newStatus) => {
    const booking = bookings.find((b) => b.id === bookingId);
    if (!booking) return;
    const updatedBooking = { ...booking, status: newStatus };
    const updatedList = storage.updateBooking(updatedBooking);
    setBookings(updatedList);
    addToast(`Booking ${bookingId} status changed to ${newStatus}.`, 'info');
  };

  const cancelBooking = (bookingId) => {
    const updated = storage.cancelBooking(bookingId);
    setBookings(updated);
    addToast(`Booking ${bookingId} has been cancelled and room released.`, 'warning');
  };

  // Table Reservations
  const createTableReservation = (details) => {
    const newRes = {
      id: generateTableId(),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      ...details
    };
    const updated = storage.addTableReservation(newRes);
    setTableReservations(updated);
    addToast(`Table reserved successfully! Confirmation #${newRes.id}`, 'success');
    return newRes;
  };

  // Restaurant Menu Management
  const addMenuItem = (item) => {
    const newItem = { id: `menu-${Date.now()}`, ...item };
    const updated = storage.addMenuItem(newItem);
    setMenu(updated);
    addToast(`Dish "${item.name}" added to menu.`, 'success');
  };

  const updateMenuItem = (item) => {
    const updated = storage.updateMenuItem(item);
    setMenu(updated);
    addToast(`Dish "${item.name}" updated.`, 'success');
  };

  const deleteMenuItem = (itemId) => {
    const updated = storage.deleteMenuItem(itemId);
    setMenu(updated);
    addToast('Menu item removed.', 'info');
  };

  // CMS Settings
  const updateHotelInfo = (newInfo) => {
    storage.saveHotelInfo(newInfo);
    setHotelInfo(newInfo);
    addToast('Hotel settings updated.', 'success');
  };

  // Reviews
  const submitReview = (newReview) => {
    const rev = {
      id: `rev-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      ...newReview
    };
    const updated = storage.addReview(rev);
    setReviews(updated);
    addToast('Thank you for your review!', 'success');
  };

  // Reset to Demo Data
  const resetDemoData = () => {
    storage.resetToDefaults();
    setRooms(storage.getRooms());
    setBookings(storage.getBookings());
    setMenu(storage.getMenu());
    setTableReservations(storage.getTableReservations());
    setReviews(storage.getReviews());
    setGallery(storage.getGallery());
    setHotelInfo(storage.getHotelInfo());
    setCurrentUser(storage.getCurrentUser());
    addToast('All data has been reset to factory defaults.', 'info');
  };

  // Wizard state updaters
  const updateWizard = (fields) => {
    setBookingWizard((prev) => ({
      ...prev,
      ...fields
    }));
  };

  const startBookingFlow = (preset = {}) => {
    setBookingWizard((prev) => ({
      ...prev,
      step: preset.step || 1,
      checkIn: preset.checkIn || prev.checkIn,
      checkOut: preset.checkOut || prev.checkOut,
      adults: preset.adults || prev.adults,
      children: preset.children !== undefined ? preset.children : prev.children,
      category: preset.category || 'all',
      selectedRoomId: preset.roomId || null,
      selectedRoom: preset.roomId ? rooms.find((r) => r.id === preset.roomId) : null,
      completedBooking: null
    }));
    navigateTo('booking');
  };

  // Auto populate user info if logged in
  useEffect(() => {
    if (currentUser) {
      setBookingWizard((prev) => ({
        ...prev,
        guestInfo: {
          ...prev.guestInfo,
          fullName: prev.guestInfo.fullName || currentUser.name || '',
          email: prev.guestInfo.email || currentUser.email || '',
          phone: prev.guestInfo.phone || currentUser.phone || '',
          address: prev.guestInfo.address || currentUser.address || ''
        }
      }));
    }
  }, [currentUser]);

  return (
    <HotelContext.Provider
      value={{
        activePage,
        pageParams,
        navigateTo,
        rooms,
        updateRoom,
        addRoom,
        deleteRoom,
        bookings,
        createBooking,
        updateBookingStatus,
        cancelBooking,
        menu,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        tableReservations,
        createTableReservation,
        reviews,
        submitReview,
        gallery,
        hotelInfo,
        updateHotelInfo,
        currentUser,
        loginUser,
        registerUser,
        quickDemoLogin,
        logout,
        selectedRoomDetail,
        openRoomDetail,
        lightbox,
        openLightbox,
        closeLightbox,
        nextLightboxImage,
        prevLightboxImage,
        toasts,
        addToast,
        removeToast,
        bookingWizard,
        updateWizard,
        startBookingFlow,
        resetDemoData
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => useContext(HotelContext);
