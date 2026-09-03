import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareHeart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/yogaData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '56px' }}>
          <div className="section-tag">
            <MessageSquareHeart size={14} />
            <span>GLOBAL STUDENT COMMUNITY</span>
          </div>

          <h2 className="section-title">
            Words from Rohit's <span style={{ color: 'var(--primary)' }}>Students</span>
          </h2>

          <p className="section-subtitle">
            Read how daily live yoga classes have relieved chronic tension, elevated flexibility, and brought mindful calm to lives worldwide.
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Main Testimonial Card */}
          <div
            className="glass-card testimonial-card-inner"
            style={{
              padding: '48px 40px',
              borderRadius: '28px',
              backgroundColor: '#FAF8F5',
              border: '1.5px solid rgba(44, 94, 67, 0.12)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              textAlign: 'left',
            }}
          >
            {/* Top Quote Icon and Star Rating */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  backgroundColor: 'var(--primary-50)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Quote size={24} />
              </div>

              {/* 5 Stars */}
              <div style={{ display: 'flex', gap: '4px', color: '#F59E0B' }}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" />
                ))}
              </div>
            </div>

            {/* Review Body */}
            <blockquote
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                lineHeight: '1.7',
                color: 'var(--text-main)',
                fontStyle: 'italic',
                marginBottom: '32px',
                fontFamily: 'var(--font-serif)',
              }}
            >
              "{current.review}"
            </blockquote>

            {/* Student Profile Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: '1px solid rgba(44, 94, 67, 0.12)',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img
                  src={current.avatar}
                  alt={current.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2.5px solid var(--primary)',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                    {current.name}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span>{current.flag}</span>
                    <span>{current.country}</span>
                  </div>
                </div>
              </div>

              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  backgroundColor: 'var(--primary-50)',
                  color: 'var(--primary)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                }}
              >
                {current.package}
              </span>
            </div>
          </div>

          {/* Slider Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <button
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid rgba(44, 94, 67, 0.2)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicator Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '9999px',
                    backgroundColor: currentIndex === idx ? 'var(--primary)' : 'rgba(44, 94, 67, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid rgba(44, 94, 67, 0.2)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonial-card-inner {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
