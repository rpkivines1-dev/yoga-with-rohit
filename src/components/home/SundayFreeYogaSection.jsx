import React, { useState } from 'react';
import { Sparkles, Sun, Clock, Globe, CheckCircle2, ArrowRight, Video, Heart, ShieldCheck, Calendar, Users, Star } from 'lucide-react';
import { SUNDAY_FREE_YOGA, TIMEZONE_OPTIONS, BRAND } from '../../data/yogaData';

export default function SundayFreeYogaSection({ onOpenBooking }) {
  const [selectedTz, setSelectedTz] = useState('EST');

  const convertEST = (hourDecimal, targetTzCode) => {
    const tzObj = TIMEZONE_OPTIONS.find((t) => t.code === targetTzCode) || TIMEZONE_OPTIONS[0];
    const diffHours = tzObj.offset + 5;
    let newHour = (hourDecimal + diffHours) % 24;
    if (newHour < 0) newHour += 24;

    const hours = Math.floor(newHour);
    const minutes = Math.round((newHour - hours) * 60);
    const isPM = hours >= 12;
    const formattedHour = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const ampm = isPM ? 'PM' : 'AM';

    return `${formattedHour}:${formattedMinutes} ${ampm} ${targetTzCode}`;
  };

  const sundayBatch = SUNDAY_FREE_YOGA.batches[0];
  const converted = convertEST(sundayBatch.hourEST, selectedTz);

  return (
    <section
      id="sunday-free"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F4EBE1 0%, #FAF6F0 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1.5px solid rgba(194, 94, 26, 0.12)',
        borderBottom: '1.5px solid rgba(194, 94, 26, 0.12)',
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Header Centered */}
        <div className="text-center" style={{ marginBottom: '44px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 20px',
              borderRadius: '9999px',
              backgroundColor: '#FEF3C7',
              border: '1.5px solid #F59E0B',
              color: '#92400E',
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            <Sun size={15} style={{ color: '#D97706' }} />
            <span>100% FREE COMMUNITY CLASS • EVERY SUNDAY</span>
          </div>

          <h2 className="section-title">
            Sunday Free <span style={{ color: 'var(--primary)' }}>Community Yoga</span>
          </h2>

          <p className="section-subtitle">
            Join Rohit live every Sunday for our special <strong>7:30 AM EST</strong> community session. Rejuvenate your body, calm your mind, and experience authentic yoga from Rishikesh at zero cost.
          </p>

          {/* Timezone Converter Pill Centered */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '16px',
              padding: '8px 20px',
              backgroundColor: '#FFFFFF',
              borderRadius: '9999px',
              border: '1px solid rgba(194, 94, 26, 0.2)',
              boxShadow: 'var(--shadow-sm)',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Globe size={16} style={{ color: 'var(--primary)' }} />
            <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-main)' }}>
              Select Timezone:
            </span>
            <select
              value={selectedTz}
              onChange={(e) => setSelectedTz(e.target.value)}
              style={{
                border: '1px solid var(--primary)',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--primary-dark)',
                backgroundColor: 'var(--primary-50)',
                cursor: 'pointer',
              }}
            >
              {TIMEZONE_OPTIONS.map((tz) => (
                <option key={tz.code} value={tz.code}>
                  {tz.flag} {tz.code} ({tz.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Single Featured Sunday Batch Card */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto 48px',
          }}
        >
          <div
            className="nicepage-card"
            style={{
              border: '2.5px solid var(--primary)',
              position: 'relative',
              backgroundColor: '#FFFFFF',
              textAlign: 'left',
              padding: '36px 32px',
              borderRadius: '28px',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            {/* Highlight Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-14px',
                right: '28px',
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                fontSize: '11.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '5px 16px',
                borderRadius: '9999px',
                boxShadow: '0 6px 16px rgba(194, 94, 26, 0.3)',
              }}
            >
              {sundayBatch.badge}
            </div>

            {/* Card Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--primary-50)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Sun size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                  {sundayBatch.name}
                </h3>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--accent)' }}>
                  100% Free Every Sunday • Live on Zoom / Google Meet
                </span>
              </div>
            </div>

            {/* Big Time Display */}
            <div
              style={{
                padding: '20px',
                backgroundColor: 'var(--bg-sand)',
                borderRadius: '20px',
                marginBottom: '22px',
                border: '1.5px solid rgba(194, 94, 26, 0.15)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                Official Sunday Batch Time (EST)
              </div>
              <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
                {sundayBatch.timeEST}
              </div>

              {selectedTz !== 'EST' && (
                <div
                  style={{
                    marginTop: '8px',
                    paddingTop: '8px',
                    borderTop: '1px dashed rgba(194, 94, 26, 0.2)',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                  }}
                >
                  Your Local Time: <strong>{converted}</strong>
                </div>
              )}
            </div>

            {/* Focus Description */}
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '22px' }}>
              <strong>Focus & Practice:</strong> {sundayBatch.focus}. Designed for all skill levels from complete beginners to daily practitioners.
            </p>

            {/* Highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>Live 60-Min Session</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>Zero Cost ($0)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>No Card Required</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>Live Q&A with Rohit</span>
              </div>
            </div>

            {/* Join Button */}
            <button
              onClick={() => onOpenBooking({ plan: 'sunday-free', title: 'Sunday Free Community Yoga (7:30 AM EST)', batch: '7:30 AM EST' })}
              className="btn btn-primary btn-lg w-full animate-pulse-glow"
              style={{ padding: '14px 24px', fontSize: '15px' }}
            >
              <Sparkles size={18} style={{ color: '#FDE68A' }} />
              <span>Join Sunday Free Class (7:30 AM EST)</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Banner Callout with Balanced Alignment */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '28px 36px',
            border: '1.5px solid rgba(194, 94, 26, 0.15)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            textAlign: 'left',
          }}
          className="sunday-footer-card"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '680px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Heart size={24} />
            </div>
            <div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary-dark)', margin: 0 }}>
                Why is Sunday Yoga 100% Free?
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: '4px 0 0' }}>
                Rohit believes in the sacred tradition of Seva (service). Every Sunday at 7:30 AM EST is an open invitation for anyone worldwide to experience inner peace.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking({ plan: 'sunday-free', title: 'Sunday Free Community Yoga (7:30 AM EST)', batch: '7:30 AM EST' })}
            className="btn btn-primary"
            style={{ flexShrink: 0 }}
          >
            <Sparkles size={16} style={{ color: '#FDE68A' }} />
            <span>Reserve Your Sunday Spot</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 940px) {
          .sunday-footer-card {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .sunday-footer-card > div:first-child {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
