import React, { useState } from 'react';
import { Award, CheckCircle2, Heart, Sparkles, Star, BookOpen, Compass, ArrowRight, UserCheck, Flame, Sun, MapPin, Trophy } from 'lucide-react';
import { TEACHER_BIO, BRAND } from '../../data/yogaData';

export default function About({ onOpenBooking }) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Nicepage Overlapping Image Composition */}
          <div style={{ position: 'relative' }}>
            {/* Main Arch Frame */}
            <div
              className="nicepage-arch"
              style={{
                maxWidth: '460px',
                width: '100%',
                margin: '0 auto',
              }}
            >
              <img
                src="/images/rohit-meditation-namaste.jpg"
                alt="Rohit - Certified Online Yoga Teacher from Rishikesh in Pranamasana Meditation by Holy Ganges River"
                style={{
                  width: '100%',
                  height: '540px',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                }}
              />

              {/* Bottom Image Caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px',
                  background: 'linear-gradient(to top, rgba(35, 22, 13, 0.95) 0%, rgba(35, 22, 13, 0.3) 60%, transparent 100%)',
                  color: '#FFFFFF',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#FDE68A', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Authentic Teacher from Rishikesh
                  </span>
                  <div style={{ display: 'flex', color: '#F59E0B' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#F59E0B" />
                    ))}
                  </div>
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  Rohit • Lead Online Yoga Teacher
                </h3>
              </div>
            </div>

            {/* Nicepage Overlapping Circular Card: Waterfall Meditation */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '150px',
                height: '150px',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '5px solid #FFFFFF',
                boxShadow: 'var(--shadow-lg)',
                backgroundColor: '#FFF',
                zIndex: 2,
              }}
            >
              <img
                src="/images/rohit-waterfall-meditation.jpg"
                alt="Sacred Waterfall Stream Meditation by Rohit in Rishikesh"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Floating Trophy Badge */}
            <div
              className="animate-float-delayed"
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '-15px',
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                padding: '12px 18px',
                boxShadow: 'var(--shadow-lg)',
                border: '1.5px solid rgba(194, 94, 26, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--primary-50)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Trophy size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-dark)' }}>
                  Award of Honor
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Garhwal Cup Yoga 2025
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content & Nicepage Pillars */}
          <div style={{ textAlign: 'left' }}>
            {/* Tag */}
            <div className="section-tag">
              <MapPin size={15} />
              <span>AUTHENTIC TEACHER FROM RISHIKESH</span>
            </div>

            {/* Main Heading */}
            <h2
              className="section-title"
              style={{ marginBottom: '20px' }}
            >
              Meet Your <span style={{ color: 'var(--primary)' }}>Online Yoga Teacher</span> from Rishikesh – Rohit
            </h2>

            {/* Required Intro Text */}
            <div
              style={{
                padding: '18px 22px',
                backgroundColor: 'var(--primary-50)',
                borderLeft: '4px solid var(--primary)',
                borderRadius: '0 16px 16px 0',
                marginBottom: '24px',
              }}
            >
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: '1.7',
                  color: 'var(--primary-dark)',
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {TEACHER_BIO.intro}
              </p>
            </div>

            {/* Teacher description */}
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
              As a dedicated <strong>online yoga teacher from Rishikesh</strong>—the world capital of yoga—Rohit brings authentic ancient traditions directly to your home. Every <strong>online yoga class</strong> combines dynamic flow, deep pranayama breathwork, and precise adjustments to help you build functional strength and calm anxiety.
            </p>

            {/* Nicepage 3-Pillar Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginBottom: '32px' }}>
              {TEACHER_BIO.certifications.slice(0, 3).map((cert, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 18px',
                    borderRadius: '16px',
                    backgroundColor: '#FAF6F0',
                    border: '1px solid rgba(194, 94, 26, 0.12)',
                  }}
                >
                  <div className="nicepage-number-pill">
                    0{index + 1}
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => setShowMoreModal(true)}
                className="btn btn-outline"
              >
                <BookOpen size={16} />
                <span>Learn More About Rohit</span>
              </button>

              <button
                onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' })}
                className="btn btn-primary"
              >
                <Sparkles size={16} style={{ color: '#FDE68A' }} />
                <span>Book Free Demo Online Yoga Class</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Interactive Modal */}
      {showMoreModal && (
        <div
          className="modal-overlay active"
          onClick={() => setShowMoreModal(false)}
        >
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
            style={{ padding: '36px', maxWidth: '640px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-50)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                    About Online Yoga Teacher Rohit
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600, margin: 0 }}>
                    5+ Years Experience • Teacher from Rishikesh, India
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMoreModal(false)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-surface-alt)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', textAlign: 'left' }}>
              <p>
                {TEACHER_BIO.description}
              </p>
              <div style={{ backgroundColor: 'var(--primary-50)', padding: '16px', borderRadius: '16px', border: '1px solid var(--primary-100)' }}>
                <h4 style={{ color: 'var(--primary-dark)', fontSize: '15px', fontWeight: 700, marginBottom: '6px' }}>
                  What you will experience in every online yoga class:
                </h4>
                <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: 'var(--text-main)' }}>
                  <li>Step-by-step guidance from an authentic <strong>online yoga teacher from Rishikesh</strong>.</li>
                  <li>Live, personalized video posture corrections and breathwork cues.</li>
                  <li>Pranayama routines to reduce daily stress and increase mental focus.</li>
                  <li>Gentle meditation and relaxation in Savasana at the end of every session.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => setShowMoreModal(false)}
                className="btn btn-outline btn-sm"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowMoreModal(false);
                  onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
                }}
                className="btn btn-primary btn-sm"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 920px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
