// ==========================================================================
// WELCOME HOTEL - GALLERY COMPONENT
// ==========================================================================

import React, { useState } from 'react';
import { useHotel } from '../../context/HotelContext';
import { Sparkles, Maximize2, Camera } from 'lucide-react';

export const GalleryGrid = () => {
  const { gallery, openLightbox } = useHotel();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Hotel',
    'Deluxe Luxury Rooms',
    'Premium Rooms',
    'Restaurant',
    'Hotel Interiors'
  ];

  const filteredImages = gallery.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const allImageUrls = filteredImages.map((item) => item.image);

  return (
    <div style={{ padding: '4rem 0 6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Camera size={14} /> Visual Tour
          </span>
          <h2>Hotel Gallery & Photography</h2>
          <p>
            Immerse yourself in the architectural luxury, refined interiors, and tranquil ambiance of Welcome Hotel.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                backgroundColor: activeCategory === cat ? '#121820' : '#FFFFFF',
                color: activeCategory === cat ? '#FFFFFF' : 'var(--text-primary)',
                border: '1px solid var(--border-light)',
                boxShadow: activeCategory === cat ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Photo Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="card"
              style={{
                position: 'relative',
                height: '280px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onClick={() => openLightbox(allImageUrls, index, item.title)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Hover Dark Overlay with Title */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(14, 22, 34, 0.85) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  color: '#FFFFFF'
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--gold-400)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.25rem'
                  }}
                >
                  {item.category}
                </span>

                <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.description}
                </p>

                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
