import React, { createContext, useContext, useState, useEffect } from 'react';
import { YOGA_PROGRAMS, SUNDAY_FREE_YOGA, BRAND } from '../../data/yogaData';

const MobileClassContext = createContext();

const INITIAL_BOOKINGS = [
  {
    id: 'BK-1001',
    studentId: 'student-1',
    studentName: 'Sarah Jenkins',
    studentEmail: 'sarah.jenkins@example.com',
    studentPhone: '+1 (555) 234-5678',
    programId: 'traditional-hatha',
    programName: 'Traditional Hatha Yoga',
    batch: '6:30 AM EST',
    packageType: 'Monthly Yoga Package ($50/mo - 12 Classes)',
    date: '2026-09-02',
    status: 'Confirmed', // 'Confirmed', 'Completed', 'Pending', 'Cancelled'
    platform: 'Zoom',
    meetingLink: 'https://zoom.us/j/9876543210?pwd=YogaWithRohitLive',
    passcode: 'ROHIT2026',
    amount: 50,
    paymentMethod: 'Stripe (Credit Card)',
    totalClasses: 12,
    remainingClasses: 12,
    completedClasses: 0,
    scheduleDays: 'Monday, Wednesday, Friday',
    createdAt: '2026-09-01T14:20:00Z',
  },
  {
    id: 'BK-1002',
    studentId: 'student-1',
    studentName: 'Sarah Jenkins',
    studentEmail: 'sarah.jenkins@example.com',
    studentPhone: '+1 (555) 234-5678',
    programId: 'ashtanga-vinyasa',
    programName: 'Ashtanga Vinyasa Primary Series',
    batch: '7:30 PM EST',
    packageType: 'Daily Yoga Class ($5)',
    date: '2026-09-04',
    status: 'Confirmed',
    platform: 'Google Meet',
    meetingLink: 'https://meet.google.com/ywr-live-flow',
    passcode: 'ywr-meet',
    amount: 5,
    paymentMethod: 'PayPal',
    createdAt: '2026-09-02T04:15:00Z',
  },
  {
    id: 'BK-1003',
    studentId: 'student-2',
    studentName: 'David Miller',
    studentEmail: 'david.miller@example.com',
    studentPhone: '+1 (416) 987-6543',
    programId: 'traditional-hatha',
    programName: 'Traditional Hatha Yoga',
    batch: '7:45 AM EST',
    packageType: 'Free Demo Class ($0)',
    date: '2026-09-03',
    status: 'Confirmed',
    platform: 'Zoom',
    meetingLink: 'https://zoom.us/j/9876543210?pwd=YogaWithRohitLive',
    passcode: 'ROHIT2026',
    amount: 0,
    paymentMethod: 'Free Demo',
    createdAt: '2026-09-02T06:00:00Z',
  },
  {
    id: 'BK-1004',
    studentId: 'student-3',
    studentName: 'Elena Rossi',
    studentEmail: 'elena.rossi@example.com',
    studentPhone: '+44 20 7946 0912',
    programId: 'ashtanga-vinyasa',
    programName: 'Ashtanga Vinyasa Primary Series',
    batch: '8:45 PM EST',
    packageType: 'Monthly Yoga Package ($50/mo - 12 Classes)',
    date: '2026-09-03',
    status: 'Confirmed',
    platform: 'Zoom',
    meetingLink: 'https://zoom.us/j/9876543210?pwd=YogaWithRohitLive',
    passcode: 'ROHIT2026',
    amount: 50,
    paymentMethod: 'Stripe',
    totalClasses: 12,
    remainingClasses: 12,
    completedClasses: 0,
    createdAt: '2026-08-28T10:00:00Z',
  },
];

const INITIAL_PAYMENTS = [
  {
    id: 'PAY-8801',
    bookingId: 'BK-1001',
    studentName: 'Sarah Jenkins',
    packageName: 'Monthly Yoga Package ($50/mo - 12 Classes)',
    amount: 50,
    currency: 'USD',
    provider: 'Stripe',
    status: 'Successful',
    date: '2026-09-01',
    transactionRef: 'txn_stripe_9a8b7c6d5e',
  },
  {
    id: 'PAY-8802',
    bookingId: 'BK-1002',
    studentName: 'Sarah Jenkins',
    packageName: 'Daily Yoga Class ($5)',
    amount: 5,
    currency: 'USD',
    provider: 'PayPal',
    status: 'Successful',
    date: '2026-09-02',
    transactionRef: 'PAYPAL-5X7Y9Z1A3B',
  },
  {
    id: 'PAY-8803',
    bookingId: 'BK-1004',
    studentName: 'Elena Rossi',
    packageName: 'Monthly Yoga Package ($50/mo - 12 Classes)',
    amount: 50,
    currency: 'USD',
    provider: 'Stripe',
    status: 'Successful',
    date: '2026-08-28',
    transactionRef: 'txn_stripe_4f3e2d1c0b',
  },
];

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'Welcome to Yoga With Rohit! 🧘',
    message: 'Your live online yoga journey has begun. Explore Traditional Hatha & Ashtanga Vinyasa schedules on Mon, Wed, Fri.',
    date: 'Just now',
    type: 'welcome',
    read: false,
  },
  {
    id: 'notif-2',
    title: 'Class Reminder: Tomorrow 6:30 AM EST',
    message: 'Traditional Hatha Yoga with Rohit starts in 12 hours. Ensure your mat and Zoom are ready.',
    date: '2 hours ago',
    type: 'class_reminder',
    read: false,
  },
  {
    id: 'notif-3',
    title: 'Payment Receipt: $50.00 (Monthly Package)',
    message: 'Your payment via Stripe was verified successfully. 12 live classes scheduled on Mon, Wed, Fri.',
    date: 'Yesterday',
    type: 'payment',
    read: true,
  },
];

