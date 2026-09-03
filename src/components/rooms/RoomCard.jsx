// ==========================================================================
// WELCOME HOTEL - ROOM CARD COMPONENT
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { isRoomAvailable } from '../../utils/dateUtils';
import { formatCurrency } from '../../utils/helpers';
import { 
  Users, 
  Bed, 
  Maximize2, 
  Wifi, 
  Tv, 
  Coffee, 
  Bath, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  Calendar,
  Sparkles
} from 'lucide-react';

export const RoomCard = ({ room, checkIn, checkOut }) => {
  const { bookings, openRoomDetail, startBookingFlow, openLightbox } = useHotel();

  const isAvailable = isRoomAvailable(room.id, checkIn, checkOut, bookings);
  const isDeluxe = room.category === 'Deluxe Luxury';

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-lg)',
        border: isDeluxe ? '1px solid rgba(197, 168, 128, 0.4)' : '1px solid var(--border-light)',
        boxShadow: isDeluxe ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
        height: '100%'
      }}
    >
      {/* Image Container */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <img
          src={room.image}
          alt={room.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            cursor: 'pointer',
            transition: 'transform 0.4s ease'
          }}
          onClick={() => openLightbox(room.gallery || [room.image], 0, `Room ${room.roomNumber} - ${room.name}`)}
        />

        {/* Room Number & Category Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            gap: '0.5rem'
          }}
        >
          <span
            style={{
              backgroundColor: '#121820',
              color: '#FFFFFF',
              fontSize: '0.78rem',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-sm)',
              letterSpacing: '0.05em'
            }}
          >
            ROOM {room.roomNumber}
          </span>

          <span
            className={isDeluxe ? 'badge badge-deluxe' : 'badge badge-premium'}
            style={{ fontSize: '0.75rem' }}
          >
            {room.category}
          </span>
        </div>

        {/* Availability Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem'
          }}
        >
          {room.status === 'maintenance' ? (
            <span className="badge badge-booked">Maintenance</span>
          ) : isAvailable ? (
            <span className="badge badge-available" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <CheckCircle2 size={12} /> Available
            </span>
          ) : (
            <span className="badge badge-booked" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <AlertCircle size={12} /> Booked for Dates
            </span>
          )}
        </div>

        {/* Price Pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(18, 24, 32, 0.88)',
            backdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            padding: '0.4rem 0.85rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(197, 168, 128, 0.3)'
          }}
        >
          <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-serif)' }}>
            {formatCurrency(room.price)}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}> / night</span>
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          style={{
            fontSize: '1.3rem',
            marginBottom: '0.5rem',
            color: 'var(--text-primary)',
            lineHeight: 1.3
          }}
        >
          {room.name}
        </h3>

        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '1.25rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {room.description}
        </p>

        {/* Key Specs Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
            padding: '0.75rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1.25rem',
            fontSize: '0.8rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
            <Users size={14} color="var(--gold-600)" /> Max {room.maxGuests} Guests
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
            <Bed size={14} color="var(--gold-600)" /> {room.bedType.split(' ')[0]} {room.bedType.split(' ')[1] || 'Bed'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
            <Maximize2 size={14} color="var(--gold-600)" /> {room.size}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
            <Sparkles size={14} color="var(--gold-600)" /> {room.view.split(' ')[0]} View
          </div>
        </div>

        {/* Amenity tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '1.5rem'
          }}
        >
          {room.amenities.slice(0, 4).map((amenity, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.72rem',
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px'
              }}
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--gold-700)',
                fontWeight: 600,
                padding: '0.2rem 0.35rem'
              }}
            >
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Buttons: View Details & Book Now */}
        <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
          <button
            onClick={() => openRoomDetail(room)}
            className="btn btn-secondary btn-sm"
            style={{ fontWeight: 500 }}
          >
            <Eye size={14} /> View Details
          </button>

          <button
            onClick={() => {
              if (room.status === 'maintenance') {
                alert('This room is currently undergoing scheduled maintenance.');
                return;
              }
              startBookingFlow({
                step: 3, // Addons / Guest info
                roomId: room.id,
                category: room.category,
                checkIn: checkIn || undefined,
                checkOut: checkOut || undefined
              });
            }}
            disabled={room.status === 'maintenance' || !isAvailable}
            className="btn btn-primary btn-sm"
            style={{
              fontWeight: 600,
              opacity: room.status === 'maintenance' || !isAvailable ? 0.6 : 1,
              cursor: room.status === 'maintenance' || !isAvailable ? 'not-allowed' : 'pointer'
            }}
          >
            <Calendar size={14} /> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
