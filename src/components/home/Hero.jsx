import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Star, Users, Video, Clock, MapPin, Award, CheckCircle2, Sun, Play, X } from 'lucide-react';
import { BRAND, HERO_STATS } from '../../data/yogaData';

export default function Hero({ onOpenBooking }) {
  const [rishikeshTime, setRishikeshTime] = useState('');
  const [countdown, setCountdown] = useState({ hours: '04', minutes: '28', seconds: '45' });
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const timeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        });
        setRishikeshTime(timeStr);
      } catch (e) {
        setRishikeshTime('5:30 PM IST');
      }

      // Next session countdown simulation (realistic real-time tick)
      const sec = 59 - now.getSeconds();
      const min = (59 - now.getMinutes()) % 60;
      const hr = (23 - now.getHours() + 6) % 12;
      setCountdown({
        hours: hr < 10 ? `0${hr}` : `${hr}`,
        minutes: min < 10 ? `0${min}` : `${min}`,
        seconds: sec < 10 ? `0${sec}` : `${sec}`,
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

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
        {/* Prospective Live Studio Pulse & Real-Time Batch Countdown */}
        <div
          className="hero-studio-pulse"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            padding: '12px 22px',
            border: '1.5px solid rgba(194, 94, 26, 0.16)',
            boxShadow: '0 8px 24px -4px rgba(69, 26, 3, 0.08)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* Left: Studio Live Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="live-pulse-dot" />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-dark)' }}>
                  Rishikesh Studio Live: {rishikeshTime || '5:30 PM IST'}
                </span>
                <span style={{ fontSize: '11px', backgroundColor: '#FEF3C7', color: '#B45309', padding: '2px 8px', borderRadius: '9999px', fontWeight: 700 }}>
                  India (IST)
                </span>
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                Direct from World Capital of Yoga • 1-on-1 Camera Corrections
              </div>
            </div>
          </div>

          {/* Right: Next Batch Countdown & Urgent Availability */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)' }}>
                Next Live Batch In:
              </span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div className="countdown-box"><span className="num">{countdown.hours}</span><span className="label">HRS</span></div>
                <div className="countdown-box"><span className="num">{countdown.minutes}</span><span className="label">MIN</span></div>
                <div className="countdown-box"><span className="num">{countdown.seconds}</span><span className="label">SEC</span></div>
              </div>
            </div>

            <button
              onClick={scrollToDemo}
              style={{
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                fontSize: '12.5px',
                fontWeight: 800,
                padding: '9px 18px',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(194, 94, 26, 0.3)',
              }}
            >
              <Sparkles size={14} style={{ color: '#FDE68A' }} />
              <span>Free Demo (3 Spots Left)</span>
            </button>
          </div>
        </div>

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
              Online Yoga Classes <br />
              <span className="font-serif" style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--primary)' }}>
                with Rohit
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
              Join live <strong>online yoga classes with Rohit</strong> and practice <strong>Traditional Hatha Yoga</strong> and <strong>Ashtanga Vinyasa Primary Series</strong> from anywhere. Personalized posture guidance direct from Rishikesh.
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

              {/* Watch Practice Preview Trigger */}
              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  padding: '10px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--primary-50)',
                  border: '1px solid var(--primary-100)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Play size={11} fill="#FFFFFF" />
                </div>
                <span>Class Preview (30s)</span>
              </button>
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

          {/* Right Hero Column: Pure Meditating Teacher Rohit Image (No Borders, No Badges, Pure Cutout) */}
          <div
            className="hero-image-column"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <img
              src="/images/rohit-meditation-hero.png"
              srcSet="/images/rohit-meditation-hero.png 1x, /images/rohit-meditation-transparent.png 2x"
              alt="Rohit Kumar - Lead Yoga Teacher from Rishikesh in Meditative Sukhasana"
              className="hero-meditation-pure-img"
            />
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

      {/* 30-Second Practice Preview Modal */}
      {previewOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(35, 22, 13, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.25s ease',
          }}
          onClick={() => setPreviewOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '26px',
              maxWidth: '560px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(194, 94, 26, 0.2)',
              position: 'relative',
              animation: 'slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid rgba(194, 94, 26, 0.12)',
                backgroundColor: 'var(--primary-50)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} color="var(--primary)" />
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Live Class Glimpse from Rishikesh
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(35, 22, 13, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-main)',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Media & Content */}
            <div style={{ padding: '24px' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <img
                  src="/images/rohit-splits-ganges.jpg"
                  alt="Rohit Yoga in Rishikesh"
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(35, 22, 13, 0.8) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '18px 20px',
                  }}
                >
                  <div style={{ color: '#FFFFFF' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FDE68A' }}>
                      Ganges Valley, Rishikesh
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800 }}>
                      Authentic Master Lineage • Daily Live Interactive Zoom
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Small interactive batches (max 15 students) for personalized attention</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Verbal posture corrections given in real time through your Zoom camera</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="#16A34A" />
                  <span>Suitable for complete beginners, stiff bodies, and intermediate yogis</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setPreviewOpen(false);
                  scrollToDemo({ preventDefault: () => {} });
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                <Sparkles size={17} style={{ color: '#FDE68A' }} />
                <span>Experience It Live — Book Free Demo</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes meditationPureFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            filter: drop-shadow(0 14px 28px rgba(194, 94, 26, 0.16));
          }
          50% {
            transform: translateY(-12px) scale(1.02);
            filter: drop-shadow(0 24px 44px rgba(194, 94, 26, 0.28));
          }
        }
        .hero-meditation-pure-img {
          width: 100%;
          max-width: 520px;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto;
          animation: meditationPureFloat 6s ease-in-out infinite;
          transform-origin: center bottom;
          will-change: transform, filter;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
          user-select: none;
        }
        .hero-meditation-pure-img:hover {
          transform: translateY(-16px) scale(1.035);
          filter: drop-shadow(0 30px 52px rgba(194, 94, 26, 0.36));
        }

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
          .hero-image-column {
            margin: 0 auto !important;
            width: 100% !important;
            max-width: 460px !important;
          }
          .hero-meditation-pure-img {
            max-width: 440px !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .hero-image-column {
            max-width: 350px !important;
          }
          .hero-meditation-pure-img {
            max-width: 340px !important;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 380px) {
          .hero-image-column {
            max-width: 290px !important;
          }
          .hero-meditation-pure-img {
            max-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
