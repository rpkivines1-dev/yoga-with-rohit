/**
 * Class Scheduling & Student Booking Engine
 * Yoga With Rohit
 *
 * Core service for:
 * 1. Classes Table & CRUD (Create, Edit, Reschedule, Cancel, Duplicate, Delete)
 * 2. 12-Class Monthly Package ($50/mo) Generator on Mon, Wed, Fri
 * 3. Daily Class ($5/class) Booking
 * 4. Free Demo ($0) 1-time booking logic
 * 5. Student Bookings & Access Gatekeeper
 * 6. Payment Verification (Stripe & PayPal simulation)
 * 7. Automated Reminders (24h, 1h, 15m)
 */

import { ZoomGoogleMeetService } from './zoomGoogleMeetService';

const STORAGE_KEY_CLASSES = 'ywr_scheduled_classes';
const STORAGE_KEY_BOOKINGS = 'ywr_student_bookings';
const STORAGE_KEY_PAYMENTS = 'ywr_payment_transactions';
const STORAGE_KEY_REMINDERS = 'ywr_class_reminders';

// Default initial schedule for Traditional Hatha (Morning) and Ashtanga Vinyasa (Evening) on Monday, Wednesday, Friday
const INITIAL_CLASSES = [
  // Wednesday Classes (Today)
  {
    id: 'CLS-101',
    programId: 'traditional-hatha',
    programName: 'Traditional Hatha Yoga',
    batchId: 'hatha-b1',
    batchTitle: 'Batch 1 — 6:30 AM EST',
    days: 'Monday, Wednesday, Friday',
    title: 'Traditional Hatha Morning Flow & Pranayama',
    description: 'Classical asanas, sun salutations, spinal alignment, and pranayama breathwork guided from Rishikesh.',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '06:30',
    endTime: '07:30',
    timezone: 'America/New_York',
    platform: 'Zoom',
    meetingId: '9827361920',
    joinUrl: 'https://zoom.us/j/9827361920?pwd=ROHIT2026',
    hostUrl: 'https://zoom.us/s/9827361920?zak=admin_host_token_rohit',
    passcode: 'ROHIT2026',
    status: 'Upcoming',
    capacity: 25,
    enrolledCount: 14,
    joiningWindowMinutes: 15,
    createdAt: '2026-08-30T00:00:00Z',
  },
  {
    id: 'CLS-102',
    programId: 'traditional-hatha',
    programName: 'Traditional Hatha Yoga',
    batchId: 'hatha-b2',
    batchTitle: 'Batch 2 — 7:45 AM EST',
    days: 'Monday, Wednesday, Friday',
    title: 'Hatha Alignment & Gentle Spine Mobility',
    description: 'Postural therapy, hip openers, and restorative breath retention for energy and flexibility.',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '07:45',
    endTime: '08:45',
    timezone: 'America/New_York',
    platform: 'Google Meet',
    meetingId: 'ywr-hath-om',
    joinUrl: 'https://meet.google.com/ywr-hath-om',
    hostUrl: 'https://meet.google.com/ywr-hath-om',
    passcode: 'No Passcode (Google Login)',
    status: 'Upcoming',
    capacity: 25,
    enrolledCount: 18,
    joiningWindowMinutes: 15,
    createdAt: '2026-08-30T00:00:00Z',
  },
  {
    id: 'CLS-103',
    programId: 'traditional-hatha',
    programName: 'Traditional Hatha Yoga',
    batchId: 'hatha-b3',
    batchTitle: 'Batch 3 — 9:00 AM EST',
    days: 'Monday, Wednesday, Friday',
    title: 'Hatha Yoga Complete Holistic Practice',
    description: 'Comprehensive classical session combining standing postures, forward bends, and Yoga Nidra relaxation.',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '09:00',
    endTime: '10:00',
    timezone: 'America/New_York',
    platform: 'Zoom',
    meetingId: '9845127839',
    joinUrl: 'https://zoom.us/j/9845127839?pwd=ROHIT2026',
    hostUrl: 'https://zoom.us/s/9845127839?zak=admin_host_token_rohit',
    passcode: 'ROHIT2026',
    status: 'Upcoming',
    capacity: 25,
    enrolledCount: 16,
    joiningWindowMinutes: 15,
    createdAt: '2026-08-30T00:00:00Z',
  },
  // Evening Ashtanga Vinyasa Batches
  {
    id: 'CLS-201',
    programId: 'ashtanga-vinyasa',
    programName: 'Ashtanga Vinyasa Primary Series',
    batchId: 'ashtanga-b1',
    batchTitle: 'Batch 1 — 7:30 PM EST',
    days: 'Monday, Wednesday, Friday',
    title: 'Ashtanga Primary Series: Sun Salutations & Standing',
    description: 'Dynamic synchronized breath and movement (Vinyasa), Surya Namaskar A & B, and core standing sequence.',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '19:30',
    endTime: '20:45',
    timezone: 'America/New_York',
    platform: 'Zoom',
    meetingId: '9876543210',
    joinUrl: 'https://zoom.us/j/9876543210?pwd=ROHIT2026',
    hostUrl: 'https://zoom.us/s/9876543210?zak=admin_host_token_rohit',
    passcode: 'ROHIT2026',
    status: 'Upcoming',
    capacity: 20,
    enrolledCount: 15,
    joiningWindowMinutes: 15,
    createdAt: '2026-08-30T00:00:00Z',
  },
  {
    id: 'CLS-202',
    programId: 'ashtanga-vinyasa',
    programName: 'Ashtanga Vinyasa Primary Series',
    batchId: 'ashtanga-b2',
    batchTitle: 'Batch 2 — 8:45 PM EST',
    days: 'Monday, Wednesday, Friday',
    title: 'Ashtanga Seated Postures & Bandhas',
    description: 'Deep forward folds, hip opening, internal energy locks (Mula & Uddiyana Bandhas), and focused Drishti.',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '20:45',
    endTime: '22:00',
    timezone: 'America/New_York',
    platform: 'Google Meet',
    meetingId: 'ywr-asht-flow',
    joinUrl: 'https://meet.google.com/ywr-asht-flow',
    hostUrl: 'https://meet.google.com/ywr-asht-flow',
    passcode: 'No Passcode (Google Login)',
    status: 'Upcoming',
    capacity: 20,
    enrolledCount: 11,
    joiningWindowMinutes: 15,
    createdAt: '2026-08-30T00:00:00Z',
  },
  {
    id: 'CLS-203',
    programId: 'ashtanga-vinyasa',
    programName: 'Ashtanga Vinyasa Primary Series',
    batchId: 'ashtanga-b3',
    batchTitle: 'Batch 3 — 10:00 PM EST',
    days: 'Monday, Wednesday, Friday',
    title: 'Ashtanga Finishing Sequence & Meditation',
    description: 'Inversions (Sarvangasana, Sirsasana), backbends, and grounding meditation before sleep.',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '22:00',
    endTime: '23:00',
    timezone: 'America/New_York',
    platform: 'Zoom',
    meetingId: '9833445566',
    joinUrl: 'https://zoom.us/j/9833445566?pwd=ROHIT2026',
    hostUrl: 'https://zoom.us/s/9833445566?zak=admin_host_token_rohit',
    passcode: 'ROHIT2026',
    status: 'Upcoming',
    capacity: 20,
    enrolledCount: 9,
    joiningWindowMinutes: 15,
    createdAt: '2026-08-30T00:00:00Z',
  },
  // Friday Class
  {
    id: 'CLS-104',
    programId: 'traditional-hatha',
    programName: 'Traditional Hatha Yoga',
    batchId: 'hatha-b1',
    batchTitle: 'Batch 1 — 6:30 AM EST',
    days: 'Monday, Wednesday, Friday',
    title: 'Traditional Hatha Morning Flow & Pranayama',
    description: 'Classical asanas, sun salutations, spinal alignment, and pranayama breathwork.',
    date: '2026-09-04',
    dayName: 'Friday',
    startTime: '06:30',
    endTime: '07:30',
    timezone: 'America/New_York',
    platform: 'Zoom',
    meetingId: '9827361920',
    joinUrl: 'https://zoom.us/j/9827361920?pwd=ROHIT2026',
    hostUrl: 'https://zoom.us/s/9827361920?zak=admin_host_token_rohit',
    passcode: 'ROHIT2026',
    status: 'Upcoming',
    capacity: 25,
    enrolledCount: 12,
    joiningWindowMinutes: 15,
    createdAt: '2026-08-30T00:00:00Z',
  },
];

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
    classId: 'CLS-101',
    classTitle: 'Traditional Hatha Morning Flow & Pranayama',
    packageType: 'Monthly Yoga Package ($50 / Month)',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '06:30',
    endTime: '07:30',
    status: 'Confirmed',
    platform: 'Zoom',
    meetingId: '9827361920',
    joinUrl: 'https://zoom.us/j/9827361920?pwd=ROHIT2026',
    passcode: 'ROHIT2026',
    amount: 50,
    paymentMethod: 'Stripe (Credit Card)',
    paymentStatus: 'Verified & Paid',
    isMonthlyMembership: true,
    totalClasses: 12,
    completedClasses: 0,
    remainingClasses: 12,
    scheduleDays: 'Monday, Wednesday, Friday (3 classes/week)',
    membershipStart: '2026-09-02',
    membershipExpiry: '2026-10-02',
    scheduledDates: [
      { date: '2026-09-02', day: 'Wednesday', classNumber: 1, status: 'Upcoming' },
      { date: '2026-09-04', day: 'Friday', classNumber: 2, status: 'Upcoming' },
      { date: '2026-09-07', day: 'Monday', classNumber: 3, status: 'Upcoming' },
      { date: '2026-09-09', day: 'Wednesday', classNumber: 4, status: 'Upcoming' },
      { date: '2026-09-11', day: 'Friday', classNumber: 5, status: 'Upcoming' },
      { date: '2026-09-14', day: 'Monday', classNumber: 6, status: 'Upcoming' },
      { date: '2026-09-16', day: 'Wednesday', classNumber: 7, status: 'Upcoming' },
      { date: '2026-09-18', day: 'Friday', classNumber: 8, status: 'Upcoming' },
      { date: '2026-09-21', day: 'Monday', classNumber: 9, status: 'Upcoming' },
      { date: '2026-09-23', day: 'Wednesday', classNumber: 10, status: 'Upcoming' },
      { date: '2026-09-25', day: 'Friday', classNumber: 11, status: 'Upcoming' },
      { date: '2026-09-28', day: 'Monday', classNumber: 12, status: 'Upcoming' },
    ],
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
    classId: 'CLS-201',
    classTitle: 'Ashtanga Primary Series: Sun Salutations & Standing',
    packageType: 'Daily Yoga Class ($5 / Class)',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '19:30',
    endTime: '20:45',
    status: 'Confirmed',
    platform: 'Zoom',
    meetingId: '9876543210',
    joinUrl: 'https://zoom.us/j/9876543210?pwd=ROHIT2026',
    passcode: 'ROHIT2026',
    amount: 5,
    paymentMethod: 'PayPal',
    paymentStatus: 'Verified & Paid',
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
    classId: 'CLS-102',
    classTitle: 'Hatha Alignment & Gentle Spine Mobility',
    packageType: 'Free Demo Yoga Class ($0)',
    date: '2026-09-02',
    dayName: 'Wednesday',
    startTime: '07:45',
    endTime: '08:45',
    status: 'Confirmed',
    platform: 'Google Meet',
    meetingId: 'ywr-hath-om',
    joinUrl: 'https://meet.google.com/ywr-hath-om',
    passcode: 'No Passcode (Google Login)',
    amount: 0,
    paymentMethod: 'Free Demo',
    paymentStatus: 'Approved ($0)',
    createdAt: '2026-09-02T06:00:00Z',
  },
];

