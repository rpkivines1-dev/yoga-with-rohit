// ==========================================================================
// WELCOME HOTEL - ROOMS CATALOG PAGE
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { RoomCard } from './RoomCard';
import { RoomFilters } from './RoomFilters';
import { getTodayStr, getTomorrowStr, isRoomAvailable } from '../../utils/dateUtils';
import { Sparkles, Bed, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const RoomsCatalog = () => {
  const { rooms, pageParams, bookings } = useHotel();

  // Filters State
  const [category, setCategory] = useState(pageParams.category || 'all');
  const [maxPrice, setMaxPrice] = useState(300);
  const [guestsCount, setGuestsCount] = useState(1);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [checkIn, setCheckIn] = useState(getTodayStr());
  const [checkOut, setCheckOut] = useState(getTomorrowStr());

  const handleResetFilters = () => {
    setCategory('all');
    setMaxPrice(300);
    setGuestsCount(1);
    setOnlyAvailable(false);
    setCheckIn(getTodayStr());
    setCheckOut(getTomorrowStr());
  };

  // Filter Logic across 10 rooms
  const filteredRooms = rooms.filter((room) => {
    if (category !== 'all' && room.category !== category) return false;
    if (room.price > maxPrice) return false;
    if (room.maxGuests < guestsCount) return false;
    if (onlyAvailable) {
      if (room.status === 'maintenance') return false;
      const avail = isRoomAvailable(room.id, checkIn, checkOut, bookings);
      if (!avail) return false;
    }
    return true;
  });

  const deluxeCount = rooms.filter((r) => r.category === 'Deluxe Luxury').length;
  const premiumCount = rooms.filter((r) => r.category === 'Premium').length;

  return (
    <div style={{ padding: '3.5rem 0 6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="section-tag">
            <Bed size={14} /> 10-Room Boutique Collection
          </span>
          <h2>Our Luxury Rooms & Suites</h2>
          <p>
            Explore our curated inventory of 5 Deluxe Luxury Suites and 5 Premium Rooms. Check live availability, compare room features, and book with ease.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <RoomFilters
          category={category}
          setCategory={setCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          guestsCount={guestsCount}
          setGuestsCount={setGuestsCount}
          onlyAvailable={onlyAvailable}
          setOnlyAvailable={setOnlyAvailable}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          onReset={handleResetFilters}
        />

        {/* Result Count and Summary */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.75rem',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div>
            Showing <strong>{filteredRooms.length}</strong> of {rooms.length} Suites ({deluxeCount} Deluxe, {premiumCount} Premium)
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--success)', fontSize: '0.82rem' }}>
            <CheckCircle2 size={15} /> Real-time Overlap Protection Active
          </div>
        </div>

        {/* Rooms Grid (10 Rooms) */}
        {filteredRooms.length === 0 ? (
          <div
            className="card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>No Rooms Match Your Criteria</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Try adjusting your price range, guest count, or clearing date filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-primary btn-sm">
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                checkIn={checkIn}
                checkOut={checkOut}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
