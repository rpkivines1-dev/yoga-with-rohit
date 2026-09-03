// ==========================================================================
// WELCOME HOTEL - ADMIN OVERVIEW & ANALYTICS
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { getTodayStr } from '../../utils/dateUtils';
import { formatCurrency } from '../../utils/helpers';
import { 
  DollarSign, 
  Calendar, 
  CheckCircle, 
  LogOut, 
  Bed, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';

export const AdminOverview = ({ setActiveTab }) => {
  const { rooms, bookings, tableReservations } = useHotel();
  const today = getTodayStr();

  // Active (non-cancelled) bookings
  const activeBookings = bookings.filter((b) => b.status !== 'cancelled');

  // Total Revenue Calculation
  const totalRevenue = activeBookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0);

  // Today's Check-ins & Check-outs
  const todayCheckIns = bookings.filter((b) => b.checkIn === today && b.status === 'confirmed').length;
  const todayCheckOuts = bookings.filter((b) => b.checkOut === today && b.status === 'checked_in').length;

  // Currently Occupied Rooms (Checked in or confirmed today)
  const occupiedCount = bookings.filter(
    (b) => b.status === 'checked_in' || (b.checkIn <= today && b.checkOut > today && b.status === 'confirmed')
  ).length;

  const availableCount = Math.max(0, rooms.length - occupiedCount);
  const occupancyRate = Math.round((occupiedCount / (rooms.length || 10)) * 100);

  return (
    <div>
      {/* 6 Key Performance Metric Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}
      >
        {/* Total Revenue */}
        <div
          className="card"
          style={{
            padding: '1.5rem',
            backgroundColor: '#FFFFFF',
            borderLeft: '4px solid var(--gold-500)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Total Revenue</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-700)' }}>
              <DollarSign size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            {formatCurrency(totalRevenue)}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--success)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <TrendingUp size={13} /> Across {activeBookings.length} bookings
          </div>
        </div>

        {/* Total Bookings */}
        <div
          className="card"
          style={{
            padding: '1.5rem',
            backgroundColor: '#FFFFFF',
            borderLeft: '4px solid var(--navy-700)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Total Bookings</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#EBF3FA', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E4E79' }}>
              <Calendar size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            {bookings.length}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            {activeBookings.length} Active / Confirmed
          </div>
        </div>

        {/* Today's Check-ins */}
        <div
          className="card"
          style={{
            padding: '1.5rem',
            backgroundColor: '#FFFFFF',
            borderLeft: '4px solid var(--success)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Today's Check-ins</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)' }}>
              <CheckCircle size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            {todayCheckIns}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Arrivals scheduled for today
          </div>
        </div>

        {/* Today's Check-outs */}
        <div
          className="card"
          style={{
            padding: '1.5rem',
            backgroundColor: '#FFFFFF',
            borderLeft: '4px solid var(--warning)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Today's Check-outs</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'var(--warning-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--warning)' }}>
              <LogOut size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            {todayCheckOuts}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Departures scheduled for today
          </div>
        </div>

        {/* Available Rooms */}
        <div
          className="card"
          style={{
            padding: '1.5rem',
            backgroundColor: '#FFFFFF',
            borderLeft: '4px solid #10B981',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Available Rooms</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
              <Bed size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            {availableCount} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ 10</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Vacant for tonight
          </div>
        </div>

        {/* Occupied Rooms */}
        <div
          className="card"
          style={{
            padding: '1.5rem',
            backgroundColor: '#FFFFFF',
            borderLeft: '4px solid #EF4444',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Occupied Rooms</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
              <Building2 size={18} />
            </div>
          </div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
            {occupiedCount} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ 10</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Occupancy Rate: {occupancyRate}%
          </div>
        </div>
      </div>

      {/* Inventory & Quick Actions Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          marginBottom: '2.5rem'
        }}
      >
        {/* Room Inventory Status Overview */}
        <div
          className="card"
          style={{
            padding: '2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.25rem' }}>10-Room Physical Inventory</h4>
            <button
              onClick={() => setActiveTab('rooms')}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.8rem' }}
            >
              Manage Rooms →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {rooms.map((room) => {
              const isOccupied = bookings.some(
                (b) => b.roomId === room.id && (b.status === 'checked_in' || (b.checkIn <= today && b.checkOut > today && b.status === 'confirmed'))
              );
              const isDeluxe = room.category === 'Deluxe Luxury';

              return (
                <div
                  key={room.id}
                  style={{
                    padding: '0.85rem 0.5rem',
                    textAlign: 'center',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    backgroundColor: isOccupied ? 'rgba(239, 68, 68, 0.08)' : 'rgba(16, 185, 129, 0.08)'
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {room.roomNumber}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: isDeluxe ? 'var(--gold-700)' : '#1E4E79', fontWeight: 600 }}>
                    {isDeluxe ? 'Deluxe' : 'Premium'}
                  </div>
                  <div style={{ fontSize: '0.68rem', marginTop: '0.2rem', color: isOccupied ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>
                    {isOccupied ? 'Occupied' : 'Vacant'}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
              Vacant Available
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--danger)' }} />
              Occupied
            </div>
          </div>
        </div>

        {/* Recent Bookings Feed */}
        <div
          className="card"
          style={{
            padding: '2rem',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.25rem' }}>Recent Bookings Feed</h4>
            <button
              onClick={() => setActiveTab('bookings')}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.8rem' }}
            >
              All Bookings →
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {bookings.slice(0, 4).map((b) => (
              <div
                key={b.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-main)',
                  fontSize: '0.88rem'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                    {b.guestName} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Room {b.roomNumber})</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {b.checkIn} to {b.checkOut} ({b.nights} nts)
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, color: 'var(--gold-700)' }}>
                    {formatCurrency(b.totalAmount)}
                  </div>
                  <span
                    className={
                      b.status === 'confirmed'
                        ? 'badge badge-available'
                        : b.status === 'checked_in'
                        ? 'badge badge-checked-in'
                        : 'badge badge-booked'
                    }
                    style={{ fontSize: '0.7rem' }}
                  >
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
