// ==========================================================================
// WELCOME HOTEL - HERO SECTION
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export const HeroSection = () => {
  const { navigateTo, startBookingFlow } = useHotel();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        backgroundImage: `linear-gradient(to bottom, rgba(14, 22, 34, 0.65) 0%, rgba(14, 22, 34, 0.85) 100%), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=90')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '5rem 1.5rem 7rem 1.5rem',
        textAlign: 'center'
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '920px',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Rating / Boutique Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(197, 168, 128, 0.4)',
            padding: '0.45rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            marginBottom: '1.75rem',
            fontSize: '0.85rem',
            color: '#EADDC9'
          }}
        >
          <div style={{ display: 'flex', color: '#F59E0B' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#F59E0B" />
            ))}
          </div>
          <span style={{ fontWeight: 600 }}>5-Star Boutique Experience</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>10 Exclusive Luxury Rooms</span>
        </div>

        {/* Main Hotel Name */}
        <h1
          style={{
            fontFamily: 'var(--font-brand)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '0.14em',
            lineHeight: 1.1,
            color: '#FFFFFF',
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            marginBottom: '0.85rem'
          }}
        >
          WELCOME HOTEL
        </h1>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.4rem, 3.2vw, 2.3rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#DCC7A8',
            marginBottom: '1.5rem',
            textShadow: '0 2px 15px rgba(0,0,0,0.4)'
          }}
        >
          Comfort, Luxury & Hospitality
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            color: '#E2E8F0',
            maxWidth: '720px',
            marginBottom: '2.5rem',
            fontWeight: 300
          }}
        >
          Experience a comfortable and memorable stay at Welcome Hotel. Explore our elegant rooms, enjoy delicious dining, and experience warm hospitality.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
          }}
        >
          <button
            onClick={() => startBookingFlow()}
            className="btn btn-primary btn-lg"
            style={{ fontWeight: 600, boxShadow: '0 8px 30px rgba(197, 168, 128, 0.45)' }}
          >
            <Calendar size={18} /> Book Your Stay
          </button>

          <button
            onClick={() => navigateTo('rooms')}
            className="btn btn-secondary btn-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              borderColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(8px)'
            }}
          >
            Explore Rooms <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
