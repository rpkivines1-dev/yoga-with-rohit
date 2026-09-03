// ==========================================================================
// WELCOME HOTEL - FINAL CALL TO ACTION BANNER
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { Calendar, ShieldCheck, Sparkles, Phone } from 'lucide-react';

export const FinalCta = () => {
  const { startBookingFlow, hotelInfo } = useHotel();

  return (
    <section
      style={{
        padding: '5.5rem 0',
        backgroundColor: '#FAF8F5',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #121820 0%, #1A2432 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '4rem 2.5rem',
            textAlign: 'center',
            color: '#FFFFFF',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(197, 168, 128, 0.3)'
          }}
        >
          {/* Decorative Background Circles */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197,168,128,0.18) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '-60px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197,168,128,0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span className="section-tag dark" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} /> Official Direct Booking
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}
            >
              Ready for Your Stay?
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#CBD5E1',
                lineHeight: 1.6,
                marginBottom: '2.5rem'
              }}
            >
              Book your room today and enjoy a comfortable experience at Welcome Hotel.
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
            >
              <button
                onClick={() => startBookingFlow()}
                className="btn btn-primary btn-lg"
                style={{ fontWeight: 600, padding: '1rem 2.8rem' }}
              >
                <Calendar size={18} /> Book Now
              </button>
            </div>

            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem',
                fontSize: '0.82rem',
                color: '#94A3B8',
                flexWrap: 'wrap'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={15} color="var(--success)" /> Instant Real-time Room Confirmation
              </span>
              <span>•</span>
              <span>Flexible Cancellation Available</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={14} color="var(--gold-400)" /> 24/7 Concierge Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
