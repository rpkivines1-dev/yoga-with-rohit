// ==========================================================================
// WELCOME HOTEL - GUEST ACCOUNT & PORTAL
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { formatCurrency, printInvoice } from '../../utils/helpers';
import { 
  User, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  X, 
  LogOut, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Edit2,
  Lock
} from 'lucide-react';

export const GuestPortal = ({ onOpenAuth }) => {
  const { 
    currentUser, 
    bookings, 
    cancelBooking, 
    logout, 
    navigateTo, 
    hotelInfo, 
    startBookingFlow 
  } = useHotel();

  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' | 'profile'
  const [cancelModalBooking, setCancelModalBooking] = useState(null);

  if (!currentUser) {
    return (
      <div style={{ padding: '6rem 1.5rem', textAlign: 'center', backgroundColor: 'var(--bg-main)' }}>
        <div className="container" style={{ maxWidth: '540px' }}>
          <div
            className="card"
            style={{
              padding: '3rem 2rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--gold-100)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-700)',
                marginBottom: '1.25rem'
              }}
            >
              <User size={30} />
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Guest Account Portal</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Sign in to view your current reservations, download booking vouchers, manage guest profile, or cancel stays.
            </p>

            <button
              onClick={onOpenAuth}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '1rem', fontWeight: 600 }}
            >
              Sign In to Your Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filter bookings for this guest
  const userBookings = bookings.filter(
    (b) =>
      b.guestId === currentUser.id ||
      b.guestEmail?.toLowerCase() === currentUser.email?.toLowerCase() ||
      currentUser.role === 'guest'
  );

  const upcomingBookings = userBookings.filter((b) => b.status === 'confirmed' || b.status === 'checked_in');
  const pastBookings = userBookings.filter((b) => b.status === 'checked_out' || b.status === 'cancelled');

  const handleConfirmCancel = () => {
    if (cancelModalBooking) {
      cancelBooking(cancelModalBooking.id);
      setCancelModalBooking(null);
    }
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        {/* User Welcome Banner */}
        <div
          className="card"
          style={{
            padding: '2rem 2.5rem',
            backgroundColor: '#121820',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            border: '1px solid rgba(197, 168, 128, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '50%',
                background: 'var(--gold-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '1.4rem',
                fontWeight: 700
              }}
            >
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--gold-400)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Welcome Hotel Member
              </span>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: '0.2rem' }}>
                {currentUser.name}
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>
                {currentUser.email} • {currentUser.phone || 'Phone on file'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => startBookingFlow()}
              className="btn btn-primary btn-sm"
              style={{ fontWeight: 600 }}
            >
              <Calendar size={14} /> Book New Stay
            </button>
            <button
              onClick={logout}
              className="btn btn-secondary btn-sm"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              <LogOut size={14} /> Sign Out
            </button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('bookings')}
            style={{
              padding: '0.6rem 1.25rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: activeTab === 'bookings' ? 'var(--gold-700)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'bookings' ? '2px solid var(--gold-600)' : 'none'
            }}
          >
            My Reservations ({userBookings.length})
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            style={{
              padding: '0.6rem 1.25rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: activeTab === 'profile' ? 'var(--gold-700)' : 'var(--text-secondary)',
              borderBottom: activeTab === 'profile' ? '2px solid var(--gold-600)' : 'none'
            }}
          >
            Personal Information
          </button>
        </div>

        {/* TAB 1: RESERVATIONS */}
        {activeTab === 'bookings' && (
          <div>
            {/* Upcoming Bookings */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} color="var(--gold-600)" /> Upcoming & Active Stays ({upcomingBookings.length})
              </h3>

              {upcomingBookings.length === 0 ? (
                <div
                  className="card"
                  style={{
                    padding: '2.5rem',
                    textAlign: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    You currently have no active or upcoming stays booked.
                  </p>
                  <button onClick={() => startBookingFlow()} className="btn btn-primary btn-sm">
                    Book a Room Now
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {upcomingBookings.map((b) => (
                    <div
                      key={b.id}
                      className="card"
                      style={{
                        padding: '1.75rem',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid rgba(197, 168, 128, 0.35)',
                        boxShadow: 'var(--shadow-sm)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr)) auto',
                        gap: '1.5rem',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.78rem', backgroundColor: '#121820', color: '#FFF', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                            ROOM {b.roomNumber}
                          </span>
                          <span className={b.roomCategory === 'Deluxe Luxury' ? 'badge badge-deluxe' : 'badge badge-premium'}>
                            {b.roomCategory}
                          </span>
                          <span className={b.status === 'checked_in' ? 'badge badge-checked-in' : 'badge badge-available'}>
                            {b.status === 'checked_in' ? 'Checked In' : 'Confirmed'}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                          {b.roomName || `${b.roomCategory} Suite`}
                        </h4>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          Booking Reference: <strong>#{b.id}</strong>
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Stay Dates</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {b.checkIn} → {b.checkOut}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          {b.nights} {b.nights === 1 ? 'Night' : 'Nights'} ({b.adults} Adults)
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Amount</div>
                        <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--gold-700)', fontFamily: 'var(--font-serif)' }}>
                          {formatCurrency(b.totalAmount)}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: b.paymentStatus === 'paid' ? 'var(--success)' : 'var(--warning)' }}>
                          {b.paymentStatus === 'paid' ? 'Paid in Full (Online)' : 'Pay at Front Desk'}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button
                          onClick={() => navigateTo('confirmation', { bookingId: b.id })}
                          className="btn btn-secondary btn-sm"
                          style={{ fontSize: '0.82rem' }}
                        >
                          <Printer size={13} /> View / Print Voucher
                        </button>

                        <button
                          onClick={() => setCancelModalBooking(b)}
                          className="btn btn-sm"
                          style={{
                            color: 'var(--danger)',
                            border: '1px solid var(--danger-bg)',
                            backgroundColor: 'transparent',
                            fontSize: '0.82rem'
                          }}
                        >
                          <X size={13} /> Cancel Reservation
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Past / Cancelled Bookings */}
            {pastBookings.length > 0 && (
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-secondary)' }}>
                  Past & Cancelled Bookings ({pastBookings.length})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {pastBookings.map((b) => (
                    <div
                      key={b.id}
                      className="card"
                      style={{
                        padding: '1.25rem 1.5rem',
                        backgroundColor: '#F9FAFB',
                        borderRadius: 'var(--radius-md)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)) auto',
                        gap: '1rem',
                        alignItems: 'center',
                        opacity: 0.8
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                          Room {b.roomNumber} - {b.roomName}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          Ref #{b.id} • {b.checkIn} to {b.checkOut}
                        </div>
                      </div>

                      <div>
                        <span className={b.status === 'cancelled' ? 'badge badge-booked' : 'badge badge-checked-out'}>
                          {b.status === 'cancelled' ? 'Cancelled' : 'Checked Out'}
                        </span>
                      </div>

                      <div style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
                        {formatCurrency(b.totalAmount)}
                      </div>

                      <button
                        onClick={() => navigateTo('confirmation', { bookingId: b.id })}
                        className="btn btn-secondary btn-sm"
                        style={{ fontSize: '0.78rem' }}
                      >
                        Receipt
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PROFILE MANAGEMENT */}
        {activeTab === 'profile' && (
          <div
            className="card"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              maxWidth: '680px'
            }}
          >
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.5rem' }}>
              Personal Profile & Preferences
            </h3>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" value={currentUser.name} readOnly className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" value={currentUser.email} readOnly className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" value={currentUser.phone || '+1 (555) 000-0000'} readOnly className="form-input" />
            </div>

            <div className="form-group">
              <label className="form-label">Registered Address</label>
              <input type="text" value={currentUser.address || 'Standard Guest'} readOnly className="form-input" />
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              <ShieldCheck size={16} color="var(--gold-600)" /> Profile verified by Welcome Hotel Central Guest Management
            </div>
          </div>
        )}

        {/* Cancel Confirmation Modal */}
        {cancelModalBooking && (
          <div className="modal-overlay" onClick={() => setCancelModalBooking(null)}>
            <div
              className="card"
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: '2.25rem',
                backgroundColor: '#FFFFFF',
                textAlign: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--danger-bg)',
                  color: 'var(--danger)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <AlertCircle size={28} />
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                Cancel Reservation?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Are you sure you want to cancel booking <strong>#{cancelModalBooking.id}</strong> (Room {cancelModalBooking.roomNumber})? This room will be released for other guests immediately.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button
                  onClick={() => setCancelModalBooking(null)}
                  className="btn btn-secondary"
                >
                  Keep Booking
                </button>
                <button
                  onClick={handleConfirmCancel}
                  className="btn"
                  style={{ backgroundColor: 'var(--danger)', color: '#FFFFFF', fontWeight: 600 }}
                >
                  Confirm Cancellation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
