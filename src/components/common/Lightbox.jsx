// ==========================================================================
// WELCOME HOTEL - FULLSCREEN LIGHTBOX GALLERY
// ==========================================================================

import React, { useEffect } from 'react';
import { useHotel } from '../../context/HotelContext';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Lightbox = () => {
  const { lightbox, closeLightbox, nextLightboxImage, prevLightboxImage } = useHotel();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  if (!lightbox.isOpen || !lightbox.images.length) return null;

  const currentImage = lightbox.images[lightbox.currentIndex];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 14, 20, 0.95)',
        zIndex: 3000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease forwards'
      }}
      onClick={closeLightbox}
    >
      {/* Top Bar */}
      <div
        style={{
          position: 'absolute',
          top: '1.25rem',
          left: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFFFFF',
          zIndex: 3010
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'var(--font-brand)', color: 'var(--gold-400)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
            WELCOME HOTEL GALLERY
          </span>
          {lightbox.title && (
            <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>
              • {lightbox.title}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
            {lightbox.currentIndex + 1} / {lightbox.images.length}
          </span>
          <button
            onClick={closeLightbox}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Image View */}
      <div
        style={{
          maxWidth: '90vw',
          maxHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage}
          alt={lightbox.title || 'Gallery image'}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
          }}
        />
      </div>

      {/* Navigation Arrows */}
      {lightbox.images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxImage();
            }}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)'
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxImage();
            }}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)'
            }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}
    </div>
  );
};
