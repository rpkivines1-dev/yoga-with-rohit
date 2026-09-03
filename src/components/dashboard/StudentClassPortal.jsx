import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Video, Sparkles, CheckCircle2, ShieldCheck, Sun, Flame, Award, ArrowRight, User, PlusCircle, CreditCard, Bell, Layers, Check } from 'lucide-react';
import { ClassSchedulingService } from '../../services/classSchedulingService';
import JoinClassGatekeeper from '../common/JoinClassGatekeeper';

export default function StudentClassPortal({ isOpen, onClose, onOpenBooking, onOpenLiveRoom }) {
  const [bookings, setBookings] = useState([]);
  const [filterTab, setFilterTab] = useState('monthly'); // 'monthly', 'upcoming', 'all'

  useEffect(() => {
    const loadBookings = () => {
      setBookings(ClassSchedulingService.getBookings());
    };

    loadBookings();
    window.addEventListener('ywr_bookings_updated', loadBookings);
    return () => window.removeEventListener('ywr_bookings_updated', loadBookings);
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter student bookings (Default student: Sarah Jenkins)
  const studentBookings = bookings.filter((b) => b.studentId === 'student-1' || !b.studentId || b.studentEmail === 'sarah.jenkins@example.com');
  const upcomingBookings = studentBookings.filter((b) => b.status === 'Confirmed' || b.status === 'Pending');
  const activeMonthly = studentBookings.find((b) => b.isMonthlyMembership && b.status === 'Confirmed');

  const handleSimulateCompleteClass = (bookingId, classNumber) => {
    ClassSchedulingService.completeClassSession(bookingId, classNumber);
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '820px',
          width: '94%',
          maxHeight: '88vh',
          backgroundColor: '#FAF6F0',
          borderRadius: '28px',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header Close */}
        <button
          onClick={onClose}
          aria-label="Close portal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(194, 94, 26, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        {/* Top Header Banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', textAlign: 'left' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #C25E1A, #D97706)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              boxShadow: '0 8px 20px rgba(194, 94, 26, 0.3)',
            }}
          >
            <Video size={26} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                Student Dashboard & Live Portal
              </h2>
              <span className="badge badge-primary" style={{ fontSize: '11px' }}>Student Session</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
              Welcome back, <strong>Sarah Jenkins</strong> • Instructor: <strong>Rohit (Rishikesh)</strong>
            </p>
          </div>
        </div>

        {/* Dedicated "My Monthly Package" Card */}
        {activeMonthly && (
          <div
            style={{
              backgroundColor: '#23160D',
              color: '#FAF6F0',
              borderRadius: '24px',
              padding: '22px 24px',
              marginBottom: '20px',
              border: '1.5px solid rgba(245, 158, 11, 0.35)',
              boxShadow: '0 12px 30px rgba(35, 22, 13, 0.25)',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <Sparkles size={20} style={{ color: '#FDE68A' }} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FDE68A', fontWeight: 800 }}>
                    My Monthly Package (BEST VALUE)
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFF', margin: 0 }}>
                    {activeMonthly.programName}
                  </h3>
                </div>
              </div>

              {/* Class Counter Badge */}
              <div
                style={{
                  backgroundColor: 'rgba(194, 94, 26, 0.25)',
                  border: '1.5px solid var(--primary)',
                  padding: '8px 16px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Layers size={18} style={{ color: '#FDE68A' }} />
                <div>
                  <div style={{ fontSize: '10.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
                    Classes Remaining
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: '#FDE68A' }}>
                    {activeMonthly.remainingClasses ?? 12} / {activeMonthly.totalClasses || 12} Classes
                  </div>
                </div>
              </div>
            </div>

            {/* Package Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '14px', padding: '12px 16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div>
                <div style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Selected Batch
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
                  {activeMonthly.batch}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Class Days
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#FDE68A', marginTop: '2px' }}>
                  Mon, Wed, Fri
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Price Paid
                </div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#4ADE80', marginTop: '2px' }}>
                  $50 / Month
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10.5px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Active Period
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#FFF', marginTop: '2px' }}>
                  {activeMonthly.membershipStart || 'Sep 2'} – {activeMonthly.membershipExpiry || 'Oct 2'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            borderBottom: '1px solid rgba(194, 94, 26, 0.15)',
            paddingBottom: '10px',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            {activeMonthly && (
              <button
                onClick={() => setFilterTab('monthly')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 800,
                  backgroundColor: filterTab === 'monthly' ? 'var(--primary)' : '#FFFFFF',
                  color: filterTab === 'monthly' ? '#FFFFFF' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Calendar size={14} />
                <span>My 12 Monthly Classes (Mon, Wed, Fri)</span>
              </button>
            )}

            <button
              onClick={() => setFilterTab('upcoming')}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '13px',
                fontWeight: 800,
                backgroundColor: filterTab === 'upcoming' ? 'var(--primary)' : '#FFFFFF',
                color: filterTab === 'upcoming' ? '#FFFFFF' : 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              Upcoming ({upcomingBookings.length})
            </button>

            <button
              onClick={() => setFilterTab('all')}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '13px',
                fontWeight: 800,
                backgroundColor: filterTab === 'all' ? 'var(--primary)' : '#FFFFFF',
                color: filterTab === 'all' ? '#FFFFFF' : 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              All History ({studentBookings.length})
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onOpenBooking) onOpenBooking({ plan: 'daily', title: 'Daily Yoga Class ($5)' });
            }}
            className="btn btn-outline btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', padding: '6px 12px' }}
          >
            <PlusCircle size={14} />
            <span>Book Next Class ($5)</span>
          </button>
        </div>

        {/* Content Views */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '4px' }}>
          {/* TAB 1: 12-Class Monthly Schedule View */}
          {filterTab === 'monthly' && activeMonthly ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 2px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>Scheduled 12 Classes on <strong>Monday, Wednesday & Friday</strong> at <strong>{activeMonthly.batch}</strong>:</span>
                <span style={{ fontWeight: 800, color: 'var(--primary)' }}>{activeMonthly.remainingClasses} of 12 Classes Remaining</span>
              </div>

              {(activeMonthly.scheduledDates || []).map((sc) => {
                const isDone = sc.status === 'Completed';

                return (
                  <div
                    key={sc.classNumber}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '14px 18px',
                      border: isDone ? '1px solid rgba(22, 163, 74, 0.3)' : '1.5px solid rgba(194, 94, 26, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '14px',
                      flexWrap: 'wrap',
                      textAlign: 'left',
                      opacity: isDone ? 0.75 : 1,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          backgroundColor: isDone ? '#DCFCE7' : 'var(--primary-50)',
                          color: isDone ? '#16A34A' : 'var(--primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          fontSize: '13px',
                          flexShrink: 0,
                        }}
                      >
                        {isDone ? <Check size={18} /> : `#${sc.classNumber}`}
                      </div>

                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-main)' }}>
                            {sc.day}, {sc.date}
                          </span>
                          <span
                            className="badge"
                            style={{
                              fontSize: '10.5px',
                              backgroundColor: isDone ? '#DCFCE7' : '#FEF3C7',
                              color: isDone ? '#16A34A' : '#B45309',
                            }}
                          >
                            {isDone ? '✓ Completed' : 'Upcoming'}
                          </span>
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {activeMonthly.programName} • {activeMonthly.batch} • Live Zoom / Meet
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {!isDone && (
                        <button
                          onClick={() => handleSimulateCompleteClass(activeMonthly.id, sc.classNumber)}
                          className="btn btn-outline btn-sm"
                          style={{ fontSize: '11px', padding: '4px 8px' }}
                          title="Simulate class completion to test counter"
                        >
                          Mark Done
                        </button>
                      )}

                      <JoinClassGatekeeper
                        booking={{
                          ...activeMonthly,
                          date: sc.date,
                        }}
                        onOpenClassroomSimulator={onOpenLiveRoom}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* TAB 2 & 3: Standard Bookings List */
            (filterTab === 'upcoming' ? upcomingBookings : studentBookings).length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#FFFFFF', borderRadius: '20px' }}>
                <Calendar size={40} style={{ color: 'var(--primary-light)', margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-dark)', margin: '0 0 6px' }}>
                  No Booked Classes Found
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 16px' }}>
                  Book your first Free Demo Class ($0) or join a Daily ($5) / Monthly ($50) batch with Rohit.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenBooking) onOpenBooking({ plan: 'demo', title: 'Free Demo Yoga Class' });
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Book Free Demo Class
                </button>
              </div>
            ) : (
              (filterTab === 'upcoming' ? upcomingBookings : studentBookings).map((booking) => (
                <div
                  key={booking.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '18px 20px',
                    border: '1.5px solid rgba(194, 94, 26, 0.12)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    flexWrap: 'wrap',
                    textAlign: 'left',
                  }}
                >
                  {/* Class Details */}
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 800,
                          backgroundColor: booking.programId === 'ashtanga-vinyasa' ? '#FEF3C7' : '#F4EBE1',
                          color: booking.programId === 'ashtanga-vinyasa' ? '#B45309' : 'var(--primary-dark)',
                        }}
                      >
                        {booking.programName}
                      </span>

                      <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                        Booking ID: <strong>{booking.id}</strong>
                      </span>
                    </div>

                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px' }}>
                      {booking.classTitle || booking.programName}
                    </h4>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} style={{ color: 'var(--primary)' }} />
                        <span>{booking.date} ({booking.dayName || 'Class Day'})</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} style={{ color: 'var(--primary)' }} />
                        <span><strong>{booking.batch}</strong> ({booking.startTime || '06:30'} - {booking.endTime || '07:30'} EST)</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Video size={13} style={{ color: booking.platform === 'Google Meet' ? '#00897B' : '#2D8CFF' }} />
                        <span>{booking.platform}</span>
                      </div>
                    </div>
                  </div>

                  {/* Gatekeeper Join Action */}
                  <div>
                    <JoinClassGatekeeper
                      booking={booking}
                      onOpenClassroomSimulator={onOpenLiveRoom}
                    />
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
}
