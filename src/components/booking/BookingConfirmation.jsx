// ==========================================================================
// WELCOME HOTEL - BOOKING CONFIRMATION & PRINTABLE VOUCHER
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { formatCurrency, printInvoice } from '../../utils/helpers';
import { 
  CheckCircle2, 
  Printer, 
  Home, 
  Calendar, 
  Hotel, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  User, 
  FileText 
} from 'lucide-react';

export const BookingConfirmation = ({ bookingId }) => {
  const { bookings, hotelInfo, navigateTo, currentUser } = useHotel();

  const booking = bookings.find((b) => b.id === bookingId) || bookings[0];

  if (!booking) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2>No Booking Found</h2>
        <button onClick={() => navigateTo('home')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '4rem 0 6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Success Banner (Hidden on Print) */}
        <div
          className="no-print"
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'var(--success-bg)',
              color: 'var(--success)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              boxShadow: '0 8px 24px rgba(16, 185, 129, 0.2)'
            }}
          >
            <CheckCircle2 size={42} />
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
            Booking Confirmed!
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 1.5rem auto' }}>
            Thank you for choosing Welcome Hotel. Your reservation is officially registered. A confirmation email has been dispatched to <strong>{booking.guestEmail}</strong>.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={printInvoice}
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Printer size={16} /> Download / Print Booking Details
            </button>

            <button
              onClick={() => navigateTo('home')}
              className="btn btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Home size={16} /> Return to Home
            </button>
          </div>
        </div>

        {/* Printable Official Voucher / Receipt Document */}
        <div
          className="card printable-invoice"
          style={{
            padding: '3rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-lg)',
            border: '1.5px solid rgba(197, 168, 128, 0.4)'
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingBottom: '2rem',
              borderBottom: '2px solid var(--border-light)',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '6px',
                    background: 'var(--gold-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}
                >
                  <Hotel size={18} />
                </div>
                <span style={{ fontFamily: 'var(--font-brand)', fontSize: '1.35rem', fontWeight: 800, letterSpacing: '0.12em' }}>
                  WELCOME HOTEL
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{hotelInfo.address}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tel: {hotelInfo.phone}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Official Booking Voucher
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-700)', fontFamily: 'monospace' }}>
                #{booking.id}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Issued: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>

          {/* Key Stay Details Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              padding: '1.5rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Primary Guest
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                {booking.guestName}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {booking.guestEmail}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {booking.guestPhone}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Room Allocation
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Room {booking.roomNumber}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--gold-700)', fontWeight: 600 }}>
                {booking.roomCategory}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {booking.adults} Adults{booking.children > 0 ? `, ${booking.children} Children` : ''}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Check-In / Out
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                In: {booking.checkIn} (3 PM)
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                Out: {booking.checkOut} (11 AM)
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {booking.nights} {booking.nights === 1 ? 'Night' : 'Nights'} Stay
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                Payment Status
              </div>
              <div>
                <span
                  className={booking.paymentStatus === 'paid' ? 'badge badge-available' : 'badge badge-pending'}
                  style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}
                >
                  {booking.paymentStatus === 'paid' ? 'Paid in Full (Online)' : 'Pay at Hotel Front Desk'}
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                Status: <strong>{booking.status.toUpperCase()}</strong>
              </div>
            </div>
          </div>

          {/* Pricing Ledger Table */}
          <div style={{ marginBottom: '2.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-light)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 0', fontWeight: 600 }}>Description</th>
                  <th style={{ padding: '0.75rem 0', fontWeight: 600, textAlign: 'center' }}>Qty / Nights</th>
                  <th style={{ padding: '0.75rem 0', fontWeight: 600, textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '0.85rem 0' }}>
                    <strong>{booking.roomName || `${booking.roomCategory} Suite`}</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Room {booking.roomNumber} ({formatCurrency(booking.pricePerNight)} / night)
                    </div>
                  </td>
                  <td style={{ padding: '0.85rem 0', textAlign: 'center' }}>
                    {booking.nights}
                  </td>
                  <td style={{ padding: '0.85rem 0', textAlign: 'right', fontWeight: 600 }}>
                    {formatCurrency(booking.roomTotal || booking.pricePerNight * booking.nights)}
                  </td>
                </tr>

                {booking.addOns && booking.addOns.length > 0 && (
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.85rem 0' }}>
                      <strong>Included Guest Add-Ons:</strong>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        {booking.addOns.join(', ')}
                      </div>
                    </td>
                    <td style={{ padding: '0.85rem 0', textAlign: 'center' }}>-</td>
                    <td style={{ padding: '0.85rem 0', textAlign: 'right', fontWeight: 600 }}>
                      {formatCurrency(booking.addOnsTotal || 0)}
                    </td>
                  </tr>
                )}

                {booking.discount > 0 && (
                  <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--success)' }}>
                    <td style={{ padding: '0.85rem 0' }}>Promo Discount ({booking.promoCode || 'Code'})</td>
                    <td style={{ padding: '0.85rem 0', textAlign: 'center' }}>-</td>
                    <td style={{ padding: '0.85rem 0', textAlign: 'right', fontWeight: 600 }}>
                      -{formatCurrency(booking.discount)}
                    </td>
                  </tr>
                )}

                <tr style={{ borderBottom: '1px solid var(--border-light)', color: 'var(--text-secondary)' }}>
                  <td style={{ padding: '0.85rem 0' }}>Hotel Occupancy Tax & VAT (12%)</td>
                  <td style={{ padding: '0.85rem 0', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '0.85rem 0', textAlign: 'right' }}>
                    {formatCurrency(booking.tax || 0)}
                  </td>
                </tr>

                <tr style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  <td style={{ padding: '1rem 0' }}>Total Reservation Amount</td>
                  <td style={{ padding: '1rem 0', textAlign: 'center' }}></td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', color: 'var(--gold-700)', fontFamily: 'var(--font-serif)' }}>
                    {formatCurrency(booking.totalAmount)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hotel Policies & Verification Note */}
          <div
            style={{
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <p>• Check-in begins at 3:00 PM. Early check-in subject to room readiness.</p>
              <p>• Government photo ID & booking voucher required upon arrival.</p>
            </div>

            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--success)' }}>
              <ShieldCheck size={16} /> Official Verified Booking
            </div>
          </div>
        </div>

        {/* View in Guest Account CTA (Hidden on print) */}
        <div className="no-print" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button
            onClick={() => navigateTo('guest-account')}
            style={{
              fontSize: '0.9rem',
              color: 'var(--gold-700)',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            <User size={16} /> View this booking in your Guest Account Dashboard →
          </button>
        </div>
      </div>
    </div>
  );
};
