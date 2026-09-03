import React from 'react';
import { Compass, Clock, Sparkles, ArrowRight, CheckCircle2, Video } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../../data/yogaData';

export default function HowItWorks({ onOpenBooking }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={24} />;
      case 'Clock':
        return <Clock size={24} />;
      case 'Sparkles':
        return <Sparkles size={24} />;
      case 'Video':
        return <Video size={24} />;
      default:
        return <CheckCircle2 size={24} />;
    }
  };

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: '#FAF6F0',
        position: 'relative',
        borderTop: '1px solid rgba(194, 94, 26, 0.08)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>SIMPLE 4-STEP PROCESS</span>
          </div>

          <h2 className="section-title">
            How It Works – <span style={{ color: 'var(--primary)' }}>Start in 4 Easy Steps</span>
          </h2>

          <p className="section-subtitle">
            Joining your live <strong>online yoga class</strong> with Rohit is fast and seamless. Follow these 4 simple steps to begin your journey.
          </p>
        </div>

        {/* Nicepage 4-Step Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            position: 'relative',
            alignItems: 'stretch',
          }}
          className="how-it-works-grid"
        >
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="nicepage-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
                height: '100%',
                padding: '30px 22px',
              }}
            >
              <div>
                {/* Step Top Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
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
                      flexShrink: 0,
                    }}
                  >
                    {getIcon(step.icon)}
                  </div>

                  <span
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      color: 'var(--primary-200)',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1,
                    }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px', lineHeight: 1.3 }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.55', marginBottom: '16px', minHeight: '40px' }}>
                  {step.description}
                </p>

                {/* Step Options Pills */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                  {step.options.map((opt, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        color: 'var(--text-main)',
                        backgroundColor: 'var(--primary-50)',
                        padding: '6px 10px',
                        borderRadius: '8px',
                        border: '1px solid rgba(194, 94, 26, 0.1)',
                      }}
                    >
                      <CheckCircle2 size={13} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Action Button */}
              {index === 0 && (
                <a
                  href="#schedule"
                  className="btn btn-outline btn-sm w-full"
                >
                  Explore Programs
                </a>
              )}
              {index === 1 && (
                <a
                  href="#schedule"
                  className="btn btn-outline btn-sm w-full"
                >
                  View Schedule
                </a>
              )}
              {index === 2 && (
                <a
                  href="#pricing"
                  className="btn btn-outline btn-sm w-full"
                >
                  View Packages
                </a>
              )}
              {index === 3 && (
                <button
                  onClick={() => onOpenBooking({ plan: 'demo', title: 'Free Demo Online Yoga Class' })}
                  className="btn btn-primary btn-sm w-full"
                >
                  Book Free Demo
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .how-it-works-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 580px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
