// ==========================================================================
// WELCOME HOTEL - ADMIN VISUAL BOOKING CALENDAR / TIMELINE MATRIX
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { generateCalendarDays, getTodayStr, addDays } from '../../utils/dateUtils';
import { formatCurrency } from '../../utils/helpers';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Info
} from 'lucide-react';

export const AdminCalendar = () => {
  const { rooms, bookings } = useHotel();
  const [startDateStr, setStartDateStr] = useState(getTodayStr());
  const [selectedCellBooking, setSelectedCellBooking] = useState(null);

  // Generate next 14 calendar days from start date
  const calendarDays = generateCalendarDays(startDateStr, 14);

  const handlePrevWeek = () => {
    setStartDateStr(addDays(startDateStr, -7));
  };

  const handleNextWeek = () => {
    setStartDateStr(addDays(startDateStr, 7));
  };

  const handleToday = () => {
    setStartDateStr(getTodayStr());
  };

  // Helper to find booking occupying a room on a given date
  const getBookingForRoomDate = (roomId, dateStr) => {
    return bookings.find((b) => {
      if (b.status === 'cancelled') return false;
      if (b.roomId !== roomId) return false;
      // Date falls in [checkIn, checkOut)
      return dateStr >= b.checkIn && dateStr < b.checkOut;
    });
  };

  return (
    <div>
      {/* Calendar Header Controls */}
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
            Visual Room Timeline & Calendar
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            Real-time availability matrix across all 10 physical rooms. Click any reservation bar for details.
          </p>
        </div>

        {/* Timeline Nav Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={handleToday} className="btn btn-secondary btn-sm">
            Today
          </button>
          <button onClick={handlePrevWeek} className="btn btn-secondary btn-sm" aria-label="Previous week">
            <ChevronLeft size={16} /> Prev 7 Days
          </button>
          <button onClick={handleNextWeek} className="btn btn-secondary btn-sm" aria-label="Next week">
            Next 7 Days <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Visual Timeline Matrix Grid */}
      <div
        className="card"
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border-light)',
          marginBottom: '2rem'
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '980px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-main)', borderBottom: '2px solid var(--border-light)' }}>
                <th
                  style={{
                    padding: '1rem',
                    textAlign: 'left',
                    width: '180px',
                    position: 'sticky',
                    left: 0,
                    backgroundColor: 'var(--bg-main)',
                    zIndex: 2,
                    borderRight: '1px solid var(--border-light)'
                  }}
                >
                  Physical Room
                </th>

                {calendarDays.map((day) => (
                  <th
                    key={day.dateStr}
                    style={{
                      padding: '0.75rem 0.5rem',
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      backgroundColor: day.isToday ? 'rgba(197, 168, 128, 0.2)' : 'transparent',
                      borderRight: '1px solid var(--border-light)',
                      color: day.isToday ? 'var(--gold-800)' : 'var(--text-primary)'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      {day.dayName}
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 800 }}>
                      {day.dayNum}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      {day.monthName}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rooms.map((room) => {
                const isDeluxe = room.category === 'Deluxe Luxury';

                return (
                  <tr key={room.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    {/* Sticky Room Info Header */}
                    <td
                      style={{
                        padding: '0.85rem 1rem',
                        position: 'sticky',
                        left: 0,
                        backgroundColor: '#FFFFFF',
                        zIndex: 2,
                        borderRight: '1px solid var(--border-light)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            backgroundColor: '#121820',
                            color: '#FFFFFF',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.5rem',
                            borderRadius: '4px'
                          }}
                        >
                          {room.roomNumber}
                        </span>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                            {room.name.split(' ')[0]} {room.name.split(' ')[1]}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: isDeluxe ? 'var(--gold-700)' : '#1E4E79', fontWeight: 500 }}>
                            {isDeluxe ? 'Deluxe' : 'Premium'}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Day Cells */}
                    {calendarDays.map((day) => {
                      const booking = getBookingForRoomDate(room.id, day.dateStr);
                      const isCheckInDay = booking && booking.checkIn === day.dateStr;
                      const isCheckOutDay = booking && booking.checkOut === day.dateStr;

                      return (
                        <td
                          key={day.dateStr}
                          style={{
                            padding: '4px',
                            borderRight: '1px solid var(--border-light)',
                            backgroundColor: day.isToday ? 'rgba(197, 168, 128, 0.05)' : 'transparent',
                            height: '56px',
                            verticalAlign: 'middle',
                            textAlign: 'center'
                          }}
                        >
                          {booking ? (
                            <div
                              onClick={() => setSelectedCellBooking(booking)}
                              style={{
                                height: '38px',
                                borderRadius: '4px',
                                backgroundColor:
                                  booking.status === 'checked_in'
                                    ? '#2563EB'
                                    : booking.status === 'confirmed'
                                    ? 'var(--gold-600)'
                                    : '#4B5563',
                                color: '#FFFFFF',
                                fontSize: '0.72rem',
                                padding: '2px 4px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}
                              title={`Booking #${booking.id} - ${booking.guestName} (${booking.checkIn} to ${booking.checkOut})`}
                            >
                              <span style={{ fontWeight: 700, fontSize: '0.72rem' }}>
                                {isCheckInDay ? '▶ In: ' : ''}{booking.guestName.split(' ')[0]}
                              </span>
                              <span style={{ fontSize: '0.62rem', opacity: 0.85 }}>
                                #{booking.id.split('-')[2]}
                              </span>
                            </div>
                          ) : (
                            <div
                              style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'rgba(16, 185, 129, 0.4)',
                                fontSize: '0.7rem'
                              }}
                            >
                              —
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend & Selected Booking Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '3px', backgroundColor: 'var(--gold-600)' }} />
            Confirmed Stay
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '3px', backgroundColor: '#2563EB' }} />
            Checked In
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '3px', border: '1px dashed #CBD5E1' }} />
            Vacant / Open for Booking
          </div>
        </div>

        {selectedCellBooking && (
          <div
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'var(--gold-100)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--gold-300)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <span>
              Selected: <strong>{selectedCellBooking.guestName}</strong> (Room {selectedCellBooking.roomNumber}, {selectedCellBooking.checkIn} to {selectedCellBooking.checkOut})
            </span>
            <button
              onClick={() => setSelectedCellBooking(null)}
              style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-800)' }}
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
