// ==========================================================================
// WELCOME HOTEL - ROOM DETAILS PAGE & MODAL
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { getTodayStr, getTomorrowStr, addDays, calculateNights, isRoomAvailable } from '../../utils/dateUtils';
import { formatCurrency } from '../../utils/helpers';
import { 
  ArrowLeft, 
  Users, 
  Bed, 
  Maximize2, 
  Sparkles, 
  Wifi, 
  Tv, 
  Coffee, 
  Bath, 
  ShieldCheck, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  Wind,
  Shirt,
  Utensils,
  Droplets,
  Layers
} from 'lucide-react';

export const RoomDetailView = ({ room, onBack }) => {
  const { bookings, startBookingFlow, openLightbox, navigateTo, hotelInfo } = useHotel();

  // Local Booking Panel State
  const [checkIn, setCheckIn] = useState(getTodayStr());
  const [checkOut, setCheckOut] = useState(getTomorrowStr());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  if (!room) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2>Room Not Found</h2>
        <button onClick={() => navigateTo('rooms')} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Back to Rooms
        </button>
      </div>
    );
  }

  const nights = calculateNights(checkIn, checkOut);
  const roomCost = room.price * nights;
  const taxes = roomCost * (hotelInfo.taxRate || 0.12);
  const totalPrice = roomCost + taxes;
  const isAvailable = isRoomAvailable(room.id, checkIn, checkOut, bookings);
  const isDeluxe = room.category === 'Deluxe Luxury';

  const galleryImages = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  // Amenities list with icons
  const amenityIcons = {
    'Free Wi-Fi': <Wifi size={18} color="var(--gold-600)" />,
    'High-Speed Wi-Fi (1 Gbps)': <Wifi size={18} color="var(--gold-600)" />,
    'Air Conditioning': <Wind size={18} color="var(--gold-600)" />,
    'Dual-Zone Climate Control AC': <Wind size={18} color="var(--gold-600)" />,
    'Silent Inverter AC': <Wind size={18} color="var(--gold-600)" />,
    'Smart TV': <Tv size={18} color="var(--gold-600)" />,
    '65" OLED 4K Smart TV': <Tv size={18} color="var(--gold-600)" />,
    '55" 4K Smart TV': <Tv size={18} color="var(--gold-600)" />,
    '50" Smart TV': <Tv size={18} color="var(--gold-600)" />,
    'Comfortable Bed': <Bed size={18} color="var(--gold-600)" />,
    'Royal King Feather Bed': <Bed size={18} color="var(--gold-600)" />,
    'Private Bathroom': <Bath size={18} color="var(--gold-600)" />,
    'Italian Marble Bathroom': <Bath size={18} color="var(--gold-600)" />,
    'Hot Water 24/7': <Droplets size={18} color="var(--gold-600)" />,
    '24/7 Hot Water & Rain Shower': <Droplets size={18} color="var(--gold-600)" />,
    'Room Service': <Utensils size={18} color="var(--gold-600)" />,
    '24-Hour In-Room Dining': <Utensils size={18} color="var(--gold-600)" />,
    'Daily Housekeeping': <Sparkles size={18} color="var(--gold-600)" />,
    'Daily Dedicated Housekeeping': <Sparkles size={18} color="var(--gold-600)" />,
    'Wardrobe': <Shirt size={18} color="var(--gold-600)" />,
    'Custom Walnut Wardrobe & Safe': <Shirt size={18} color="var(--gold-600)" />,
    'Complimentary Water': <Coffee size={18} color="var(--gold-600)" />,
    'Complimentary Mineral Water & Espresso Bar': <Coffee size={18} color="var(--gold-600)" />
  };

  return (
    <div style={{ padding: '3rem 0 6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Back navigation & Room Title Header */}
        <button
          onClick={onBack || (() => navigateTo('rooms'))}
          className="btn btn-secondary btn-sm"
          style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} /> Back to Rooms Catalog
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  backgroundColor: '#121820',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                ROOM {room.roomNumber}
              </span>
              <span className={isDeluxe ? 'badge badge-deluxe' : 'badge badge-premium'} style={{ fontSize: '0.85rem' }}>
                {room.category}
              </span>
              {room.status === 'maintenance' ? (
                <span className="badge badge-booked">Under Maintenance</span>
              ) : isAvailable ? (
                <span className="badge badge-available">
                  <CheckCircle2 size={13} /> Available for Selected Dates
                </span>
              ) : (
                <span className="badge badge-booked">
                  <AlertCircle size={13} /> Booked for Selected Dates
                </span>
              )}
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              {room.name}
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              {room.floor} • {room.view}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--gold-700)' }}>
              {formatCurrency(room.price)}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>per night + taxes</div>
          </div>
        </div>

        {/* Room Gallery Grid / Lightbox Trigger */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: galleryImages.length > 1 ? '1.5fr 1fr' : '1fr',
            gap: '1rem',
            marginBottom: '3rem',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {/* Main Large Image */}
          <div
            style={{ position: 'relative', height: '440px', cursor: 'pointer', overflow: 'hidden' }}
            onClick={() => openLightbox(galleryImages, 0, `Room ${room.roomNumber} - ${room.name}`)}
          >
            <img
              src={galleryImages[0]}
              alt={room.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(14, 22, 34, 0.75)',
                color: '#FFFFFF',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8rem',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Maximize2 size={13} /> Click to View Fullscreen Gallery ({galleryImages.length} Photos)
            </div>
          </div>

          {/* Sub Thumbnails */}
          {galleryImages.length > 1 && (
            <div style={{ display: 'grid', gridTemplateRows: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
              {galleryImages.slice(1, 3).map((imgUrl, idx) => (
                <div
                  key={idx}
                  style={{ position: 'relative', height: '210px', cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => openLightbox(galleryImages, idx + 1, `Room ${room.roomNumber} - ${room.name}`)}
                >
                  <img
                    src={imgUrl}
                    alt={`${room.name} ${idx + 2}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Two-Column Layout: Left Specs & Amenities, Right Sticky Booking Panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Room Details & Amenities */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Description */}
            <div className="card" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Room Overview</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                {room.description}
              </p>

              {/* Specs Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    Room Number
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>Room {room.roomNumber}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    Room Category
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{room.category}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    Room Size
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{room.size}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    Bed Configuration
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{room.bedType}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    Max Guests
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>Up to {room.maxGuests} Guests</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                    Floor Location
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>{room.floor}</div>
                </div>
              </div>
            </div>

            {/* Comprehensive Amenities Grid */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Suite Amenities & Features</h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-main)'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      {amenityIcons[amenity] || <Sparkles size={16} color="var(--gold-600)" />}
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Panel */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div
              className="card"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(197, 168, 128, 0.4)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-light)' }}>
                <div>
                  <span style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                    {formatCurrency(room.price)}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}> / night</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-700)', fontWeight: 600 }}>
                  ★ 5.0 (Boutique)
                </div>
              </div>

              {/* Dates */}
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  Check-In Date
                </label>
                <input
                  type="date"
                  min={getTodayStr()}
                  value={checkIn}
                  onChange={(e) => {
                    const v = e.target.value;
                    setCheckIn(v);
                    if (v >= checkOut) {
                      setCheckOut(addDays(v, 1));
                    }
                  }}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  Check-Out Date ({nights} {nights === 1 ? 'Night' : 'Nights'})
                </label>
                <input
                  type="date"
                  min={addDays(checkIn, 1)}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Guests */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="form-select"
                  >
                    <option value={1}>1 Adult</option>
                    <option value={2}>2 Adults</option>
                    {room.maxGuests >= 3 && <option value={3}>3 Adults</option>}
                  </select>
                </div>

                <div>
                  <label className="form-label" style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                    Children
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="form-select"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                  </select>
                </div>
              </div>

              {/* Availability Alert */}
              <div style={{ marginBottom: '1.5rem' }}>
                {room.status === 'maintenance' ? (
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--danger-bg)', color: 'var(--danger)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem' }}>
                    Room 101 is undergoing scheduled maintenance.
                  </div>
                ) : isAvailable ? (
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--success-bg)', color: 'var(--success)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} /> Room {room.roomNumber} is Available for these dates!
                  </div>
                ) : (
                  <div style={{ padding: '0.75rem', backgroundColor: 'var(--danger-bg)', color: 'var(--danger)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={16} /> Room {room.roomNumber} is booked for these dates. Please choose different dates.
                  </div>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div
                style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1.25rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  fontSize: '0.9rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>{formatCurrency(room.price)} × {nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                  <span>{formatCurrency(roomCost)}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Hotel Tax & VAT (12%)</span>
                  <span>{formatCurrency(taxes)}</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: 'var(--text-primary)',
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '0.75rem',
                    marginTop: '0.35rem'
                  }}
                >
                  <span>Total Due</span>
                  <span style={{ color: 'var(--gold-700)', fontFamily: 'var(--font-serif)' }}>
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  startBookingFlow({
                    step: 3, // Addons & Guest info
                    roomId: room.id,
                    category: room.category,
                    checkIn,
                    checkOut,
                    adults,
                    children
                  });
                }}
                disabled={room.status === 'maintenance' || !isAvailable}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  opacity: room.status === 'maintenance' || !isAvailable ? 0.6 : 1,
                  cursor: room.status === 'maintenance' || !isAvailable ? 'not-allowed' : 'pointer'
                }}
              >
                <Calendar size={18} /> Book This Room
              </button>

              <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={14} color="var(--success)" /> Guaranteed Instant Official Reservation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
