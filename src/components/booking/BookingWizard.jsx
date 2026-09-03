// ==========================================================================
// WELCOME HOTEL - ADVANCED BOOKING SYSTEM WIZARD
// ==========================================================================

import React, { useState, useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { 
  getTodayStr, 
  getTomorrowStr, 
  addDays, 
  calculateNights, 
  isRoomAvailable 
} from '../../utils/dateUtils';
import { formatCurrency, BOOKING_ADDONS } from '../../utils/helpers';
import { 
  Calendar, 
  Users, 
  Home, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Bed, 
  Tag, 
  Plus, 
  Check,
  Building2,
  Lock,
  Sparkles
} from 'lucide-react';

export const BookingWizard = () => {
  const { 
    rooms, 
    bookings, 
    createBooking, 
    hotelInfo, 
    currentUser, 
    bookingWizard, 
    updateWizard,
    navigateTo 
  } = useHotel();

  // Wizard state unpacked
  const { 
    step, 
    checkIn, 
    checkOut, 
    adults, 
    children, 
    category, 
    selectedRoomId, 
    addOns, 
    guestInfo, 
    paymentMethod, 
    promoCode, 
    discount 
  } = bookingWizard;

  // Local card state for online payment simulation
  const [cardData, setCardData] = useState({
    cardNumber: '4532 •••• •••• 8912',
    cardName: guestInfo.fullName || 'Valued Guest',
    cardExpiry: '12/28',
    cardCvv: '•••'
  });
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [formError, setFormError] = useState('');

  // Selected room object
  const selectedRoom = rooms.find((r) => r.id === selectedRoomId);

  // Nights calculation
  const nights = calculateNights(checkIn, checkOut);
  const baseRoomTotal = selectedRoom ? selectedRoom.price * nights : 0;

  // Addons Total
  const addOnsTotal = addOns.reduce((sum, addonId) => {
    const item = BOOKING_ADDONS.find((a) => a.id === addonId);
    if (!item) return sum;
    if (item.type === 'per_night_per_guest') {
      return sum + item.pricePerNight * nights * (adults + children);
    }
    return sum + item.pricePerNight;
  }, 0);

  const subTotalBeforeDiscount = baseRoomTotal + addOnsTotal;
  const discountAmount = discount > 0 ? (discount <= 1 ? subTotalBeforeDiscount * discount : discount) : 0;
  const taxableAmount = Math.max(0, subTotalBeforeDiscount - discountAmount);
  const taxRate = hotelInfo.taxRate || 0.12;
  const taxAmount = taxableAmount * taxRate;
  const finalTotal = taxableAmount + taxAmount;

  // Overlap verification for current selection
  const isSelectedRoomAvailable = selectedRoom
    ? isRoomAvailable(selectedRoom.id, checkIn, checkOut, bookings)
    : false;

  // Handle Promo Code
  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    const code = promoInput.trim().toUpperCase();

    if (code === 'WELCOME10') {
      updateWizard({ promoCode: code, discount: 0.1 }); // 10%
      setPromoSuccess('Promo code WELCOME10 applied! 10% discount applied.');
    } else if (code === 'LUXURY50') {
      updateWizard({ promoCode: code, discount: 50 }); // $50 flat
      setPromoSuccess('Promo code LUXURY50 applied! $50 discount applied.');
    } else {
      setPromoError('Invalid promo code. Try "WELCOME10" or "LUXURY50".');
    }
  };

  // Toggle Addon
  const toggleAddon = (addonId) => {
    if (addOns.includes(addonId)) {
      updateWizard({ addOns: addOns.filter((id) => id !== addonId) });
    } else {
      updateWizard({ addOns: [...addOns, addonId] });
    }
  };

  // Step Validation Handlers
  const handleStep1Next = () => {
    if (!checkIn || !checkOut) {
      setFormError('Please select both Check-In and Check-Out dates.');
      return;
    }
    setFormError('');
    updateWizard({ step: 2 });
  };

  const handleStep2SelectRoom = (room) => {
    updateWizard({
      selectedRoomId: room.id,
      selectedRoom: room,
      step: 3
    });
  };

  const handleStep3Next = () => {
    updateWizard({ step: 4 });
  };

  const handleStep4Next = () => {
    if (!guestInfo.fullName || !guestInfo.email || !guestInfo.phone) {
      setFormError('Please fill in your Full Name, Email, and Phone Number.');
      return;
    }
    setFormError('');
    updateWizard({ step: 5 });
  };

  const handleFinalPaymentSubmit = (e) => {
    e.preventDefault();

    // Prevent double booking at execution time
    if (!isRoomAvailable(selectedRoom.id, checkIn, checkOut, bookings)) {
      alert(`We are sorry! Room ${selectedRoom.roomNumber} was just booked for overlapping dates by another guest. Please select an alternative room.`);
      updateWizard({ step: 2 });
      return;
    }

    const newBooking = createBooking({
      guestId: currentUser?.id || `guest-${Date.now()}`,
      guestName: guestInfo.fullName,
      guestEmail: guestInfo.email,
      guestPhone: guestInfo.phone,
      guestAddress: guestInfo.address || 'Standard Guest',
      roomId: selectedRoom.id,
      roomNumber: selectedRoom.roomNumber,
      roomCategory: selectedRoom.category,
      roomName: selectedRoom.name,
      checkIn,
      checkOut,
      nights,
      adults,
      children,
      pricePerNight: selectedRoom.price,
      roomTotal: baseRoomTotal,
      tax: taxAmount,
      addOnsTotal,
      addOns: addOns.map((id) => BOOKING_ADDONS.find((a) => a.id === id)?.name).filter(Boolean),
      discount: discountAmount,
      promoCode: promoCode || null,
      totalAmount: finalTotal,
      paymentMethod,
      paymentStatus: paymentMethod === 'online' ? 'paid' : 'pending_hotel',
      specialRequests: guestInfo.specialRequests || ''
    });
  };

  return (
    <div style={{ padding: '3.5rem 0 6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        {/* Wizard Step Progress Header */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <span className="section-tag">
            <Sparkles size={14} /> Step-By-Step Reservation
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.5rem' }}>
            Book Your Stay at Welcome Hotel
          </h1>

          {/* Steps Indicator Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '720px',
              margin: '0 auto',
              padding: '0 1rem'
            }}
          >
            {[
              { num: 1, label: 'Dates & Guests' },
              { num: 2, label: 'Select Room' },
              { num: 3, label: 'Add-Ons' },
              { num: 4, label: 'Guest Details' },
              { num: 5, label: 'Payment & Summary' }
            ].map((st, idx) => (
              <React.Fragment key={st.num}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: step > st.num ? 'pointer' : 'default'
                  }}
                  onClick={() => step > st.num && updateWizard({ step: st.num })}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor:
                        step === st.num
                          ? 'var(--gold-600)'
                          : step > st.num
                          ? 'var(--success)'
                          : 'var(--bg-secondary)',
                      color: step >= st.num ? '#FFFFFF' : 'var(--text-secondary)',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      border: '2px solid',
                      borderColor:
                        step === st.num
                          ? 'var(--gold-500)'
                          : step > st.num
                          ? 'var(--success)'
                          : 'var(--border-light)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {step > st.num ? <Check size={18} /> : st.num}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: step === st.num ? 700 : 500,
                      color: step === st.num ? 'var(--gold-800)' : 'var(--text-muted)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {st.label}
                  </span>
                </div>

                {idx < 4 && (
                  <div
                    style={{
                      flex: 1,
                      height: '2px',
                      backgroundColor: step > idx + 1 ? 'var(--success)' : 'var(--border-light)',
                      margin: '0 0.5rem 1.25rem 0.5rem'
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {formError && (
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto 1.5rem auto',
              backgroundColor: 'var(--danger-bg)',
              color: 'var(--danger)',
              padding: '0.85rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <AlertCircle size={18} /> {formError}
          </div>
        )}

        {/* STEP 1: DATES & GUESTS */}
        {step === 1 && (
          <div
            className="card"
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>
              Step 1: Select Stay Dates & Guests
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Choose your arrival and departure dates to check real-time availability across all 10 hotel rooms.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 600 }}>
                  Check-In Date *
                </label>
                <input
                  type="date"
                  min={getTodayStr()}
                  value={checkIn}
                  onChange={(e) => {
                    const val = e.target.value;
                    updateWizard({ checkIn: val });
                    if (val >= checkOut) {
                      updateWizard({ checkIn: val, checkOut: addDays(val, 1) });
                    }
                  }}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 600 }}>
                  Check-Out Date *
                </label>
                <input
                  type="date"
                  min={addDays(checkIn, 1)}
                  value={checkOut}
                  onChange={(e) => updateWizard({ checkOut: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 600 }}>
                  Adults (Ages 13+)
                </label>
                <select
                  value={adults}
                  onChange={(e) => updateWizard({ adults: Number(e.target.value) })}
                  className="form-select"
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults (Requires Deluxe Suite)</option>
                  <option value={4}>4 Adults (Requires 2 Rooms)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 600 }}>
                  Children (Ages 0-12)
                </label>
                <select
                  value={children}
                  onChange={(e) => updateWizard({ children: Number(e.target.value) })}
                  className="form-select"
                >
                  <option value={0}>0 Children</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                </select>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.9rem'
              }}
            >
              <span>Total Duration of Stay:</span>
              <strong>{nights} {nights === 1 ? 'Night' : 'Nights'}</strong>
            </div>

            <button
              onClick={handleStep1Next}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '1rem', fontWeight: 600 }}
            >
              Check Available Rooms <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 2: SELECT AVAILABLE ROOM */}
        {step === 2 && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                  Step 2: Choose Your Room
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Availability for <strong>{checkIn}</strong> to <strong>{checkOut}</strong> ({nights} {nights === 1 ? 'Night' : 'Nights'}, {adults} Adults{children > 0 ? `, ${children} Children` : ''})
                </p>
              </div>

              <button onClick={() => updateWizard({ step: 1 })} className="btn btn-secondary btn-sm">
                <ArrowLeft size={14} /> Change Dates
              </button>
            </div>

            {/* Room Category Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {['all', 'Deluxe Luxury', 'Premium'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => updateWizard({ category: cat })}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    backgroundColor: category === cat ? '#121820' : '#FFFFFF',
                    color: category === cat ? '#FFFFFF' : 'var(--text-primary)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  {cat === 'all' ? 'All 10 Rooms' : cat}
                </button>
              ))}
            </div>

            {/* Rooms Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {rooms
                .filter((r) => category === 'all' || r.category === category)
                .map((room) => {
                  const isAvailable = isRoomAvailable(room.id, checkIn, checkOut, bookings);
                  const isDeluxe = room.category === 'Deluxe Luxury';

                  return (
                    <div
                      key={room.id}
                      className="card"
                      style={{
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-lg)',
                        border: isAvailable
                          ? selectedRoomId === room.id
                            ? '2px solid var(--gold-500)'
                            : '1px solid var(--border-light)'
                          : '1px solid #E5E7EB',
                        backgroundColor: isAvailable ? '#FFFFFF' : '#F9FAFB',
                        opacity: isAvailable ? 1 : 0.6,
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{ position: 'relative', height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
                        <img
                          src={room.image}
                          alt={room.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', top: '0.65rem', left: '0.65rem' }}>
                          <span style={{ backgroundColor: '#121820', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                            ROOM {room.roomNumber}
                          </span>
                        </div>
                        <div style={{ position: 'absolute', top: '0.65rem', right: '0.65rem' }}>
                          {isAvailable ? (
                            <span className="badge badge-available">
                              <CheckCircle2 size={11} /> Available
                            </span>
                          ) : (
                            <span className="badge badge-booked">
                              <AlertCircle size={11} /> Booked
                            </span>
                          )}
                        </div>
                      </div>

                      <h4 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{room.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                        {room.bedType} • Max {room.maxGuests} Guests • {room.size}
                      </p>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
                        <div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>
                            {formatCurrency(room.price)}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {formatCurrency(room.price * nights)} total for {nights} {nights === 1 ? 'nt' : 'nts'}
                          </div>
                        </div>

                        <button
                          onClick={() => handleStep2SelectRoom(room)}
                          disabled={!isAvailable}
                          className={selectedRoomId === room.id ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
                          style={{
                            fontWeight: 600,
                            cursor: !isAvailable ? 'not-allowed' : 'pointer'
                          }}
                        >
                          {isAvailable ? 'Select Room' : 'Unavailable'}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* STEP 3: CUSTOMIZE & ADD-ONS */}
        {step === 3 && selectedRoom && (
          <div
            className="card"
            style={{
              maxWidth: '740px',
              margin: '0 auto',
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.35rem' }}>
                  Step 3: Enhance Your Experience (Add-Ons)
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Selected: <strong>Room {selectedRoom.roomNumber} - {selectedRoom.name}</strong> ({formatCurrency(selectedRoom.price)}/night)
                </p>
              </div>
              <button onClick={() => updateWizard({ step: 2 })} className="btn btn-secondary btn-sm">
                Change Room
              </button>
            </div>

            {/* Addons List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {BOOKING_ADDONS.map((addon) => {
                const isSelected = addOns.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    style={{
                      padding: '1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: isSelected ? '1.5px solid var(--gold-500)' : '1px solid var(--border-light)',
                      backgroundColor: isSelected ? 'var(--gold-50)' : '#FFFFFF',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '4px',
                          border: isSelected ? '1px solid var(--gold-600)' : '1px solid var(--border-light)',
                          backgroundColor: isSelected ? 'var(--gold-600)' : '#FFFFFF',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '2px',
                          flexShrink: 0
                        }}
                      >
                        {isSelected && <Check size={16} />}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {addon.name}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          {addon.description}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                      <div style={{ fontWeight: 700, color: 'var(--gold-700)', fontSize: '1rem' }}>
                        +{formatCurrency(addon.pricePerNight)}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {addon.type === 'per_night_per_guest' ? '/guest/night' : 'one-time'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <button onClick={() => updateWizard({ step: 2 })} className="btn btn-secondary">
                <ArrowLeft size={16} /> Back
              </button>
              <button onClick={handleStep3Next} className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                Continue to Guest Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: GUEST INFORMATION */}
        {step === 4 && selectedRoom && (
          <div
            className="card"
            style={{
              maxWidth: '740px',
              margin: '0 auto',
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>
              Step 4: Primary Guest Contact Information
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Please provide the details of the main guest checking into Room {selectedRoom.roomNumber}.
            </p>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600 }}>
                Full Legal Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Jonathan Reynolds"
                value={guestInfo.fullName}
                onChange={(e) => updateWizard({ guestInfo: { ...guestInfo, fullName: e.target.value } })}
                className="form-input"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 600 }}>
                  Email Address * (For Confirmation)
                </label>
                <input
                  type="email"
                  required
                  placeholder="jonathan@example.com"
                  value={guestInfo.email}
                  onChange={(e) => updateWizard({ guestInfo: { ...guestInfo, email: e.target.value } })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 600 }}>
                  Phone Number * (With Country Code)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={guestInfo.phone}
                  onChange={(e) => updateWizard({ guestInfo: { ...guestInfo, phone: e.target.value } })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600 }}>
                Billing / Residential Address
              </label>
              <input
                type="text"
                placeholder="Street address, City, Country, ZIP"
                value={guestInfo.address}
                onChange={(e) => updateWizard({ guestInfo: { ...guestInfo, address: e.target.value } })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontWeight: 600 }}>
                Special Requests or Arrival Notes (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Quiet room preferred, arriving after 6 PM, extra feather pillows..."
                value={guestInfo.specialRequests}
                onChange={(e) => updateWizard({ guestInfo: { ...guestInfo, specialRequests: e.target.value } })}
                className="form-textarea"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={() => updateWizard({ step: 3 })} className="btn btn-secondary">
                <ArrowLeft size={16} /> Back
              </button>
              <button onClick={handleStep4Next} className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                Review Summary & Payment <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: BOOKING SUMMARY & PAYMENT */}
        {step === 5 && selectedRoom && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Payment Method Selection */}
            <div
              className="card"
              style={{
                padding: '2.5rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>
                Step 5: Select Payment Method
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                Choose your preferred payment method to guarantee your boutique room reservation.
              </p>

              {/* Payment Method Radio Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {/* Option 1: Pay Online */}
                <div
                  onClick={() => updateWizard({ paymentMethod: 'online' })}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: paymentMethod === 'online' ? '2px solid var(--gold-500)' : '1px solid var(--border-light)',
                    backgroundColor: paymentMethod === 'online' ? 'var(--gold-50)' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                      <CreditCard size={18} color="var(--gold-600)" />
                      <span>Pay Online (Card / UPI / Digital Wallets)</span>
                    </div>
                    {paymentMethod === 'online' && <CheckCircle2 size={18} color="var(--gold-600)" />}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Integration-ready simulated payment gateway with instant booking confirmation.
                  </p>
                </div>

                {/* Option 2: Pay at Hotel */}
                <div
                  onClick={() => updateWizard({ paymentMethod: 'hotel' })}
                  style={{
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: paymentMethod === 'hotel' ? '2px solid var(--gold-500)' : '1px solid var(--border-light)',
                    backgroundColor: paymentMethod === 'hotel' ? 'var(--gold-50)' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                      <Building2 size={18} color="var(--gold-600)" />
                      <span>Pay at Hotel Reception</span>
                    </div>
                    {paymentMethod === 'hotel' && <CheckCircle2 size={18} color="var(--gold-600)" />}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Pay upon arrival during check-in using cash, debit, or credit card.
                  </p>
                </div>
              </div>

              {/* Online Card Simulation Form */}
              {paymentMethod === 'online' && (
                <div
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '2rem',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Lock size={13} color="var(--success)" /> 256-Bit Encrypted Card Details
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Demo Ready</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ fontSize: '0.78rem' }}>Card Number</label>
                    <input
                      type="text"
                      value={cardData.cardNumber}
                      onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label className="form-label" style={{ fontSize: '0.78rem' }}>Cardholder Name</label>
                      <input
                        type="text"
                        value={cardData.cardName}
                        onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label" style={{ fontSize: '0.78rem' }}>Expiry Date & CVV</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        <input
                          type="text"
                          value={cardData.cardExpiry}
                          onChange={(e) => setCardData({ ...cardData, cardExpiry: e.target.value })}
                          className="form-input"
                        />
                        <input
                          type="password"
                          value={cardData.cardCvv}
                          onChange={(e) => setCardData({ ...cardData, cardCvv: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} style={{ marginBottom: '2rem' }}>
                <label className="form-label" style={{ fontWeight: 600, fontSize: '0.85rem' }}>
                  Have a Promo Code? (Try "WELCOME10" or "LUXURY50")
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Enter Code"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="form-input"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  />
                  <button type="submit" className="btn btn-secondary btn-sm" style={{ padding: '0 1.25rem' }}>
                    Apply
                  </button>
                </div>
                {promoSuccess && (
                  <div style={{ color: 'var(--success)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {promoSuccess}
                  </div>
                )}
                {promoError && (
                  <div style={{ color: 'var(--danger)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                    {promoError}
                  </div>
                )}
              </form>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => updateWizard({ step: 4 })} className="btn btn-secondary">
                  <ArrowLeft size={16} /> Back
                </button>
                <button
                  onClick={handleFinalPaymentSubmit}
                  className="btn btn-primary"
                  style={{ flex: 1, fontSize: '1.05rem', fontWeight: 600 }}
                >
                  <Lock size={16} /> Confirm & Book Stay ({formatCurrency(finalTotal)})
                </button>
              </div>
            </div>

            {/* Right: Detailed Breakdown Summary */}
            <div
              className="card"
              style={{
                padding: '2rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(197, 168, 128, 0.35)'
              }}
            >
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                Reservation Summary
              </h4>

              {/* Room Card Preview */}
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  style={{ width: '80px', height: '60px', borderRadius: '6px', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    Room {selectedRoom.roomNumber} - {selectedRoom.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {selectedRoom.category}
                  </div>
                </div>
              </div>

              {/* Dates & Guest Breakdown */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontSize: '0.88rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-light)',
                  marginBottom: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Check-In:</span>
                  <strong>{checkIn} (3:00 PM)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Check-Out:</span>
                  <strong>{checkOut} (11:00 AM)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Length of Stay:</span>
                  <strong>{nights} {nights === 1 ? 'Night' : 'Nights'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Guests:</span>
                  <strong>{adults} Adults{children > 0 ? `, ${children} Children` : ''}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Primary Guest:</span>
                  <strong>{guestInfo.fullName}</strong>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Room Rate ({formatCurrency(selectedRoom.price)} × {nights} nts)</span>
                  <span>{formatCurrency(baseRoomTotal)}</span>
                </div>

                {addOnsTotal > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Selected Add-Ons ({addOns.length})</span>
                    <span>+{formatCurrency(addOnsTotal)}</span>
                  </div>
                )}

                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--success)' }}>
                    <span>Promo Discount ({promoCode})</span>
                    <span>-{formatCurrency(discountAmount)}</span>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Hotel Tax & VAT ({Math.round(taxRate * 100)}%)</span>
                  <span>{formatCurrency(taxAmount)}</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: 'var(--text-primary)',
                    borderTop: '1.5px solid var(--border-light)',
                    paddingTop: '1rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <span>Total Amount</span>
                  <span style={{ color: 'var(--gold-700)', fontFamily: 'var(--font-serif)' }}>
                    {formatCurrency(finalTotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
