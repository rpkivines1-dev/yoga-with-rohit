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
        className="modal-container student-portal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '820px',
          width: '96%',
          backgroundColor: '#FAF6F0',
          borderRadius: '24px',
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
          className="portal-close-btn"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
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
          <X size={18} />
        </button>

        {/* Top Header Banner */}
        <div className="portal-header-banner" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', textAlign: 'left', paddingRight: '36px' }}>
          <div
            className="portal-header-icon"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #C25E1A, #D97706)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              boxShadow: '0 8px 20px rgba(194, 94, 26, 0.3)',
              flexShrink: 0,
            }}
          >
            <Video size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h2 className="portal-title" style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0, lineHeight: 1.2 }}>
                Student Dashboard & Live Portal
              </h2>
              <span className="badge badge-primary" style={{ fontSize: '10.5px' }}>Student Session</span>
            </div>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '2px 0 0' }}>
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
            <div className="portal-package-grid" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '14px', padding: '12px 14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div>
                <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Selected Batch
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#FFF', marginTop: '2px' }}>
                  {activeMonthly.batch}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Class Days
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#FDE68A', marginTop: '2px' }}>
                  Mon, Wed, Fri
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Price Paid
                </div>
                <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#4ADE80', marginTop: '2px' }}>
                  $50 / Month
                </div>
              </div>

              <div>
                <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Active Period
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#FFF', marginTop: '2px' }}>
                  {activeMonthly.membershipStart || 'Sep 2'} – {activeMonthly.membershipExpiry || 'Oct 2'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Navigation Tabs */}
        <div
          className="portal-tabs-wrapper"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
            borderBottom: '1px solid rgba(194, 94, 26, 0.15)',
            paddingBottom: '8px',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          <div
            className="portal-tabs-scroll"
            style={{
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              paddingBottom: '2px',
              maxWidth: '100%',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {activeMonthly && (
              <button
                onClick={() => setFilterTab('monthly')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '12.5px',
                  fontWeight: 800,
                  backgroundColor: filterTab === 'monthly' ? 'var(--primary)' : '#FFFFFF',
                  color: filterTab === 'monthly' ? '#FFFFFF' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <Calendar size={13} />
                <span className="monthly-tab-full">My 12 Monthly Classes (Mon, Wed, Fri)</span>
                <span className="monthly-tab-short">12 Classes</span>
              </button>
            )}

            <button
              onClick={() => setFilterTab('upcoming')}
              style={{
                padding: '6px 12px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '12.5px',
                fontWeight: 800,
                backgroundColor: filterTab === 'upcoming' ? 'var(--primary)' : '#FFFFFF',
                color: filterTab === 'upcoming' ? '#FFFFFF' : 'var(--text-muted)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Upcoming ({upcomingBookings.length})
            </button>

            <button
              onClick={() => setFilterTab('all')}
              style={{
                padding: '6px 12px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '12.5px',
                fontWeight: 800,
                backgroundColor: filterTab === 'all' ? 'var(--primary)' : '#FFFFFF',
                color: filterTab === 'all' ? '#FFFFFF' : 'var(--text-muted)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              History ({studentBookings.length})
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onOpenBooking) onOpenBooking({ plan: 'daily', title: 'Daily Yoga Class ($5)' });
            }}
            className="btn btn-outline btn-sm portal-book-next-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', padding: '6px 10px', whiteSpace: 'nowrap' }}
          >
            <PlusCircle size={13} />
            <span>Book Next ($5)</span>
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
                    className="portal-class-item"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '14px 16px',
                      border: isDone ? '1px solid rgba(22, 163, 74, 0.3)' : '1.5px solid rgba(194, 94, 26, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      textAlign: 'left',
                      opacity: isDone ? 0.75 : 1,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
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

                      <div style={{ minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                            {sc.day}, {sc.date}
                          </span>
                          <span
                            className="badge"
                            style={{
                              fontSize: '10px',
                              backgroundColor: isDone ? '#DCFCE7' : '#FEF3C7',
                              color: isDone ? '#16A34A' : '#B45309',
                            }}
                          >
                            {isDone ? '✓ Completed' : 'Upcoming'}
                          </span>
                        </div>
                        <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px', wordBreak: 'break-word' }}>
                          {activeMonthly.programName} • {activeMonthly.batch} • Live HD
                        </div>
                      </div>
                    </div>

                    <div className="portal-class-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {!isDone && (
                        <button
                          onClick={() => handleSimulateCompleteClass(activeMonthly.id, sc.classNumber)}
                          className="btn btn-outline btn-sm"
                          style={{ fontSize: '11px', padding: '5px 8px' }}
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
              <div style={{ textAlign: 'center', padding: '36px 18px', backgroundColor: '#FFFFFF', borderRadius: '20px' }}>
                <Calendar size={38} style={{ color: 'var(--primary-light)', margin: '0 auto 12px' }} />
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
                  className="portal-booking-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '16px 18px',
                    border: '1.5px solid rgba(194, 94, 26, 0.12)',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    textAlign: 'left',
                  }}
                >
                  {/* Class Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '10.5px',
                          fontWeight: 800,
                          backgroundColor: booking.programId === 'ashtanga-vinyasa' ? '#FEF3C7' : '#F4EBE1',
                          color: booking.programId === 'ashtanga-vinyasa' ? '#B45309' : 'var(--primary-dark)',
                        }}
                      >
                        {booking.programName}
                      </span>

                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        ID: <strong>{booking.id}</strong>
                      </span>
                    </div>

                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px' }}>
                      {booking.classTitle || booking.programName}
                    </h4>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '12px', color: 'var(--text-muted)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} style={{ color: 'var(--primary)' }} />
                        <span>{booking.date} ({booking.dayName || 'Class Day'})</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} style={{ color: 'var(--primary)' }} />
                        <span><strong>{booking.batch}</strong></span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Video size={13} style={{ color: booking.platform === 'Google Meet' ? '#00897B' : '#2D8CFF' }} />
                        <span>{booking.platform}</span>
                      </div>
                    </div>
                  </div>

                  {/* Gatekeeper Join Action */}
                  <div className="portal-booking-actions">
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

      <style>{`
        .student-portal-dialog {
          padding: 28px 24px;
          max-height: 88vh;
        }
        .monthly-tab-short {
          display: none;
        }
        .portal-package-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 640px) {
          .student-portal-dialog {
            padding: 18px 14px !important;
            max-height: 92dvh !important;
            border-radius: 20px !important;
          }
          .portal-header-icon {
            width: 38px !important;
            height: 38px !important;
            border-radius: 10px !important;
          }
          .portal-header-icon svg {
            width: 20px !important;
            height: 20px !important;
          }
          .portal-title {
            font-size: 17px !important;
          }
          .portal-package-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .monthly-tab-full {
            display: none !important;
          }
          .monthly-tab-short {
            display: inline !important;
          }
          .portal-class-item {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            padding: 12px 14px !important;
          }
          .portal-class-actions {
            width: 100% !important;
            display: flex !important;
            justify-content: space-between !important;
            border-top: 1px dashed rgba(194, 94, 26, 0.15) !important;
            padding-top: 10px !important;
          }
          .portal-booking-card {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            padding: 14px 12px !important;
          }
          .portal-booking-actions {
            width: 100% !important;
            border-top: 1px dashed rgba(194, 94, 26, 0.15) !important;
            padding-top: 10px !important;
          }
          .portal-book-next-btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
