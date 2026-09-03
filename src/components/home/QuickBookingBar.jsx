// ==========================================================================
// WELCOME HOTEL - QUICK BOOKING BAR
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { getTodayStr, getTomorrowStr, addDays, calculateNights } from '../../utils/dateUtils';
import { Calendar, Users, Home, Search, Sparkles } from 'lucide-react';

export const QuickBookingBar = () => {
  const { startBookingFlow, navigateTo } = useHotel();
  const [checkIn, setCheckIn] = useState(getTodayStr());
  const [checkOut, setCheckOut] = useState(getTomorrowStr());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [category, setCategory] = useState('all');

  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckIn(newCheckIn);
    if (newCheckIn >= checkOut) {
      setCheckOut(addDays(newCheckIn, 1));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    startBookingFlow({
      step: 2, // Go directly to room selection step
      checkIn,
      checkOut,
      adults: parseInt(adults),
      children: parseInt(children),
      category
    });
  };

  const nights = calculateNights(checkIn, checkOut);

  return (
    <div
      style={{
        position: 'relative',
        marginTop: '-3.5rem',
        zIndex: 10,
        marginBottom: '4rem'
      }}
    >
      <div className="container">
        <form
          onSubmit={handleSearch}
          className="glass-card"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 20px 50px rgba(18, 24, 32, 0.12)',
            padding: '1.5rem 2rem',
            border: '1px solid rgba(197, 168, 128, 0.35)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr)) auto',
            gap: '1.25rem',
            alignItems: 'flex-end'
          }}
        >
          {/* Check-in Date */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '0.45rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <Calendar size={14} color="var(--gold-600)" /> Check-In Date
            </label>
            <input
              type="date"
              min={getTodayStr()}
              value={checkIn}
              onChange={handleCheckInChange}
              className="form-input"
              style={{ fontWeight: 500 }}
              required
            />
          </div>

          {/* Check-out Date */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '0.45rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <Calendar size={14} color="var(--gold-600)" /> Check-Out ({nights} {nights === 1 ? 'Night' : 'Nights'})
            </label>
            <input
              type="date"
              min={addDays(checkIn, 1)}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="form-input"
              style={{ fontWeight: 500 }}
              required
            />
          </div>

          {/* Guests (Adults & Children) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.45rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Adults
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="form-select"
                style={{ fontWeight: 500 }}
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Adults</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.45rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="form-select"
                style={{ fontWeight: 500 }}
              >
                <option value={0}>0 Children</option>
                <option value={1}>1 Child</option>
                <option value={2}>2 Children</option>
              </select>
            </div>
          </div>

          {/* Room Category */}
          <div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '0.45rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              <Home size={14} color="var(--gold-600)" /> Room Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
              style={{ fontWeight: 500 }}
            >
              <option value="all">All Room Types (10 Rooms)</option>
              <option value="Deluxe Luxury">Deluxe Luxury (5 Rooms)</option>
              <option value="Premium">Premium (5 Rooms)</option>
            </select>
          </div>

          {/* Submit Action */}
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem 1.6rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                height: '46px'
              }}
            >
              <Search size={16} /> Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
