// ==========================================================================
// WELCOME HOTEL - TABLE RESERVATION MODAL
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { getTodayStr } from '../../utils/dateUtils';
import { X, UtensilsCrossed, Calendar, Clock, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const TableReservationModal = ({ isOpen, onClose }) => {
  const { createTableReservation, currentUser } = useHotel();
  const [name, setName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [date, setDate] = useState(getTodayStr());
  const [time, setTime] = useState('7:30 PM');
  const [guests, setGuests] = useState(2);
  const [seating, setSeating] = useState('Main Dining Hall');
  const [requests, setRequests] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = createTableReservation({
      name,
      email,
      phone,
      date,
      time,
      guests: Number(guests),
      seating,
      requests
    });
    setConfirmedReservation(res);
  };

  const handleClose = () => {
    setConfirmedReservation(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="card"
        style={{
          width: '100%',
          maxWidth: '540px',
          padding: '2.5rem',
          backgroundColor: '#FFFFFF',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        {confirmedReservation ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--success-bg)',
                color: 'var(--success)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
              Table Reservation Confirmed!
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              We look forward to welcoming you to The Welcome Fine Dining Room.
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                textAlign: 'left',
                marginBottom: '1.75rem',
                fontSize: '0.9rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div><strong>Reservation ID:</strong> {confirmedReservation.id}</div>
              <div><strong>Guest Name:</strong> {confirmedReservation.name}</div>
              <div><strong>Date & Time:</strong> {confirmedReservation.date} at {confirmedReservation.time}</div>
              <div><strong>Party Size:</strong> {confirmedReservation.guests} Guests ({confirmedReservation.seating})</div>
            </div>

            <button onClick={handleClose} className="btn btn-primary" style={{ width: '100%' }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--gold-100)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-700)',
                  marginBottom: '0.75rem'
                }}
              >
                <UtensilsCrossed size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>Reserve a Dining Table</h3>
              <p style={{ fontSize: '0.88rem' }}>
                Book your table at Welcome Hotel's award-winning restaurant.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Date *</label>
                  <input
                    type="date"
                    required
                    min={getTodayStr()}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Time Slot *</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-select"
                  >
                    <option value="8:00 AM">8:00 AM (Breakfast)</option>
                    <option value="9:30 AM">9:30 AM (Breakfast)</option>
                    <option value="1:00 PM">1:00 PM (Lunch)</option>
                    <option value="2:30 PM">2:30 PM (Lunch)</option>
                    <option value="7:00 PM">7:00 PM (Dinner)</option>
                    <option value="7:30 PM">7:30 PM (Dinner)</option>
                    <option value="8:30 PM">8:30 PM (Dinner)</option>
                    <option value="9:30 PM">9:30 PM (Dinner)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Number of Guests *</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="form-select"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5 Guests</option>
                    <option value={6}>6+ Guests (Private Booth)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Seating Preference</label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="form-select"
                  >
                    <option value="Main Dining Hall">Main Candlelit Hall</option>
                    <option value="Terrace Fountain View">Terrace Fountain View</option>
                    <option value="Private Luxury Booth">Private Luxury Booth</option>
                    <option value="Wine Cellar Lounge">Wine Cellar Lounge</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Dietary or Occasion Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Celebrating anniversary, gluten intolerance..."
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.75rem', fontSize: '1rem' }}
              >
                Confirm Table Reservation <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
