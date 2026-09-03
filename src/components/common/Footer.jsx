// ==========================================================================
// WELCOME HOTEL - FOOTER
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { 
  Hotel, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Footer = () => {
  const { navigateTo, hotelInfo, startBookingFlow } = useHotel();

  return (
    <footer
      style={{
        backgroundColor: '#121820',
        color: '#E0E6ED',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(197, 168, 128, 0.25)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  background: 'var(--gold-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Hotel size={22} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-brand)',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#FFFFFF'
                  }}
                >
                  WELCOME
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.28em',
                    color: 'var(--gold-400)',
                    fontWeight: 600
                  }}
                >
                  HOTEL & SUITES
                </div>
              </div>
            </div>

            <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Comfort, Luxury & Hospitality. An exclusive 10-room boutique sanctuary crafted for discerning travelers seeking tranquil luxury and world-class culinary excellence.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span className="badge badge-deluxe" style={{ fontSize: '0.75rem' }}>
                5 Deluxe Suites
              </span>
              <span className="badge badge-premium" style={{ fontSize: '0.75rem' }}>
                5 Premium Rooms
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Explore Rooms & Suites', page: 'rooms' },
                { label: 'Restaurant & Digital Menu', page: 'restaurant' },
                { label: 'About Our Heritage', page: 'about' },
                { label: 'Photo & Video Gallery', page: 'gallery' },
                { label: 'Contact & Directions', page: 'contact' },
                { label: 'Guest Account Portal', page: 'guest-account' }
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    style={{
                      color: '#9CA3AF',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#C5A880')}
                    onMouseLeave={(e) => (e.target.style.color = '#9CA3AF')}
                  >
                    <ArrowRight size={13} color="#C5A880" /> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              Contact & Location
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#C5A880" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#9CA3AF' }}>{hotelInfo.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="#C5A880" style={{ flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{hotelInfo.phone}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="#C5A880" style={{ flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>{hotelInfo.email}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Clock size={18} color="#C5A880" style={{ flexShrink: 0 }} />
                <span style={{ color: '#9CA3AF' }}>
                  Check-in: {hotelInfo.checkInTime} | Check-out: {hotelInfo.checkOutTime}
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter / Direct Booking Guarantee */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.15rem',
                marginBottom: '1.25rem',
                letterSpacing: '0.04em'
              }}
            >
              Best Rate Direct Guarantee
            </h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.88rem', marginBottom: '1rem' }}>
              Book directly on our official website for guaranteed room allocation, best rates, and complimentary welcome amenities.
            </p>
            <button
              onClick={() => startBookingFlow()}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '0.9rem' }}
            >
              Check Live Availability
            </button>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.78rem' }}>
              <ShieldCheck size={14} color="#10B981" /> 256-Bit SSL Encrypted Instant Reservation
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#6B7280'
          }}
        >
          <div>
            © {new Date().getFullYear()} WELCOME HOTEL. All Rights Reserved. Designed for elegance & speed.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button
              onClick={() => navigateTo('admin')}
              style={{ color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <ShieldCheck size={14} color="#C5A880" /> Admin Access
            </button>
            <button onClick={() => navigateTo('contact')} style={{ color: '#9CA3AF' }}>
              Privacy & Policies
            </button>
            <button onClick={() => navigateTo('contact')} style={{ color: '#9CA3AF' }}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
