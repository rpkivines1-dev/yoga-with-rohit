import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star, Users, Video, Clock, MapPin, Award, CheckCircle2, Sun } from 'lucide-react';
import { BRAND, HERO_STATS } from '../../data/yogaData';

export default function Hero({ onOpenBooking }) {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = (e) => {
    e.preventDefault();
    const demoEl = document.getElementById('free-demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' });
    }
  };

  const openSundayFree = () => {
    onOpenBooking({ plan: 'sunday-free', title: 'Sunday Free Community Yoga (7:30 AM EST)', batch: '7:30 AM EST' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        paddingTop: '135px',
        paddingBottom: '85px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 85% 15%, rgba(194, 94, 26, 0.14) 0%, transparent 45%), radial-gradient(circle at 10% 70%, rgba(245, 158, 11, 0.12) 0%, transparent 45%), #FAF6F0',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Hero Column: Symmetrical Editorial Content */}
          <div style={{ textAlign: 'left', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Top Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '9999px',
                backgroundColor: 'var(--primary-50)',
                border: '1px solid var(--primary-100)',
                color: 'var(--primary-dark)',
                fontSize: '12.5px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}
            >
              <Award size={15} style={{ color: 'var(--primary)' }} />
              <span>500-HR YOGA ALLIANCE CERTIFIED • RISHIKESH</span>
            </div>

            {/* Main H1 Heading */}
            <h1
              style={{
                fontSize: 'clamp(36px, 4.4vw, 54px)',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              Balance Your Mind, <br />
              <span className="font-serif" style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--primary)' }}>
                Elevate Your Spirit
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(16px, 1.8vw, 18.5px)',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '28px',
                maxWidth: '540px',
              }}
            >
              Experience live interactive <strong>online yoga classes</strong> guided by Rohit, a master <strong>online yoga teacher from Rishikesh</strong>. Choose between <strong>Traditional Hatha</strong> & <strong>Ashtanga Vinyasa</strong> programs.
            </p>

            {/* Action Buttons Group */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '32px',
                width: '100%',
              }}
            >
              {/* Primary: Book Free Demo */}
              <button
                onClick={scrollToDemo}
                className="btn btn-primary btn-lg"
                style={{
                  boxShadow: '0 14px 32px -4px rgba(194, 94, 26, 0.45)',
                }}
              >
                <Sparkles size={18} style={{ color: '#FDE68A' }} />
                <span>Book Free Demo</span>
                <ArrowRight size={18} />
              </button>

              {/* Sunday Free Class Button */}
              <button
                onClick={openSundayFree}
                className="btn btn-accent btn-lg"
                style={{
                  boxShadow: '0 12px 28px -4px rgba(217, 119, 6, 0.4)',
                }}
              >
                <Sun size={18} />
                <span>Sunday Free Class</span>
              </button>

              {/* Schedule Link */}
              <a
                href="#schedule"
                className="btn btn-outline"
                style={{ padding: '14px 22px' }}
              >
                <span>Schedule</span>
              </a>
            </div>

            {/* Teacher Mini Callout Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '14px 20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid rgba(194, 94, 26, 0.14)',
                boxShadow: 'var(--shadow-sm)',
                width: '100%',
                maxWidth: '480px',
              }}
            >
              <img
                src="/images/certificates/trophy-award-honor.jpg"
                alt="Rohit Award of Honor Winner"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--primary)',
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                    Rohit (Lead Yoga Teacher)
                  </span>
                  <div style={{ display: 'flex', color: '#F59E0B' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#F59E0B" />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: 0 }}>
                  2025 Garhwal Cup Award of Honor • Rishikesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Arched Picture Frame Composition */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Background Decorative Offset Arch */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '12px',
                width: '88%',
                height: '100%',
                borderRadius: '240px 240px 24px 24px',
                backgroundColor: 'var(--primary-100)',
                zIndex: 0,
                transform: 'rotate(2.5deg)',
              }}
            />

            {/* Main Arch Frame */}
            <div
              className="nicepage-arch"
              style={{
                maxWidth: '420px',
                width: '100%',
                zIndex: 1,
              }}
            >
              <img
                src="/images/rohit-splits-ganges.jpg"
                alt="Rohit - Online Yoga Teacher from Rishikesh performing Hanumanasana split by Ganges River"
                style={{
                  width: '100%',
                  height: '510px',
                  objectFit: 'cover',
                  objectPosition: 'center 30%',
                }}
              />

              {/* Bottom Image Label */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '22px 20px',
                  background: 'linear-gradient(to top, rgba(35, 22, 13, 0.92) 0%, rgba(35, 22, 13, 0.2) 60%, transparent 100%)',
                  color: '#FFFFFF',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#FDE68A' }}>
                  Authentic Teacher from Rishikesh
                </span>
                <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#FFFFFF', margin: '2px 0 0' }}>
                  Rohit Kumar
                </h3>
              </div>
            </div>

            {/* Floating Badge 1: Live Interactive Batch */}
            <div
              className="animate-float"
              style={{
                position: 'absolute',
                top: '30px',
                left: '-15px',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(12px)',
                padding: '12px 18px',
                borderRadius: '18px',
                boxShadow: 'var(--shadow-lg)',
                border: '1.5px solid rgba(194, 94, 26, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #C25E1A, #A74A0E)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Video size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-dark)' }}>
                  Live Online Yoga Class
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  6 Daily Batches (Morning & Evening)
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Sunday Free Available */}
            <div
              className="animate-float-delayed"
              style={{
                position: 'absolute',
                bottom: '25px',
                right: '-15px',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(12px)',
                padding: '12px 18px',
                borderRadius: '18px',
                boxShadow: 'var(--shadow-lg)',
                border: '1.5px solid rgba(217, 119, 6, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #D97706, #B45309)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  flexShrink: 0,
                }}
              >
                <Sun size={18} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--text-main)' }}>
                  Sunday Free Class ($0)
                </div>
                <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
                  Open to Everyone Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Block Statistics Strip */}
        <div
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            alignItems: 'stretch',
          }}
          className="hero-stats-grid"
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '24px 20px',
                boxShadow: 'var(--shadow-sm)',
                border: '1.5px solid rgba(194, 94, 26, 0.12)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="hero-stat-box"
            >
              <div
                style={{
                  fontSize: 'clamp(26px, 2.5vw, 32px)',
                  fontWeight: 800,
                  color: 'var(--primary)',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-stat-box:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-grid > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div {
            justify-content: center !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
