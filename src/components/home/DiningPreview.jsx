// ==========================================================================
// WELCOME HOTEL - DINING PREVIEW SECTION
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { UtensilsCrossed, Sparkles, Clock, ArrowRight, Award } from 'lucide-react';

export const DiningPreview = () => {
  const { navigateTo } = useHotel();

  return (
    <section
      style={{
        padding: '5.5rem 0',
        backgroundColor: '#121820',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Content */}
          <div>
            <span className="section-tag dark">
              <UtensilsCrossed size={14} /> Gourmet Culinary
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: '1.25rem'
              }}
            >
              Dine With Us
            </h2>

            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Enjoy delicious food and a comfortable dining experience at Welcome Hotel. Our culinary team prepares extraordinary dishes crafted from locally sourced, farm-fresh ingredients paired with sommelier-curated reserve wines.
            </p>

            {/* Timings & Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
                marginBottom: '2.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.5rem 0'
              }}
            >
              <div>
                <div style={{ color: 'var(--gold-400)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} /> Breakfast & Brunch
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.85rem' }}>7:00 AM – 11:00 AM</div>
              </div>

              <div>
                <div style={{ color: 'var(--gold-400)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} /> Lunch & Dinner
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.85rem' }}>12:30 PM – 11:00 PM</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigateTo('restaurant')}
                className="btn btn-primary btn-lg"
              >
                Explore Restaurant <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Image Collage */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '1rem'
              }}
            >
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '340px' }}>
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant Dining Room"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '160px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
                    alt="Signature Steak"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '165px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
                    alt="Artisan Dessert"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Chef Badge */}
            <div
              className="glass-card-dark"
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '1.5rem',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid rgba(197, 168, 128, 0.4)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--gold-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Award size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF' }}>
                  Executive Head Chef
                </div>
                <div style={{ fontSize: '0.75rem', color: '#DCC7A8' }}>
                  Artisanal Seasonal Menu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
