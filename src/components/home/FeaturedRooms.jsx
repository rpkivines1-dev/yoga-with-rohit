// ==========================================================================
// WELCOME HOTEL - FEATURED ROOMS SHOWCASE
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { Sparkles, ArrowRight, Bed, Users, Maximize2, ShieldCheck, Check } from 'lucide-react';
import { formatCurrency } from '../../utils/helpers';

export const FeaturedRooms = () => {
  const { navigateTo, startBookingFlow } = useHotel();

  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} /> Room Collection
          </span>
          <h2>Experience Pure Luxury & Comfort</h2>
          <p>
            Welcome Hotel offers 10 meticulously designed guest rooms across two distinctive tiers of elegance and comfort.
          </p>
        </div>

        {/* Categories Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Deluxe Luxury Category Card */}
          <div
            className="card"
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(197, 168, 128, 0.4)'
            }}
          >
            <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                alt="Deluxe Luxury Rooms"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(14, 22, 34, 0.8) 0%, transparent 60%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem'
                }}
              >
                <span className="badge badge-deluxe" style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>
                  ★ Deluxe Luxury (5 Rooms: 101 - 105)
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  color: '#FFFFFF'
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#DCC7A8' }}>Starting from</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                  $230 <span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#E2E8F0' }}>/ night</span>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Deluxe Luxury Rooms
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Our pinnacle of elegance. Featuring expansive 440+ sq ft floorplans, king plush bedding, marble bathrooms with deep soaking tubs, rain showers, and private scenic balconies.
              </p>

              {/* Specs & Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.75rem',
                  fontSize: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Users size={15} color="var(--gold-600)" /> Up to 3 Guests
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Bed size={15} color="var(--gold-600)" /> Royal King Bed
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Maximize2 size={15} color="var(--gold-600)" /> 430 - 480 sq ft
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Check size={15} color="var(--gold-600)" /> Marble Bath & Tub
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigateTo('rooms', { category: 'Deluxe Luxury' })}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Explore Deluxe Rooms <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => startBookingFlow({ category: 'Deluxe Luxury' })}
                  className="btn btn-secondary"
                >
                  Book Deluxe
                </button>
              </div>
            </div>
          </div>

          {/* Premium Category Card */}
          <div
            className="card"
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-light)'
            }}
          >
            <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80"
                alt="Premium Rooms"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(14, 22, 34, 0.8) 0%, transparent 60%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem'
                }}
              >
                <span className="badge badge-premium" style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}>
                  ★ Premium (5 Rooms: 201 - 205)
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  color: '#FFFFFF'
                }}
              >
                <span style={{ fontSize: '0.85rem', color: '#DCC7A8' }}>Starting from</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                  $155 <span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#E2E8F0' }}>/ night</span>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Premium Rooms
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Smart modern luxury tailored for comfort. Boasts 320+ sq ft of curated living space, memory foam queen bedding, silent climate control, fast Wi-Fi, and panoramic skyline vistas.
              </p>

              {/* Specs & Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.75rem',
                  fontSize: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Users size={15} color="#1E4E79" /> Up to 2 Guests
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Bed size={15} color="#1E4E79" /> Queen Plush Bed
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Maximize2 size={15} color="#1E4E79" /> 315 - 340 sq ft
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-primary)' }}>
                  <Check size={15} color="#1E4E79" /> Rainfall Shower
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigateTo('rooms', { category: 'Premium' })}
                  className="btn btn-primary"
                  style={{ flex: 1, background: 'linear-gradient(135deg, #1E4E79 0%, #122B44 100%)' }}
                >
                  Explore Premium Rooms <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => startBookingFlow({ category: 'Premium' })}
                  className="btn btn-secondary"
                >
                  Book Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
