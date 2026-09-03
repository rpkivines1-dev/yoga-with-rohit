// ==========================================================================
// WELCOME HOTEL - CONTACT & DIRECTIONS PAGE
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Navigation, 
  CheckCircle2, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const ContactSection = () => {
  const { hotelInfo, addToast } = useHotel();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Thank you! Your message has been sent to our concierge desk.', 'success');
  };

  return (
    <div style={{ padding: '4rem 0 6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} /> Get In Touch
          </span>
          <h2>Contact & Concierge</h2>
          <p>
            Have an inquiry about room bookings, dietary requests, or special arrangements? Our concierge is available 24/7.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Left: Contact Info Cards */}
          <div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Hotel Direct Contacts</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div
                className="card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--gold-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-700)',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Hotel Address
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {hotelInfo.address}
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--gold-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-700)',
                    flexShrink: 0
                  }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Phone Numbers
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {hotelInfo.phone}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--gold-700)', marginTop: '0.25rem' }}>
                    Available 24 Hours Daily
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--gold-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-700)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                    Email Addresses
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    General: {hotelInfo.email}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Bookings: {hotelInfo.reservationEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="card"
            style={{
              padding: '2.5rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send Us a Message</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
              We will respond to your message promptly within 2 business hours.
            </p>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <CheckCircle2 size={48} color="var(--success)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Message Received</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you for reaching out to Welcome Hotel. Our concierge team is reviewing your message.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Catherine Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your inquiry or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '1rem', fontWeight: 600 }}
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Integration Placeholder & Get Directions */}
        <div
          className="card"
          style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(197, 168, 128, 0.4)'
          }}
        >
          <div
            style={{
              position: 'relative',
              height: '340px',
              backgroundColor: '#1E293B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `radial-gradient(circle at center, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.95) 100%), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#FFFFFF'
            }}
          >
            <div
              className="glass-card-dark"
              style={{
                padding: '2rem 2.5rem',
                textAlign: 'center',
                maxWidth: '480px',
                margin: '1.5rem',
                border: '1px solid rgba(197, 168, 128, 0.4)'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold-500)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '1rem'
                }}
              >
                <MapPin size={26} />
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginBottom: '0.35rem' }}>
                WELCOME HOTEL
              </h3>
              <p style={{ color: '#E2E8F0', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                {hotelInfo.address}
              </p>

              <a
                href={hotelInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Navigation size={16} /> Get Directions in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