export function MobileClassProvider({ children }) {
  const [programs, setPrograms] = useState(() => {
    const saved = localStorage.getItem('ywr_mobile_programs');
    return saved ? JSON.parse(saved) : YOGA_PROGRAMS;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('ywr_mobile_bookings');
    return saved ? JSON.parse(saved) : INITIAL_BOOKINGS;
  });

  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem('ywr_mobile_payments');
    return saved ? JSON.parse(saved) : INITIAL_PAYMENTS;
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('ywr_mobile_notifs');
    return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
  });

  useEffect(() => {
    localStorage.setItem('ywr_mobile_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('ywr_mobile_payments', JSON.stringify(payments));
  }, [payments]);

  useEffect(() => {
    localStorage.setItem('ywr_mobile_notifs', JSON.stringify(notifications));
  }, [notifications]);

  // Book a new class or package
  const bookClass = (bookingData) => {
    const isFree = bookingData.packageType.includes('Free') || bookingData.packageType.includes('$0');
    const isMonthly = bookingData.packageType.includes('Monthly') || bookingData.packageType.includes('50');
    const amount = isFree ? 0 : (isMonthly ? 50 : 5);

    const newBookingId = `BK-${Date.now().toString().slice(-4)}`;
    const newBooking = {
      id: newBookingId,
      studentId: bookingData.studentId || 'student-1',
      studentName: bookingData.studentName || 'Sarah Jenkins',
      studentEmail: bookingData.studentEmail || 'sarah.jenkins@example.com',
      studentPhone: bookingData.studentPhone || '+1 (555) 234-5678',
      programId: bookingData.programId,
      programName: bookingData.programName,
      batch: bookingData.batch,
      packageType: bookingData.packageType,
      date: bookingData.date || new Date().toISOString().split('T')[0],
      status: 'Confirmed',
      platform: bookingData.platform || 'Zoom',
      meetingLink: 'https://zoom.us/j/9876543210?pwd=YogaWithRohitLive',
      passcode: 'ROHIT2026',
      amount,
      paymentMethod: isFree ? 'Free Demo' : (bookingData.paymentMethod || 'Stripe'),
      totalClasses: isMonthly ? 12 : 1,
      remainingClasses: isMonthly ? 12 : 1,
      completedClasses: 0,
      createdAt: new Date().toISOString(),
    };

    setBookings((prev) => [newBooking, ...prev]);

    // Record Payment
    if (!isFree) {
      const newPayment = {
        id: `PAY-${Date.now().toString().slice(-4)}`,
        bookingId: newBookingId,
        studentName: newBooking.studentName,
        packageName: newBooking.packageType,
        amount,
        currency: 'USD',
        provider: newBooking.paymentMethod,
        status: 'Successful',
        date: new Date().toISOString().split('T')[0],
        transactionRef: `txn_${Date.now()}`,
      };
      setPayments((prev) => [newPayment, ...prev]);
    }

    // Add Notification
    const newNotif = {
      id: `notif-${Date.now()}`,
      title: isFree ? 'Demo Class Confirmed! 🧘' : (isMonthly ? '12-Class Monthly Package Activated! 🌟' : 'Daily Class Booked! 🎉'),
      message: `Your booking for ${bookingData.programName} (${bookingData.batch}) on ${bookingData.date || 'upcoming session'} is confirmed.`,
      date: 'Just now',
      type: 'booking',
      read: false,
    };
    setNotifications((prev) => [newNotif, ...prev]);

    return { success: true, booking: newBooking };
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: 'Cancelled' } : b))
    );
  };

  const markNotificationRead = (notifId) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notifId ? { ...n, read: true } : n))
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <MobileClassContext.Provider
      value={{
        programs,
        sundayFree: SUNDAY_FREE_YOGA,
        bookings,
        payments,
        notifications,
        unreadCount: notifications.filter((n) => !n.read).length,
        bookClass,
        cancelBooking,
        markNotificationRead,
        clearAllNotifications,
      }}
    >
      {children}
    </MobileClassContext.Provider>
  );
}

export function useMobileClasses() {
  return useContext(MobileClassContext);
}
