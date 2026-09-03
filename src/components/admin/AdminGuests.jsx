// ==========================================================================
// WELCOME HOTEL - ADMIN GUEST MANAGEMENT
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { formatCurrency } from '../../utils/helpers';
import { User, Search, Mail, Phone, MapPin, Calendar, Eye, ShieldCheck } from 'lucide-react';

export const AdminGuests = () => {
  const { bookings } = useHotel();
  const [searchTerm, setSearchTerm] = useState('');

  // Group unique guests by email
  const guestsMap = {};

  bookings.forEach((b) => {
    const key = b.guestEmail?.toLowerCase() || b.guestName.toLowerCase();
    if (!guestsMap[key]) {
      guestsMap[key] = {
        name: b.guestName,
        email: b.guestEmail || 'No email',
        phone: b.guestPhone || 'No phone',
        address: b.guestAddress || 'Not provided',
        bookingsCount: 1,
        totalSpent: b.totalAmount || 0,
        lastStay: b.checkIn,
        bookingsList: [b]
      };
    } else {
      guestsMap[key].bookingsCount += 1;
      guestsMap[key].totalSpent += b.totalAmount || 0;
      guestsMap[key].bookingsList.push(b);
      if (b.checkIn > guestsMap[key].lastStay) {
        guestsMap[key].lastStay = b.checkIn;
      }
    }
  });

  const guestsList = Object.values(guestsMap).filter((g) => {
    return (
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.phone.includes(searchTerm)
    );
  });

  return (
    <div>
      {/* Header & Search */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>
            Guest Directory & Stay History ({guestsList.length} Guests)
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Search registered guests, view total lifetime spend, contact information, and previous stays.
          </p>
        </div>

        <div style={{ position: 'relative', width: '260px' }}>
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.2rem', height: '40px', fontSize: '0.85rem' }}
          />
          <Search size={15} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>
      </div>

      {/* Guest Directory Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {guestsList.map((guest, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              padding: '1.75rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold-100)',
                  color: 'var(--gold-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.1rem'
                }}
              >
                {guest.name.charAt(0)}
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                  {guest.name}
                </h4>
                <span className="badge badge-deluxe" style={{ fontSize: '0.7rem' }}>
                  {guest.bookingsCount} {guest.bookingsCount === 1 ? 'Stay' : 'Stays'} Completed
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--gold-600)" /> {guest.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={14} color="var(--gold-600)" /> {guest.phone}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={14} color="var(--gold-600)" /> {guest.address}
              </div>
            </div>

            <div
              style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.85rem'
              }}
            >
              <div>
                <span style={{ color: 'var(--text-muted)' }}>Lifetime Spend: </span>
                <strong style={{ color: 'var(--gold-700)' }}>{formatCurrency(guest.totalSpent)}</strong>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Last Stay: {guest.lastStay}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
