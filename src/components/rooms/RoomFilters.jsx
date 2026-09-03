// ==========================================================================
// WELCOME HOTEL - ROOM FILTERS COMPONENT
// ==========================================================================

import React from 'react';
import { Filter, Calendar, DollarSign, Users, CheckCircle2, RotateCcw } from 'lucide-react';
import { getTodayStr, addDays } from '../../utils/dateUtils';
import { formatCurrency } from '../../utils/helpers';

export const RoomFilters = ({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  guestsCount,
  setGuestsCount,
  onlyAvailable,
  setOnlyAvailable,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  onReset
}) => {
  return (
    <div
      className="card"
      style={{
        padding: '1.75rem',
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)',
        marginBottom: '2.5rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          <Filter size={18} color="var(--gold-600)" />
          <span>Filter & Check Availability</span>
        </div>

        <button
          onClick={onReset}
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}
        >
          <RotateCcw size={12} /> Reset Filters
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '1.25rem',
          alignItems: 'flex-end'
        }}
      >
        {/* Category Filter */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
            Room Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="all">All Rooms (10 Total)</option>
            <option value="Deluxe Luxury">Deluxe Luxury (5 Rooms)</option>
            <option value="Premium">Premium (5 Rooms)</option>
          </select>
        </div>

        {/* Check-In Date */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
            Check-In Date
          </label>
          <input
            type="date"
            min={getTodayStr()}
            value={checkIn}
            onChange={(e) => {
              const val = e.target.value;
              setCheckIn(val);
              if (val >= checkOut) {
                setCheckOut(addDays(val, 1));
              }
            }}
            className="form-input"
          />
        </div>

        {/* Check-Out Date */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
            Check-Out Date
          </label>
          <input
            type="date"
            min={addDays(checkIn, 1)}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="form-input"
          />
        </div>

        {/* Guest Capacity */}
        <div>
          <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
            Guest Capacity
          </label>
          <select
            value={guestsCount}
            onChange={(e) => setGuestsCount(Number(e.target.value))}
            className="form-select"
          >
            <option value={1}>1+ Guests</option>
            <option value={2}>2+ Guests</option>
            <option value={3}>3+ Guests (Deluxe Suites)</option>
          </select>
        </div>

        {/* Price Slider */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600, margin: 0 }}>
              Max Rate
            </label>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold-700)' }}>
              {formatCurrency(maxPrice)}/nt
            </span>
          </div>
          <input
            type="range"
            min="150"
            max="300"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--gold-600)', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Availability Toggle */}
      <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <input
          type="checkbox"
          id="avail-only"
          checked={onlyAvailable}
          onChange={(e) => setOnlyAvailable(e.target.checked)}
          style={{ width: '16px', height: '16px', accentColor: 'var(--gold-600)', cursor: 'pointer' }}
        />
        <label htmlFor="avail-only" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', cursor: 'pointer', userSelect: 'none' }}>
          Show only rooms available for <strong>{checkIn}</strong> to <strong>{checkOut}</strong>
        </label>
      </div>
    </div>
  );
};
