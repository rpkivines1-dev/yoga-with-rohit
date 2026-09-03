import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Sparkles, MapPin, Filter } from 'lucide-react';
import { ASANA_GALLERY, BRAND } from '../../data/yogaData';

export default function AsanaGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Poses' },
    { id: 'flexibility', label: 'Flexibility & Spine' },
    { id: 'strength', label: 'Core & Arm Balance' },
    { id: 'meditation', label: 'Meditation & Pranayama' },
  ];

  const filteredItems = activeCategory === 'all'
    ? ASANA_GALLERY
    : ASANA_GALLERY.filter((item) => item.categoryKey === activeCategory);

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setSelectedPhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section
      id="gallery"
      className="section-padding"
      style={{
        backgroundColor: '#FAF8F5',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div className="section-tag">
            <Camera size={14} />
            <span>AUTHENTIC PRACTICE & ASANA MASTERY</span>
          </div>

          <h2 className="section-title">
            Meet Rohit on the <span style={{ color: 'var(--primary)' }}>Mat</span>
          </h2>

          <p className="section-subtitle">
            Glimpses of Rohit's personal sadhana (practice) in the yogic capital of Rishikesh, the holy Ganges River bank, and the yoga shala.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: activeCategory === cat.id ? '1.5px solid var(--primary)' : '1px solid rgba(44, 94, 67, 0.15)',
                backgroundColor: activeCategory === cat.id ? 'var(--primary)' : '#FFFFFF',
                color: activeCategory === cat.id ? '#FFFFFF' : 'var(--text-muted)',
                boxShadow: activeCategory === cat.id ? 'var(--shadow-primary)' : 'var(--shadow-sm)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="asana-gallery-grid"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                height: '340px',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: '#E5DFD5',
                border: '4px solid #FFFFFF',
              }}
              className="gallery-item-card"
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.5s ease',
                }}
                className="gallery-img"
              />

              {/* Hover Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 31, 23, 0.92) 0%, rgba(18, 31, 23, 0.25) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  color: '#FFFFFF',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#F9B273',
                    backgroundColor: 'rgba(201, 122, 53, 0.35)',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    alignSelf: 'flex-start',
                    marginBottom: '6px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {item.category}
                </span>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF', margin: 0, marginBottom: '4px' }}>
                  {item.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.85)' }}>
                  <MapPin size={13} style={{ color: '#4ADE80' }} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredItems[selectedPhotoIndex] && (
        <div
          className="modal-overlay active"
          onClick={closeLightbox}
          style={{ padding: '16px' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '860px',
              width: '100%',
              backgroundColor: '#121F17',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Top Bar */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 800, margin: 0 }}>
                  {filteredItems[selectedPhotoIndex].title}
                </h4>
                <p style={{ color: '#F9B273', fontSize: '13px', margin: 0 }}>
                  {filteredItems[selectedPhotoIndex].location}
                </p>
              </div>

              <button
                onClick={closeLightbox}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image View */}
            <div style={{ position: 'relative', width: '100%', height: '520px', backgroundColor: '#0A130E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={filteredItems[selectedPhotoIndex].image}
                alt={filteredItems[selectedPhotoIndex].title}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={prevPhoto}
                aria-label="Previous Photo"
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextPhoto}
                aria-label="Next Photo"
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div style={{ padding: '16px 24px', backgroundColor: '#1A2C22', color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px', textAlign: 'left' }}>
              {filteredItems[selectedPhotoIndex].description}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item-card:hover .gallery-img {
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .asana-gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .asana-gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