export class ClassSchedulingService {
  // =========================================================================
  // 1. CLASSES TABLE MANAGEMENT
  // =========================================================================

  static getClasses() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CLASSES);
      return stored ? JSON.parse(stored) : INITIAL_CLASSES;
    } catch {
      return INITIAL_CLASSES;
    }
  }

  static saveClasses(classes) {
    try {
      localStorage.setItem(STORAGE_KEY_CLASSES, JSON.stringify(classes));
      window.dispatchEvent(new Event('ywr_classes_updated'));
    } catch (e) {
      console.error('Failed to save classes', e);
    }
  }

  /**
   * Create a new single or recurring class
   */
  static async createClass({
    programId,
    batchTitle,
    title,
    description,
    date,
    startTime,
    endTime,
    timezone = 'America/New_York',
    platform = 'Zoom',
    manualMeetingLink = '',
    zoomSettings = {},
    recurrence = 'none',
    recurringDays = ['Monday', 'Wednesday', 'Friday'],
    recurrenceEndDate = '',
    maxOccurrences = 12,
    capacity = 25,
  }) {
    const programName = programId === 'ashtanga-vinyasa' 
      ? 'Ashtanga Vinyasa Primary Series' 
      : 'Traditional Hatha Yoga';

    let meetingDetails = {};

    if (platform === 'Zoom') {
      meetingDetails = await ZoomGoogleMeetService.createZoomMeeting({
        title,
        date,
        startTime,
        passcode: zoomSettings.passcode,
        waitingRoom: zoomSettings.waitingRoom ?? true,
        participantVideo: zoomSettings.participantVideo ?? true,
        hostVideo: zoomSettings.hostVideo ?? true,
        joinBeforeHost: zoomSettings.joinBeforeHost ?? false,
        autoRecording: zoomSettings.autoRecording ?? 'cloud',
      });
    } else if (platform === 'Google Meet') {
      meetingDetails = await ZoomGoogleMeetService.createGoogleMeetEvent({
        title,
        description,
        date,
        startTime,
        endTime,
      });
    } else {
      const valid = ZoomGoogleMeetService.validateManualLink(manualMeetingLink);
      if (!valid.valid) {
        throw new Error(valid.error);
      }
      meetingDetails = {
        platform: 'Manual Link',
        meetingId: 'manual_' + Math.random().toString(36).substring(2, 8),
        joinUrl: valid.url,
        hostUrl: valid.url,
        passcode: 'See instructions in meeting link',
      };
    }

    const classesList = this.getClasses();
    const newClasses = [];

    const baseClass = {
      id: 'CLS-' + Date.now().toString().slice(-6),
      programId,
      programName,
      batchId: programId === 'ashtanga-vinyasa' ? 'ashtanga-b1' : 'hatha-b1',
      batchTitle: batchTitle || (programId === 'ashtanga-vinyasa' ? 'Batch 1 — 7:30 PM EST' : 'Batch 1 — 6:30 AM EST'),
      days: 'Monday, Wednesday, Friday',
      title,
      description: description || `Live online yoga session with master teacher Rohit from Rishikesh.`,
      date,
      dayName: this.getDayName(date),
      startTime,
      endTime: endTime || this.calculateEndTime(startTime, 60),
      timezone,
      platform: meetingDetails.platform,
      meetingId: meetingDetails.meetingId,
      joinUrl: meetingDetails.joinUrl,
      hostUrl: meetingDetails.hostUrl,
      passcode: meetingDetails.passcode,
      status: 'Upcoming',
      capacity: Number(capacity) || 25,
      enrolledCount: 0,
      joiningWindowMinutes: 15,
      createdAt: new Date().toISOString(),
    };

    if (recurrence === 'none') {
      newClasses.push(baseClass);
    } else {
      const dates = this.generateRecurringDates({
        startDate: date,
        recurrence,
        recurringDays,
        recurrenceEndDate,
        maxOccurrences: Number(maxOccurrences) || 12,
      });

      dates.forEach((d, idx) => {
        newClasses.push({
          ...baseClass,
          id: `CLS-${Date.now().toString().slice(-5)}-${idx + 1}`,
          date: d,
          dayName: this.getDayName(d),
          isRecurringInstance: true,
          recurrenceRule: recurrence,
        });
      });
    }

    const updated = [...newClasses, ...classesList];
    this.saveClasses(updated);

    return newClasses;
  }

  static updateClass(classId, updates) {
    const classesList = this.getClasses();
    const idx = classesList.findIndex((c) => c.id === classId);
    if (idx === -1) throw new Error('Class not found');

    const updatedClass = {
      ...classesList[idx],
      ...updates,
      dayName: updates.date ? this.getDayName(updates.date) : classesList[idx].dayName,
      updatedAt: new Date().toISOString(),
    };

    classesList[idx] = updatedClass;
    this.saveClasses(classesList);
    this.syncBookingsForClass(classId, updatedClass);

    return updatedClass;
  }

  static rescheduleClass(classId, newDate, newStartTime, newEndTime) {
    return this.updateClass(classId, {
      date: newDate,
      startTime: newStartTime,
      endTime: newEndTime || this.calculateEndTime(newStartTime, 60),
      status: 'Rescheduled',
      rescheduledAt: new Date().toISOString(),
    });
  }

  static cancelClass(classId, reason = 'Instructor emergency / scheduling update') {
    return this.updateClass(classId, {
      status: 'Cancelled',
      cancellationReason: reason,
      cancelledAt: new Date().toISOString(),
    });
  }

  static duplicateClass(classId) {
    const classesList = this.getClasses();
    const source = classesList.find((c) => c.id === classId);
    if (!source) throw new Error('Source class not found');

    const copy = {
      ...source,
      id: 'CLS-' + Date.now().toString().slice(-6),
      title: `${source.title} (Copy)`,
      enrolledCount: 0,
      status: 'Upcoming',
      createdAt: new Date().toISOString(),
    };

    const updated = [copy, ...classesList];
    this.saveClasses(updated);
    return copy;
  }

  static deleteClass(classId) {
    const classesList = this.getClasses();
    const filtered = classesList.filter((c) => c.id !== classId);
    this.saveClasses(filtered);
    return true;
  }

  // =========================================================================
  // 2. 12-CLASS MONTHLY PACKAGE ($50) & STUDENT BOOKINGS
  // =========================================================================

  static getBookings() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_BOOKINGS);
      return stored ? JSON.parse(stored) : INITIAL_BOOKINGS;
    } catch {
      return INITIAL_BOOKINGS;
    }
  }

  static saveBookings(bookings) {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
      window.dispatchEvent(new Event('ywr_bookings_updated'));
    } catch (e) {
      console.error('Failed to save bookings', e);
    }
  }

  /**
   * Helper to generate exact 12 Monday, Wednesday, Friday class dates
   */
  static generateMonthly12ClassesSchedule(startDateStr) {
    const dates = [];
    const current = new Date(startDateStr + 'T00:00:00');
    let safety = 0;

    while (dates.length < 12 && safety < 60) {
      safety++;
      const day = current.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
      if (day === 1 || day === 3 || day === 5) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        dates.push({
          date: current.toISOString().split('T')[0],
          day: dayNames[day],
          classNumber: dates.length + 1,
          status: 'Upcoming',
        });
      }
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }

  /**
   * Complete verified student booking flow with $50 Monthly (12 classes) & $5 Daily
   */
  static async createBooking({
    studentId = 'student-1',
    studentName,
    studentEmail,
    studentPhone,
    programId,
    batch,
    packageType,
    classDate,
    paymentMethod = 'Stripe (Credit Card)',
  }) {
    if (!studentName || !studentEmail) {
      throw new Error('Student name and email are required.');
    }

    const isFreeDemo = packageType.toLowerCase().includes('demo') || packageType.toLowerCase().includes('$0');
    const isMonthly = packageType.toLowerCase().includes('monthly') || packageType.toLowerCase().includes('50') || packageType.toLowerCase().includes('180');
    
    // NEW PRICING: $50 Monthly Package (12 classes) & $5 Daily Class
    const amount = isFreeDemo ? 0 : isMonthly ? 50 : 5;
    const cleanPackageTitle = isFreeDemo 
      ? 'Free Demo Yoga Class ($0)' 
      : isMonthly 
      ? 'Monthly Yoga Package ($50 / Month - 12 Classes)' 
      : 'Daily Yoga Class ($5 / Class)';

    // 1. Check free demo constraint (1 demo per account)
    if (isFreeDemo) {
      const existing = this.getBookings().filter(
        (b) => b.studentEmail === studentEmail && b.packageType.toLowerCase().includes('demo')
      );
      if (existing.length > 0) {
        throw new Error('A Free Demo class has already been booked for this email. Please select a Daily Class ($5) or Monthly Package ($50).');
      }
    }

    // 2. Match or find appropriate scheduled class
    const classes = this.getClasses();
    const targetDate = classDate || new Date().toISOString().split('T')[0];
    
    let matchedClass = classes.find(
      (c) => c.programId === programId && (c.date === targetDate || c.status === 'Upcoming')
    ) || classes[0];

    // Check capacity
    if (matchedClass && matchedClass.enrolledCount >= matchedClass.capacity) {
      throw new Error(`Class on ${targetDate} is currently at full capacity (${matchedClass.capacity} students). Please select another date or batch.`);
    }

    // 3. Payment Verification Simulation
    const paymentStatus = isFreeDemo ? 'Approved ($0)' : 'Verified & Paid';
    const txnRef = isFreeDemo ? 'demo_free' : 'txn_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6);

    // 4. Generate 12-Class Schedule for Monthly Package ($50)
    let scheduledDates = [];
    let expiryDateStr = null;

    if (isMonthly) {
      scheduledDates = this.generateMonthly12ClassesSchedule(targetDate);
      const lastClass = scheduledDates[scheduledDates.length - 1];
      expiryDateStr = lastClass ? lastClass.date : new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
    }

    const bookingId = 'BK-' + Date.now().toString().slice(-6);

    const newBooking = {
      id: bookingId,
      studentId,
      studentName,
      studentEmail,
      studentPhone,
      programId: programId || 'traditional-hatha',
      programName: programId === 'ashtanga-vinyasa' ? 'Ashtanga Vinyasa Primary Series' : 'Traditional Hatha Yoga',
      batch: batch || (programId === 'ashtanga-vinyasa' ? '7:30 PM EST' : '6:30 AM EST'),
      classId: matchedClass ? matchedClass.id : 'CLS-101',
      classTitle: matchedClass ? matchedClass.title : 'Live Yoga Session',
      packageType: cleanPackageTitle,
      date: targetDate,
      dayName: this.getDayName(targetDate),
      startTime: matchedClass ? matchedClass.startTime : (programId === 'ashtanga-vinyasa' ? '19:30' : '06:30'),
      endTime: matchedClass ? matchedClass.endTime : (programId === 'ashtanga-vinyasa' ? '20:45' : '07:30'),
      status: 'Confirmed',
      platform: matchedClass ? matchedClass.platform : 'Zoom',
      meetingId: matchedClass ? matchedClass.meetingId : '9827361920',
      joinUrl: matchedClass ? matchedClass.joinUrl : 'https://zoom.us/j/9827361920?pwd=ROHIT2026',
      passcode: matchedClass ? matchedClass.passcode : 'ROHIT2026',
      amount,
      paymentMethod,
      paymentStatus,
      transactionRef: txnRef,
      isMonthlyMembership: isMonthly,
      totalClasses: isMonthly ? 12 : 1,
      completedClasses: 0,
      remainingClasses: isMonthly ? 12 : 1,
      scheduleDays: isMonthly ? 'Monday, Wednesday, Friday (3 classes/week)' : 'Single Class Date',
      membershipStart: isMonthly ? targetDate : null,
      membershipExpiry: expiryDateStr,
      scheduledDates: isMonthly ? scheduledDates : [{ date: targetDate, day: this.getDayName(targetDate), classNumber: 1, status: 'Upcoming' }],
      createdAt: new Date().toISOString(),
    };

    // Save booking
    const bookings = this.getBookings();
    this.saveBookings([newBooking, ...bookings]);

    // Update class enrolled count
    if (matchedClass) {
      this.updateClass(matchedClass.id, {
        enrolledCount: (matchedClass.enrolledCount || 0) + 1,
      });
    }

    return newBooking;
  }

  /**
   * Mark a class as completed and decrement remaining counter
   */
  static completeClassSession(bookingId, classNumber = 1) {
    const bookings = this.getBookings();
    const idx = bookings.findIndex((b) => b.id === bookingId);
    if (idx === -1) return null;

    const b = bookings[idx];
    const completed = Math.min(b.totalClasses || 12, (b.completedClasses || 0) + 1);
    const remaining = Math.max(0, (b.totalClasses || 12) - completed);

    const updatedDates = (b.scheduledDates || []).map((sd) => {
      if (sd.classNumber === classNumber) {
        return { ...sd, status: 'Completed' };
      }
      return sd;
    });

    bookings[idx] = {
      ...b,
      completedClasses: completed,
      remainingClasses: remaining,
      scheduledDates: updatedDates,
      status: remaining === 0 ? 'Completed' : b.status,
      updatedAt: new Date().toISOString(),
    };

    this.saveBookings(bookings);
    return bookings[idx];
  }

  static updateBookingStatus(bookingId, status) {
    const bookings = this.getBookings();
    const idx = bookings.findIndex((b) => b.id === bookingId);
    if (idx === -1) throw new Error('Booking not found');

    bookings[idx].status = status;
    bookings[idx].updatedAt = new Date().toISOString();
    this.saveBookings(bookings);
    return bookings[idx];
  }

  static rescheduleBooking(bookingId, newDate, newBatch) {
    const bookings = this.getBookings();
    const idx = bookings.findIndex((b) => b.id === bookingId);
    if (idx === -1) throw new Error('Booking not found');

    const booking = bookings[idx];
    const classes = this.getClasses();
    const newClass = classes.find(
      (c) => c.programId === booking.programId && c.date === newDate
    ) || classes[0];

    bookings[idx] = {
      ...booking,
      date: newDate,
      dayName: this.getDayName(newDate),
      batch: newBatch || booking.batch,
      classId: newClass.id,
      classTitle: newClass.title,
      startTime: newClass.startTime,
      endTime: newClass.endTime,
      platform: newClass.platform,
      meetingId: newClass.meetingId,
      joinUrl: newClass.joinUrl,
      passcode: newClass.passcode,
      status: 'Confirmed',
      rescheduledAt: new Date().toISOString(),
    };

    this.saveBookings(bookings);
    return bookings[idx];
  }

  // =========================================================================
  // 3. JOIN LIVE CLASS ACCESS GATEKEEPER LOGIC
  // =========================================================================

  static checkJoinAuthorization({
    booking,
    customTime = null,
  }) {
    if (!booking) {
      return { canJoin: false, reason: 'No active booking record found.' };
    }

    if (booking.status !== 'Confirmed') {
      return {
        canJoin: false,
        reason: `Your booking status is currently "${booking.status}". Only Confirmed bookings can access the live classroom.`,
      };
    }

    if (booking.isMonthlyMembership && booking.remainingClasses <= 0) {
      return {
        canJoin: false,
        reason: 'You have completed all 12 classes in your monthly package. Please renew to continue.',
      };
    }

    const classes = this.getClasses();
    const classInfo = classes.find((c) => c.id === booking.classId);
    if (classInfo && classInfo.status === 'Cancelled') {
      return {
        canJoin: false,
        reason: 'This yoga class has been cancelled by instructor Rohit. You will be rescheduled or notified shortly.',
      };
    }

    const now = customTime || new Date();
    const [startH, startM] = (booking.startTime || '06:30').split(':').map(Number);
    const [endH, endM] = (booking.endTime || '07:30').split(':').map(Number);

    const classStartDate = new Date(booking.date + 'T00:00:00');
    classStartDate.setHours(startH, startM, 0, 0);

    const classEndDate = new Date(booking.date + 'T00:00:00');
    classEndDate.setHours(endH, endM, 0, 0);

    const windowOpenDate = new Date(classStartDate.getTime() - 15 * 60 * 1000);

    if (now < windowOpenDate) {
      const msDiff = windowOpenDate.getTime() - now.getTime();
      const secondsDiff = Math.ceil(msDiff / 1000);
      return {
        canJoin: false,
        reason: 'Class joining opens 15 minutes before the session starts.',
        isUpcoming: true,
        secondsUntilOpen: secondsDiff,
        opensAt: windowOpenDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    if (now > classEndDate) {
      return {
        canJoin: false,
        reason: 'This live session has already ended.',
        isEnded: true,
      };
    }

    return {
      canJoin: true,
      joinUrl: booking.joinUrl,
      platform: booking.platform,
      passcode: booking.passcode,
      meetingId: booking.meetingId,
    };
  }

  // =========================================================================
  // 4. AUTOMATED REMINDER NOTIFICATIONS (24h, 1h, 15m)
  // =========================================================================

  static triggerAutomatedReminders() {
    const bookings = this.getBookings().filter((b) => b.status === 'Confirmed');
    const reminders = [];

    bookings.forEach((b) => {
      reminders.push({
        id: 'REM-24H-' + b.id,
        bookingId: b.id,
        studentEmail: b.studentEmail,
        studentName: b.studentName,
        type: '24 Hours Before Class',
        title: `Reminder: ${b.programName} starts in 24 hours (${b.batch})`,
        sentAt: new Date().toISOString(),
        delivered: true,
      });

      reminders.push({
        id: 'REM-1H-' + b.id,
        bookingId: b.id,
        studentEmail: b.studentEmail,
        studentName: b.studentName,
        type: '1 Hour Before Class',
        title: `Get ready! Your live yoga session starts in 1 hour with Rohit`,
        sentAt: new Date().toISOString(),
        delivered: true,
      });

      reminders.push({
        id: 'REM-15M-' + b.id,
        bookingId: b.id,
        studentEmail: b.studentEmail,
        studentName: b.studentName,
        type: '15 Minutes Before Class',
        title: `Your Yoga Class Starts Soon! Click Join Live Class`,
        sentAt: new Date().toISOString(),
        delivered: true,
      });
    });

    localStorage.setItem(STORAGE_KEY_REMINDERS, JSON.stringify(reminders));
    return reminders;
  }

  // =========================================================================
  // 5. HELPER UTILITIES
  // =========================================================================

  static getDayName(dateStr) {
    if (!dateStr) return 'Monday';
    const d = new Date(dateStr + 'T00:00:00');
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[d.getDay()];
  }

  static calculateEndTime(startTime, durationMinutes = 60) {
    if (!startTime) return '07:30';
    const [h, m] = startTime.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m + durationMinutes, 0, 0);
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }

  static generateRecurringDates({
    startDate,
    recurrence,
    recurringDays = ['Monday', 'Wednesday', 'Friday'],
    recurrenceEndDate,
    maxOccurrences = 12,
  }) {
    const dates = [];
    const current = new Date(startDate + 'T00:00:00');
    const end = recurrenceEndDate ? new Date(recurrenceEndDate + 'T23:59:59') : null;

    const dayNameToIdx = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    const targetDayIndices = recurringDays.map((d) => dayNameToIdx[d]);

    let count = 0;
    let safetyCounter = 0;

    while (count < maxOccurrences && safetyCounter < 120) {
      safetyCounter++;
      if (end && current > end) break;

      let match = false;
      if (recurrence === 'daily') {
        match = true;
      } else if (recurrence === 'weekly') {
        if (targetDayIndices.includes(current.getDay())) {
          match = true;
        }
      } else if (recurrence === 'monthly') {
        match = true;
      }

      if (match) {
        dates.push(current.toISOString().split('T')[0]);
        count++;
      }

      if (recurrence === 'monthly') {
        current.setMonth(current.getMonth() + 1);
      } else {
        current.setDate(current.getDate() + 1);
      }
    }

    return dates;
  }

  static syncBookingsForClass(classId, updatedClass) {
    const bookings = this.getBookings();
    let hasChanges = false;

    const synced = bookings.map((b) => {
      if (b.classId === classId) {
        hasChanges = true;
        return {
          ...b,
          classTitle: updatedClass.title,
          date: updatedClass.date,
          dayName: this.getDayName(updatedClass.date),
          startTime: updatedClass.startTime,
          endTime: updatedClass.endTime,
          platform: updatedClass.platform,
          meetingId: updatedClass.meetingId,
          joinUrl: updatedClass.joinUrl,
          passcode: updatedClass.passcode,
          status: updatedClass.status === 'Cancelled' ? 'Cancelled' : b.status,
        };
      }
      return b;
    });

    if (hasChanges) {
      this.saveBookings(synced);
    }
  }
}
