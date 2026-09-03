// ==========================================================================
// WELCOME HOTEL - ABOUT US PAGE
// ==========================================================================

import React from 'react';
import { useHotel } from '../../context/HotelContext';
import { Sparkles, HeartHandshake, Target, Eye, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  const { navigateTo, startBookingFlow } = useHotel();

  return (
    <div style={{ paddingBottom: '6rem', backgroundColor: 'var(--bg-main)' }}>
      {/* Hero Header */}
      <section
        style={{
          position: 'relative',
          padding: '6rem 1.5rem 5rem 1.5rem',
          backgroundImage: `linear-gradient(to bottom, rgba(14, 22, 34, 0.75) 0%, rgba(14, 22, 34, 0.9) 100%), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="section-tag dark" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} /> Our Heritage & Story
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-brand)',
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}
          >
            Welcome to Welcome Hotel
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#E2E8F0',
              lineHeight: 1.7,
              fontWeight: 300
            }}
          >
            Welcome Hotel is committed to providing comfortable accommodation, quality dining, and excellent hospitality. Our goal is to make every guest feel welcome and enjoy a memorable stay.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Story Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '420px', boxShadow: 'var(--shadow-lg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
                  alt="Hotel Lobby & Ambiance"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Stat Pill */}
              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '1.5rem',
                  padding: '1.25rem 1.75rem',
                  border: '1px solid rgba(197, 168, 128, 0.4)',
                  boxShadow: 'var(--shadow-xl)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: 'var(--gold-700)' }}>
                  10 Suites
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Intimate Boutique Exclusivity
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <span className="section-tag">
                <HeartHandshake size={14} /> The Hotel Story
              </span>

              <h2 style={{ fontSize: '2.4rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                A Sanctuary of Warmth & Elegance
              </h2>

              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Conceived with a vision to redefine boutique luxury hospitality, Welcome Hotel was designed as an intimate 10-suite sanctuary where every single guest receives bespoke attention, personalized comforts, and unforgettable culinary experiences.
              </p>

              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                We believe that true luxury lies in simplicity, authenticity, and attentive warmth. Whether you are traveling for a romantic retreat, leisure vacation, or executive business, our dedicated staff ensures that your time with us feels effortlessly relaxing.
              </p>

              <button
                onClick={() => startBookingFlow()}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Experience Our Hospitality <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Hospitality Promise */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Target size={14} /> Core Principles
            </span>
            <h2>Our Values & Commitment</h2>
            <p>
              Guided by a commitment to authentic hospitality, culinary craft, and guest satisfaction.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Our Mission */}
            <div
              className="card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--gold-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-700)',
                  marginBottom: '1.25rem'
                }}
              >
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                To provide unmatched comfort, attentive service, and an authentic welcoming atmosphere that makes every traveler feel uniquely valued and completely at home from the moment they arrive.
              </p>
            </div>

            {/* Our Vision */}
            <div
              className="card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--gold-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-700)',
                  marginBottom: '1.25rem'
                }}
              >
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                To stand as the gold standard for independent boutique hospitality, renowned for seamless digital booking, sustainable luxury design, and extraordinary gourmet dining.
              </p>
            </div>

            {/* Hospitality Promise */}
            <div
              className="card"
              style={{
                padding: '2.5rem',
                backgroundColor: 'var(--bg-main)',
                border: '1px solid rgba(197, 168, 128, 0.4)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--gold-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-700)',
                  marginBottom: '1.25rem'
                }}
              >
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Hospitality Promise</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                We promise pristine cleanliness, instantaneous check-in, transparent pricing with no hidden fees, and front-desk team members who genuinely care about your comfort 24 hours a day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
